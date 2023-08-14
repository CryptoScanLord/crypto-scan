import { Controller, Get, UseInterceptors } from '@nestjs/common'
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager'

@Controller('btc')
export class BtcController {
  @Get('history')
  @UseInterceptors(CacheInterceptor)
  @CacheTTL(3000 * 1000)
  async getHistory() {
    const currency = 'USD'
    const { prices } = await fetch('https://mempool.space/api/v1/historical-price').then((res) => res.json())

    return Object.fromEntries(prices.map(({ time, ...currencies }: any) => [time / 100, currencies[currency]]))
  }
}
