import { api } from './base'
import * as Prv from './private-types'
import { transformTx } from './transform'

export interface GetTxsOptions {
  after?: string
}

export async function getTxs(wallet: string, { after }: GetTxsOptions = {}) {
  const { data } = await api.get<Prv.Txs>(`address/${wallet}/txs`, {
    params: {
      after_txid: after,
    },
  })

  return data.map(transformTx(wallet))
}
