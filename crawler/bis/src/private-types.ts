export interface Transfer {
  from?: string
  to: string
  height: number
  psbt_sale?: number
  ts: string
  tx: string
}

export interface Attribute {
  value: string
  trait_type: string
}

export interface Metadata {
  name: string
  attributes: Attribute[]
}

export interface Trait {
  trait_type: string
  value: string | number
}

export interface Sales {
  token_id: string
  old_wallet: string
  new_wallet: string
  block_height: number
  psbt_price: number
  new_satpoint: string
  ts: string
  token_num: number
  sats_name?: string
  content_type: string
  item_name?: string
  sats_original_id?: string
}

export interface CollectionActivity {
  inscription_id: string
  old_wallet: string
  new_wallet: string
  block_height: number
  psbt_price?: number
  new_satpoint: string
  ts: string
}

export interface CollectionInfo {
  collection_name: string
  description: string
  discord_link: string
  icon_media_type: string
  inscription_icon_id: string
  twitter_link: string
  website_link: string
}
export interface CollectionItems {
  item_name: string
  inscription_number: number
  inscription_id: string
  last_sale?: number
  wallet: string
  content_type: string
  ordswap_listing_price?: number
  magiceden_listing_price?: number
  ordinalswallet_listing_price?: number
  gammaio_listing_price?: number
  nostr_listing_price?: number
  ordynals_listing_price?: number
  unisat_listing_price?: number
  ordinalsmarket_listing_price?: number
  okx_listing_price: number
}

export interface SaleInfo {
  last_1_day: string
  last_7_day: string
  all_volume: string
  total_sales: number
}

export interface Collection {
  collection_info: CollectionInfo
  collection_items: CollectionItems[]
  sale_info: SaleInfo
}

export interface NftDataApi {
  token_id: string
  token_num: number
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
  metadata?: Metadata
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
  traits: Trait[]
}
