import { getOverall } from './get-overall.js'
import { getTransactions } from './get-transactions.js'

export async function getHistory(wallet: string) {
  const { transactions: txs } = await getOverall(wallet)

  return getTransactions(wallet, { limit: txs > 2000 ? 2000 : txs, offset: 0 })
}
