import { CacheModule }   from '@nestjs/cache-manager'
import { Module }        from '@nestjs/common'

import { NftsModule }    from '@api/nfts-module'
import { OverallModule } from '@api/overall-module'
import { TokensModule }  from '@api/tokens-module'
import { TxsModule }     from '@api/transactions-module'
import { VolumeModule }  from '@api/volume-module'
import { WalletModule }  from '@api/wallet-module'
import { AuthModule }    from '@lib/auth-nestjs'

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
