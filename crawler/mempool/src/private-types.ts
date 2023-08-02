export interface Txid {
  txid: string
}

export interface Prevout {
  scriptpubkey_address: string
  value: number
}

export interface Vin extends Txid {
  prevout: Prevout
}

export interface Vout {
  scriptpubkey_address: string
  value: number
}

export interface Status {
  block_time: number
}

export interface Tx extends Txid {
  vin: Vin[]
  vout: Vout[]
  status: Status
}

export type Txs = Tx[]
