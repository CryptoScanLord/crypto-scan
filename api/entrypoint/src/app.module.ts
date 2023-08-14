import { Module } from '@nestjs/common'
import { AuthModule } from '@lib/auth-nestjs'
import { CacheModule } from '@nestjs/cache-manager'
import { BtcModule } from '@api/btc-module'
import { WalletModule } from '@api/wallet-module'

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
    }),
    AuthModule,
    BtcModule,
    WalletModule,
  ],
})
export class AppModule {}
