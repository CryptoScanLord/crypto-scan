import * as Prv from './private-types.js'
import * as Pub from './public-types.js'

export async function getMaxPrice(collectionSlug: string): Promise<Pub.MaxPrice> {
  let maxPrice!: Prv.CollectionActivity | undefined

  let temp!: Prv.CollectionActivity

  for (let i = 1; ; i++) {
    const res: Prv.CollectionActivity[] = await fetch(
      `https://ordapi.bestinslot.xyz/v1/get_collection_activity/${collectionSlug}/8/${i}/0`,
      {
        method: 'GET',
        headers: {
          'user-agent': `Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/117.0;${String(
            new Date().getTime(),
          )}`,
        },
      },
    ).then((res) => res.json())
    if (!res[0]) {
      break
    } else {
      maxPrice = res.reduce(
        (maxPeak: Prv.CollectionActivity, peak: Prv.CollectionActivity) =>
          (maxPeak?.psbt_price ?? 0) > (peak.psbt_price ?? 0) ? maxPeak : peak,
        temp,
      )
      temp = { ...maxPrice }
    }
  }

  return {
    maxPrice: maxPrice?.psbt_price,
  }
}
