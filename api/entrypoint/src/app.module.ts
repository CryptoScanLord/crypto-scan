import { Module } from '@nestjs/common'
import { AuthModule } from '@lib/auth-nestjs'
import { CacheModule } from '@nestjs/cache-manager'
import { WalletModule } from '@api/wallet-module'
import { TokensModule } from '@api/tokens-module'

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
    }),
    AuthModule,
    WalletModule,
    TokensModule,
  ],
})
export class AppModule {}
