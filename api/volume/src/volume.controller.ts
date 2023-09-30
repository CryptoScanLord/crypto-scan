import { Controller, Get, Param, UseGuards } from '@nestjs/common'
import { VolumeRes } from '@crawler/bis'
import { RoleGuard, SupabaseGuard } from '@lib/auth-nestjs'

@Controller('brc-20')
export class VolumeController {
  @Get(':token/volume')
  @UseGuards(SupabaseGuard, RoleGuard)
  async getVolume(@Param('token') token: string) {
    const res: VolumeRes = await fetch(`https://ordapi.bestinslot.xyz/v1/get_brc20_ticker/${token.toLowerCase()}`)
      .then((data) => data.json())
      .then((data) => data.sales[0])
    return { volume24: res.sale_24h, allVolume: res.total_sale }
  }
}
