import { Module }           from '@nestjs/common'
import { PassportModule }   from '@nestjs/passport'

import { SupabaseStrategy } from './strategy'

@Module({
	imports: [PassportModule],
	providers: [SupabaseStrategy],
	exports: [SupabaseStrategy],
})
export class AuthModule {}
