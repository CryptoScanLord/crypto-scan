export interface Res {
  amount: number
  brc20: Brc20
  collection: null
  content_type: string
  escrow: Escrow
  id: string
  meta: null
  num: number
  ticker: string
}

export interface Brc20 {
  amount: number
  ticker: string
}

export interface Escrow {
  bought_at: string
  satoshi_price: number
  seller_address: string
}
