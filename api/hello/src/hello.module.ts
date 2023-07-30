import { HelloController } from './hello.controller'
import { Module } from '@nestjs/common'

@Module({
  imports: [],
  controllers: [HelloController],
  providers: [],
})
export class HelloModule {}
