import { Controller, Get } from '@nestjs/common'

@Controller()
export class HelloController {
  @Get()
  getHello() {
    return { hello: 'world' }
  }
}
