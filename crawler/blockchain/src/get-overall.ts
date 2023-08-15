import * as Prv from './private-types.js'
import * as Pub from './public-types.js'

export async function getOverall(wallet: string): Promise<Pub.Overall> {
  const { txs, confirmed }: Prv.Overall = await fetch(
    `https://api.blockchain.info/haskoin-store/btc/address/${wallet}/balance`,
  ).then((res) => res.json())

  return {
    balance: confirmed,
    transactions: txs,
  }
}
