export interface Transfer {
  from?: string
  to: string
  height: number
  salePrice?: number
  timestamp: string
  tx: string
}

export interface Attributes {
  value: string
  traitType: string
}

export interface Metadata {
  name: string
  attributes: Attributes[]
}

export interface Traits {
  traitType: string
  value: string
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
  traits: Traits[]
}
