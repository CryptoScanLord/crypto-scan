import * as Prv from './private-types.js'
import * as Pub from './public-types.js'

export async function getVolume(collectionSlug: string): Promise<Pub.Volume> {
	const res: Prv.Collection = (await fetch(`https://ordapi.bestinslot.xyz/v1/get_collection/${collectionSlug}`).then((
		res,
	) => res.json())) satisfies Promise<Prv.Collection>
	return {
		lastDay: parseInt(res.sale_info.last_1_day, 10),
	} satisfies Pub.Volume
}
