import * as Pub from './public-types.js'

export async function getVolume(collectionSlug: string): Pub.Volume {
  const res = await fetch(`https://ordapi.bestinslot.xyz/v1/get_collection/${collectionSlug}`).then((res) => res.json())

  return {
    lastDay: res['sale_info']['last_1_day'],
  } satisfies Pub.Volume
}
