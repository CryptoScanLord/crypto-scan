import { Module } from '@nestjs/common'
import { HelloModule } from '@api/hello-module'
import { AuthModule } from '@lib/auth-nestjs'

@Module({
  imports: [AuthModule, HelloModule],
})
export class AppModule {}
