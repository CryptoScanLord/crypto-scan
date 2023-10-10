import { Module }            from '@nestjs/common'

import { OverallController } from './overall.controller'

@Module({
  controllers: [OverallController],
})
export class OverallModule {}
