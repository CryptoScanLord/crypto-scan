import { Controller }      from '@nestjs/common'
import { Get }             from '@nestjs/common'
import { Param }           from '@nestjs/common'
import { UseGuards }       from '@nestjs/common'

import { getTransactions } from '@crawler/blockchain'
import { RoleGuard }       from '@lib/auth-nestjs'
import { SupabaseGuard }   from '@lib/auth-nestjs'

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
