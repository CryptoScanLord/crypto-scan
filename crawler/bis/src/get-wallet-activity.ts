import * as Prv from './private-types.js'
import * as Pub from './public-types.js'
import { transformWalletActivity } from './transform'

export async function getWalletActivity(wallet: string): Promise<Pub.Sales[]> {
  const data: Pub.Sales[] = []

  for (let i = 1; ; i++) {
    const res = (await fetch(`https://ordapi.bestinslot.xyz/v1/get_wallet_activity/${wallet}/8/${i}/0}`).then((res) =>
      res.json(),
    )) satisfies Promise<Prv.Sales[]>
    if (!res[0]) {
      break
    } else {
      data.push(...res.map((item: Prv.Sales) => transformWalletActivity(item)))
    }
  }

  return data
}
