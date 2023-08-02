import * as Prv from './private-types'
import * as Pub from './public-types'

const convertSatoshiToBTC = (satoshiValue: number) => (satoshiValue !== -1 ? satoshiValue / 100000000 : undefined)

const transformTransfers = (transfers: Pub.Transfer[]) =>
  transfers.map(({ from, to, height, salePrice, timestamp, tx }) => ({
    from,
    to,
    height,
    salePrice: convertSatoshiToBTC(salePrice),
    timestamp,
    tx,
  }))

const transformMetadata = (metadata: Prv.Metadata) =>
  ({
    name: metadata?.name,
    attributes: metadata?.attributes?.map(
      ({ value, trait_type }) => ({ value, traitType: trait_type }) satisfies Pub.Attributes,
    ),
  }) satisfies Pub.Metadata

const transformTraits = (traits: Prv.Traits[]) =>
  traits.map(
    (elem) =>
      ({
        traitType: elem.trait_type,
        value: elem.value.toString(),
      }) satisfies Pub.Traits,
  )

export const transformData = (nft: Prv.NftDataApi) => {
  const time = new Date(nft.timestamp * 1000).toISOString()

  return {
    tokenId: nft.token_id,
    tokenNum: nft.token_num,
    title: nft.title,
    imageUrl: nft.image_url,
    walletAddress: nft.wallet_addr,
    timestamp: time,
    genesisHeight: nft.genesis_height,
    genesisFee: nft.genesis_fee,
    transfers: transformTransfers(nft.transfers),
    itemName: nft.item_name,
    metadata: transformMetadata(nft.metadata),
    collectionName: nft.collection_name,
    collectionSlug: nft.collections_slug,
    blockHeight: nft.block_height,
    magicedenListingPrice: convertSatoshiToBTC(nft.magiceden_listing_price),
    magicedenFloorPrice: convertSatoshiToBTC(nft.floor_price_magiceden),
    traits: transformTraits(nft.traits),
  } satisfies Pub.NftData
}
