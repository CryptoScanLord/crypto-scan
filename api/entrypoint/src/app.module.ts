import { Module } from '@nestjs/common'
import { AuthModule } from '@lib/auth-nestjs'
import { CacheModule } from '@nestjs/cache-manager'
import { WalletModule } from '@api/wallet-module'
import { VolumeModule } from '@api/volume-module'

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
    }),
    AuthModule,
    WalletModule,
    VolumeModule,
  ],
})
export class AppModule {}
