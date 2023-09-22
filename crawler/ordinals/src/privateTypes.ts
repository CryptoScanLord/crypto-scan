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

export interface WalletRes {
  balance: number
  brc20: Token[]
  confirmed_balance: number
  inscription_balance: number
  inscriptions: []
}

export interface Token {
  available_balance: number
  floor_price_per: null | number
  overall_balance: number
  ticker: string
  transferable_balance: number
  inscriptions: Inscription[]
  unconfirmed_balance: number
  utxo_count: number
}

export interface Inscription {
  collection: null | Collection
  content_type: string
  escrow: null | Escrow
  id: string
  meta: any // не хочу писать типы для бесполезного огромного объекта
  num: string
  outpoint: Outpoint
  satributes: any // тоже самое
}

export interface Collection {
  creator_address: string | null
  description: string | null
  floor_price: number | null
  icon: string | null
  icon_inscription: Record<string, string | null>
  name: string | null
  slug: string | null
}

export interface Outpoint {
  outpoint: string
  sat_offset: number
  sats: number
}

export interface Volume {
  sale_7d: string
  sale_24h: string
  total_sale: string
}
