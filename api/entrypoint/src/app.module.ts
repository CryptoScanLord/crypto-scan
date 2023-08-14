import { Module } from '@nestjs/common'
import { HelloModule } from '@api/hello-module'
import { AuthModule } from '@lib/auth-nestjs'
import { CacheModule } from '@nestjs/cache-manager'

@Module({
  imports: [CacheModule.register(), AuthModule, HelloModule],
})
export class AppModule {}
