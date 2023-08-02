import {
  Controller,
  Get,
  // UseGuards
} from '@nestjs/common'
import { getNFTs } from '@crawler/bis'

// import { CurrentUser, SupabaseGuard, type SupabaseUser } from '@lib/auth-nestjs'

// @Controller()
export class HelloController {
  // @UseGuards(SupabaseGuard)
  @Get()
  async getHello() {
    // @CurrentUser() user: SupabaseUser
    const data = await getNFTs()

    return data
  }
}
