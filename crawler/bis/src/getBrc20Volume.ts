import { Volume } from './private-types'

export async function getBrc20Volume(token: string) {
  const res: Volume = await fetch(`https://ordapi.bestinslot.xyz/v1/get_brc20_ticker/${token}`)
    .then((data) => data.json())
    .then((data) => data.sales)
  return { volume24: res.sale_24h, allVolume: res.total_sale }
}
