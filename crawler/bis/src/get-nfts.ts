import * as Prv from './private-types.js'
import { transformData } from './transform.js'
import { NftDataApi } from './private-types.js'

export async function getNFTs(wallet: string) {
  const baseUrl = 'https://ordapi.bestinslot.xyz/v1/'
  const url = new URL(`get_inscriptions/${wallet}`, baseUrl)

  const data: NftDataApi[] = await fetch(url).then((res) => res.json() satisfies Promise<Prv.NftDataApi[]>)
  const filtered = data.filter((elem) => elem.content_type.startsWith('image'))

  return filtered.map((nft) => transformData(nft))
}
