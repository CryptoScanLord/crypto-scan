import { createParamDecorator } from '@nestjs/common'
import { ExecutionContext }     from '@nestjs/common'

export const CurrentUser = createParamDecorator((_data: unknown, context: ExecutionContext) => {
  const req = context.switchToHttp().getRequest()
  return req.user
})
