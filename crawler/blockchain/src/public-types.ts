export interface Tx {
  id: string
  delta: number
  inputs: string[]
  outputs: string[]
  time: string
}

export interface Overall {
  transactions: number
  balance: number
}
