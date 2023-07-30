import { Module } from '@nestjs/common'
import { HelloModule } from '@api/hello-module'

@Module({
  imports: [HelloModule],
})
export class AppModule {}
