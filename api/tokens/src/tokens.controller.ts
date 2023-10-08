import { Controller, Get, Param, UseGuards } from '@nestjs/common'
import { RoleGuard, SupabaseGuard } from '@lib/auth-nestjs'
import { getTokens } from '@crawler/ordinals'

@Controller('tokens')
export class TokensController {
  @Get('/:wallet')
  @UseGuards(SupabaseGuard, RoleGuard)
  async getTokens(@Param('wallet') wallet: string) {
    return getTokens(wallet)
  }
}
