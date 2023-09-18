import { Controller, Get, Param } from '@nestjs/common'
import { getTokens } from '@crawler/unisat'

@Controller('tokens/:wallet')
export class TokensController {
  @Get('brc-20')
  async getBrc20(@Param('wallet') wallet: string) {
    const tokens = await getTokens(wallet)
    return tokens
  }
}
