import { Controller }        from '@nestjs/common'
import { Get }               from '@nestjs/common'
import { Param }             from '@nestjs/common'
import { UseGuards }         from '@nestjs/common'

import { getNFTs }           from '@crawler/bis'
import { getWalletActivity } from '@crawler/bis'
import { RoleGuard }         from '@lib/auth-nestjs'
import { SupabaseGuard }     from '@lib/auth-nestjs'

@Controller('nfts/:wallet')
export class NftsController {
  @Get()
  @UseGuards(SupabaseGuard, RoleGuard)
  async getNfts(@Param('wallet') wallet: string) {
    const nfts = await getNFTs(wallet)
    const walletActivity = await getWalletActivity(wallet)
    const activityIndex = Object.fromEntries(walletActivity.map((activity) => [activity.tokenId, activity] as const))

    return Promise.all(
      nfts.map(async ({ tokenNum, tokenId, collectionName, imageUrl, magicedenFloorPrice, collectionSlug }) => {
        const activity = activityIndex[tokenId]

        return {
          inscription: tokenNum ?? undefined,
          collectionName: collectionName ?? undefined,
          imageUrl: imageUrl ?? undefined,
          totalSpent: activity?.salePrice ?? undefined,
          floorPrice: magicedenFloorPrice ?? undefined,
          // volume: collectionSlug ? await getVolume(collectionSlug).then(({ lastDay }) => lastDay) : undefined,
        }
      }),
    )
  }
}
