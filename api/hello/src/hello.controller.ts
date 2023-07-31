import { Controller, Get, UseGuards } from '@nestjs/common'
import { CurrentUser, SupabaseGuard, type SupabaseUser } from '@lib/auth-nestjs'

@Controller()
export class HelloController {
  @UseGuards(SupabaseGuard)
  @Get()
  getHello(@CurrentUser() user: SupabaseUser) {
    return user
  }
}
