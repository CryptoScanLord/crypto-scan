import { Res } from './privateTypes'

export async function getTokenPrice(token: string) {
  const res: Res[] = await fetch(
    `https://turbo.ordinalswallet.com/brc20/${token}/inscriptions?offset=0&order=PriceAsc&listed=false`,
  ).then((data) => data.json())
  const amount: number = res[0] ? res[0].amount : 0
  const satoshiPrice: number = res[0] ? res[0].escrow.satoshi_price : 0
  const tokenPrice: number | null = satoshiPrice / amount || null
  return tokenPrice
}
