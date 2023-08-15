import * as Prv from './private-types.js'
import * as Pub from './public-types.js'
import { transformTx } from './transform.js'

export interface GetTransactionsOptions {
  limit: number
  offset: number
}

export async function getTransactions(wallet: string, options: GetTransactionsOptions): Promise<Pub.Tx[]> {
  const url = new URL(`${wallet}/transactions/full`, 'https://api.blockchain.info/haskoin-store/btc/address/')

  if (options) {
    const { offset, limit } = options
    url.searchParams.append('offset', offset.toString(10))
    url.searchParams.append('limit', limit.toString(10))
  }

  const transactions: Prv.Tx[] = await fetch(url).then((res) => res.json())

  return transactions.map(transformTx(wallet))
}
