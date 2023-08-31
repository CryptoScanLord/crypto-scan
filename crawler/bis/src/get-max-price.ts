import * as Prv from './private-types.js'
import * as Pub from './public-types.js'

export async function getMaxPrice(collectionSlug: string): Promise<Pub.MaxPrice> {
  const res: Prv.CollectionActivity[] = await fetch(
    `https://ordapi.bestinslot.xyz/v1/get_collection_activity/${collectionSlug}/8/1/0`,
  ).then((res) => res.json())
  const maxPrice: Prv.CollectionActivity = res.reduce(
    (maxPeak: Prv.CollectionActivity, peak: Prv.CollectionActivity) =>
      maxPeak.psbt_price > peak.psbt_price ? maxPeak : peak,
  )
  return {
    maxPrice: maxPrice.psbt_price,
  }
}
