import data from '../data/wallet.json' assert { type: 'json' }
import expected from '../data/expected.json' assert { type: 'json' }

import { transformTx } from '@crawler/mempool/private'

const WALLET = 'bc1p42vfvn6g27v4lezw9dawe34slm34khajnnjmt82npnv8sajf2yesdxlwpd'

describe.concurrent('crawler', () => {
  describe.concurrent('mempool', () => {
    it.concurrent('Should transform txs', () => {
      const transformed = data.map(transformTx(WALLET))
      expect(transformed).toStrictEqual(expected)
    })
  })
})
