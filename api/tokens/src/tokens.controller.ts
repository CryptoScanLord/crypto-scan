import { Controller }    from '@nestjs/common'
import { Get }           from '@nestjs/common'
import { Param }         from '@nestjs/common'
import { UseGuards }     from '@nestjs/common'

import { getTokens }     from '@crawler/ordinals'
import { RoleGuard }     from '@lib/auth-nestjs'
import { SupabaseGuard } from '@lib/auth-nestjs'

@Controller('tokens')
export class TokensController {
	@Get('/:wallet')
	@UseGuards(SupabaseGuard, RoleGuard)
	async getTokens(@Param('wallet') wallet: string) {
		const data = await getTokens(wallet)
		console.log(Promise.all(data))
		return Promise.all(data)
	}
}
