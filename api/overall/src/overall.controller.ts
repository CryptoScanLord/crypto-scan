import { Controller }    from '@nestjs/common'
import { Get }           from '@nestjs/common'
import { Param }         from '@nestjs/common'
import { UseGuards }     from '@nestjs/common'

import { getOverall }    from '@crawler/blockchain'
import { RoleGuard }     from '@lib/auth-nestjs'
import { SupabaseGuard } from '@lib/auth-nestjs'

@Controller('overall')
export class OverallController {
  @Get('/:wallet')
  @UseGuards(SupabaseGuard, RoleGuard)
  async getOverallBalance(@Param('wallet') wallet: string) {
    return getOverall(wallet)
  }
}
