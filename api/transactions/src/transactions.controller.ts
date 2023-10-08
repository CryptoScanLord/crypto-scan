import { Controller, Get, Param, UseGuards } from '@nestjs/common'
import { RoleGuard, SupabaseGuard } from '@lib/auth-nestjs'
import { getTransactions } from '@crawler/blockchain'

@Controller('transactions')
export class TxsController {
  @Get('/:wallet')
  @UseGuards(SupabaseGuard, RoleGuard)
  async getTxs(@Param('wallet') wallet: string) {
    return getTransactions(wallet, {
      limit: 0,
      offset: 0,
    })
  }
}
