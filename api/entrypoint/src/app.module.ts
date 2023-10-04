import { Module } from '@nestjs/common'
import { AuthModule } from '@lib/auth-nestjs'
import { CacheModule } from '@nestjs/cache-manager'
import { WalletModule } from '@api/wallet-module'
import { NftsModule } from '@api/nfts-module'
import { VolumeModule } from '@api/volume-module'
import { TxsModule } from '@api/transactions-module'
import { TokensModule } from '@api/tokens-module'
import { OverallModule } from '@api/overall-module'

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
    }),
    AuthModule,
    WalletModule,
    NftsModule,
    VolumeModule,
    TxsModule,
    TokensModule,
    OverallModule,
  ],
})
export class AppModule {}
