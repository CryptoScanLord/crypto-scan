import { Controller, Get, Param } from '@nestjs/common'
import { getNFTs, getVolume, getWalletActivity } from '@crawler/bis'

@Controller('nfts/:wallet')
export class NftsController {
  @Get()
  async getNfts(@Param('wallet') wallet: string) {
    const nfts = await getNFTs(wallet)
    const walletActivity = await getWalletActivity(wallet)
    const activityIndex = Object.fromEntries(walletActivity.map((activity) => [activity.tokenId, activity] as const))

    return Promise.all(
      nfts.map(async ({ tokenNum, tokenId, collectionName, imageUrl, magicedenFloorPrice, collectionSlug }) => {
        const activity = activityIndex[tokenId]

        return {
          inscription: activity?.tokenNum ?? undefined,
          collectionName: collectionName ?? undefined,
          imageUrl: imageUrl ?? undefined,
          totalSpent: activity?.salePrice ?? undefined,
          floorPrice: magicedenFloorPrice ?? undefined,
          volume: collectionSlug ? await getVolume(collectionSlug).then(({ lastDay }) => lastDay) : undefined,
        }
      }),
    )
  }
}
