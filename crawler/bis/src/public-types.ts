export interface Transfer {
  from?: string
  to: string
  height: number
  salePrice?: number
  timestamp: string
  tx: string
}

export interface Attribute {
  value: string
  traitType: string
}

export interface Metadata {
  name: string
  attributes: Attribute[]
}

export interface Trait {
  trait: string
  value: string | number
}
export interface Sales {
  tokenId: string
  oldWallet: string
  newWallet: string
  itemName?: string
  salePrice: number
  tokenNum: number
}
export interface Volume {
  lastDay: number
}
export interface MaxPrice {
  maxPrice?: number
}

export type NftData = {
  tokenId: string
  tokenNum: number
  title: string
  imageUrl: string
  walletAddress: string
  timestamp: string
  genesisHeight: string
  genesisFee: string
  transfers: Transfer[]
  itemName?: string
  metadata?: Metadata
  collectionName?: string
  collectionSlug?: string
  blockHeight: number
  magicedenListingPrice?: number
  magicedenFloorPrice?: number
  traits: Trait[]
}
