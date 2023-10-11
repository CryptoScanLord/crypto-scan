import { VolumeRes } from '@crawler/bis'

import { WalletRes } from './privateTypes'

export async function getTokens(wallet: string) {
  const res: WalletRes = await fetch(`https://turbo.ordinalswallet.com/wallet/${wallet}`).then((data) => data.json())
  const tokens = res.brc20
  return tokens.map(async (el) => {
    const { sale_24h: volume24, total_sale: allVolume }: VolumeRes = await fetch(
      `https://ordapi.bestinslot.xyz/v1/get_brc20_ticker/${el.ticker.toLowerCase()}`,
    )
      .then((data) => data.json())
      .then((data) => data.sales[0])
    return {
      name: el.ticker,
      amount: el.available_balance,
      floorPrice: el.floor_price_per ? el.floor_price_per : 0,
      amountSpent: 'soon',
      volume24: Number(volume24) / 100000000,
      volumeAll: Number(allVolume) / 100000000,
    }
  })
}
