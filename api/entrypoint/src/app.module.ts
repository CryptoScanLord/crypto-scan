import { Module } from '@nestjs/common'
import { AuthModule } from '@lib/auth-nestjs'
import { CacheModule } from '@nestjs/cache-manager'
import { BtcModule } from '@api/btc-module'

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
    }),
    AuthModule,
    BtcModule,
  ],
})
export class AppModule {}
