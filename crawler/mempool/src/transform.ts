import * as Prv from './private-types'
import * as Pub from './public-types'

const negate = (value: number) => -value

const sum = (a: number, b: number) => a + b

const walletFilter = (wallet: string) => (v: Prv.Vin | Prv.Vout) =>
  'scriptpubkey_address' in v ? wallet === v.scriptpubkey_address : v.prevout.scriptpubkey_address === wallet

export const transformTx =
  (wallet: string) =>
  (tx: Prv.Tx): Pub.Tx => {
    const ins = tx.vin.filter(walletFilter(wallet)).map(({ prevout: { value } }) => value)
    const outs = tx.vout.filter(walletFilter(wallet)).map(({ value }) => value)
    const delta = [...ins.map(negate), ...outs].reduce(sum, 0)
    const time = new Date(tx.status.block_time * 1000).toISOString()

    return {
      id: tx.txid,
      delta,
      time,
    }
  }
