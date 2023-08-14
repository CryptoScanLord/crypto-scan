import { Module } from '@nestjs/common'
import { BtcController } from './btc.controller'

@Module({
  controllers: [BtcController],
})
export class BtcModule {}
