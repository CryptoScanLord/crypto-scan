export interface Tx {
  id: string
  delta: number
  inputs: string[]
  outputs: string[]
  time: number
}

export interface Overall {
  transactions: number
  balance: number
}

export type History = Array<[time: number, delta: number]>
