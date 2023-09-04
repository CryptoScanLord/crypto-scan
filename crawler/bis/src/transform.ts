import * as Prv from './private-types.js'
import * as Pub from './public-types.js'

const transformTransfers = (transfers: Prv.Transfer[]) =>
  transfers.map(
    ({ from, to, height, psbt_sale, ts, tx }) =>
      ({
        from,
        to,
        height,
        salePrice: psbt_sale === -1 ? undefined : psbt_sale,
        timestamp: ts,
        tx,
      }) satisfies Pub.Transfer,
  )

const transformMetadata = (metadata: Prv.Metadata) =>
  ({
    name: metadata?.name,
    attributes: metadata?.attributes?.map(
      ({ value, trait_type }) => ({ value, traitType: trait_type }) satisfies Pub.Attribute,
    ),
  }) satisfies Pub.Metadata

const transformTraits = (traits: Prv.Trait[]) =>
  traits.map(
    (elem) =>
      ({
        trait: elem.trait_type,
        value: elem.value,
      }) satisfies Pub.Trait,
  )

export const transformData = (nft: Prv.NftDataApi) => {
  const time = new Date(Number(nft.timestamp) * 1000).toISOString()

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
    metadata: nft?.metadata ? transformMetadata(nft.metadata) : undefined,
    collectionName: nft.collection_name,
    collectionSlug: nft.collections_slug,
    blockHeight: nft.block_height,
    magicedenListingPrice: nft.magiceden_listing_price,
    magicedenFloorPrice: nft.floor_price_magiceden,
    traits: transformTraits(nft.traits),
  } satisfies Pub.NftData
}

export const transformWalletActivity = (item: Prv.Sales) =>
  ({
    tokenId: item.token_id,
    oldWallet: item.old_wallet,
    newWallet: item.new_wallet,
    itemName: item?.item_name,
    tokenNum: item.token_num,
    salePrice: item.psbt_price,
  }) satisfies Pub.Sales
