export interface Transfer {
  from?: string
  to: string
  height: number
  psbt_sale?: number
  ts: string
  tx: string
}

export interface Attributes {
  value: string
  trait_type: string
}

export interface Metadata {
  name: string
  attributes: Attributes[]
}

export interface Traits {
  trait_type: string
  value: string
}

export interface NftDataApi {
  token_id: string
  token_num: string
  title: string
  image_url: string
  wallet_addr: string
  content_length: number
  content_type: string
  timestamp: string
  genesis_height: string
  genesis_fee: string
  output_value: number
  transfers: Transfer[]
  item_name?: string
  metadata?: Metadata[]
  collection_name?: string
  collections_slug?: string
  block_height: number
  satpoint: string
  tags: number[]
  ordswap_listing_price?: number
  floor_price_ordswap?: number
  floor_price_magiceden?: number
  magiceden_listing_price?: number
  ordinalswallet_listing_price?: number
  floor_price_ordinalswallet?: number
  gammaio_listing_price?: number
  floor_price_gammaio?: number
  nostr_listing_price?: number
  floor_price_nostr?: number
  ordynals_listing_price?: number
  floor_price_ordynals?: number
  unisat_listing_price?: number
  ordinalsmarket_listing_price?: number
  floor_price_ordinalsmarket?: number
  traits: Traits[]
}