import * as Prv from './private-types.js'
import { transformTx } from './transform.js'

export interface GetTxsOptions {
  after?: string
}

export async function getTxs(wallet: string, { after }: GetTxsOptions = {}) {
  const url = new URL(`address/${wallet}/txs`, 'https://mempool.space/api/')

  if (after) {
    url.searchParams.append('after_txid', after)
  }

  const data = await fetch(url).then((res) => res.json() satisfies Promise<Prv.Txs>)

  return data.map(transformTx(wallet))
}
