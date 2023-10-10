import { CacheInterceptor }             from '@nestjs/cache-manager'
import { CacheTTL }                     from '@nestjs/cache-manager'
import { Controller }                   from '@nestjs/common'
import { Get }                          from '@nestjs/common'
import { InternalServerErrorException } from '@nestjs/common'
import { Param }                        from '@nestjs/common'
import { UseGuards }                    from '@nestjs/common'
import { UseInterceptors }              from '@nestjs/common'

import { getHistory }                   from '@crawler/blockchain'
import { getPriceHistory }              from '@crawler/coindesk'
import { RoleGuard }                    from '@lib/auth-nestjs'
import { SupabaseGuard }                from '@lib/auth-nestjs'

const DAY = 24 * 60 * 60 * 1000

@Controller('wallet/:wallet')
export class WalletController {
  @Get('graph')
  @UseInterceptors(CacheInterceptor)
  @CacheTTL(60 * 1000)
  @UseGuards(SupabaseGuard, RoleGuard)
  async getGraph(@Param('wallet') wallet: string) {
    const actualPrice = await fetch('https://ordapi.bestinslot.xyz/v1/btc_price').then((res) => res.text().then(Number))

    const { entries, balance } = await getHistory(wallet)

    if (entries.length === 0) {
      return []
    }

    const first = entries.at(0)!
    const last = entries.at(-1) ?? first

    const [endRange] = first
    const [startRange] = last

    const prices = await getPriceHistory(new Date(startRange - DAY), new Date(endRange + DAY))

    prices.reverse()

    if (prices.length === 0) {
      throw new InternalServerErrorException(null, 'Prices array is empty')
    }

    let iterableBalance = balance

    let priceIdx = 0
    let lastPrice = prices[0]!

    const mappedHistory = entries
      .map(([entryTime, delta]) => {
        if (!lastPrice) {
          return undefined
        }

        while (lastPrice[0] > entryTime) {
          lastPrice = prices[++priceIdx]!

          if (!lastPrice) {
            return undefined
          }
        }

        const [, price] = lastPrice

        iterableBalance -= delta

        return [entryTime, (price * iterableBalance) / 100000000]
      })
      .filter(Boolean)

    mappedHistory.unshift([Date.now(), (actualPrice * balance) / 100000000])

    return mappedHistory
  }
}
