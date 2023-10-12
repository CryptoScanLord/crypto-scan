import { getOverall }      from './get-overall.js'
import { getTransactions } from './get-transactions.js'
import * as Pub            from './public-types.js'

export async function getHistory(wallet: string): Promise<Pub.History> {
	const { transactions: txs, balance } = await getOverall(wallet)

	const transactions = await getTransactions(wallet, { limit: txs > 2000 ? 2000 : txs, offset: 0 })

	return {
		balance,
		entries: transactions.map(({ time, delta }) => [time, delta]),
	}
}
