export interface Identified {
  txid: string
}

export interface Valued {
  value: number
}

export interface Addressed {
  address: string
}

export interface Tx extends Identified {
  inputs: Port[]
  outputs: Port[]
  time: number
}

export type Port = Identified & Valued & Addressed

export interface Overall {
  txs: number
  confirmed: number
}
