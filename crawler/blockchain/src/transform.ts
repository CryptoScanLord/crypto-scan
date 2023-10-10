import * as Prv from './private-types.js'
import * as Pub from './public-types.js'

const negate = (value: number) => -value

const sum = (a: number, b: number) => a + b

const walletFilter = (wallet: string) =>
  ({ address }: Prv.Port) =>
    wallet === address

export const transformTx = (wallet: string) =>
  ({ inputs, outputs, txid, time }: Prv.Tx): Pub.Tx => {
    const ownInputs = inputs.filter(walletFilter(wallet)).map(({ value }) => value)
    const ownOutputs = outputs.filter(walletFilter(wallet)).map(({ value }) => value)

    const delta = [...ownInputs.map(negate), ...ownOutputs].reduce(sum, 0)

    return {
      id: txid,
      delta,
      time: time * 1000,
      inputs: inputs.map(({ address }) => address),
      outputs: outputs.map(({ address }) => address),
    }
  }
