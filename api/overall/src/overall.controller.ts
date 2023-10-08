import { Controller, Get, Param, UseGuards } from '@nestjs/common'
import { RoleGuard, SupabaseGuard } from '@lib/auth-nestjs'
import { getOverall } from '@crawler/blockchain'

@Controller('overall')
export class OverallController {
  @Get('/:wallet')
  @UseGuards(SupabaseGuard, RoleGuard)
  async getOverallBalance(@Param('wallet') wallet: string) {
    return getOverall(wallet)
  }
}
