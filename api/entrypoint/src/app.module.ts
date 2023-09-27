import { Module } from '@nestjs/common'
import { AuthModule } from '@lib/auth-nestjs'
import { CacheModule } from '@nestjs/cache-manager'
import { WalletModule } from '@api/wallet-module'
import { NftsModule } from '@api/nfts-module'

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
    }),
    AuthModule,
    WalletModule,
    NftsModule,
  ],
})
export class AppModule {}
