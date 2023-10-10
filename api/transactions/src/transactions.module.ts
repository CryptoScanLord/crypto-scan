import { Module }        from '@nestjs/common'

import { TxsController } from './transactions.controller'

@Module({
  controllers: [TxsController],
})
export class TxsModule {}
