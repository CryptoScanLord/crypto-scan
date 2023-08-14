import { UseGuards } from '@nestjs/common'
import { CurrentUser, SupabaseGuard, type SupabaseUser } from '@lib/auth-nestjs'
import { Field, ObjectType, Query, Resolver } from '@nestjs/graphql'

@ObjectType()
export class Hello {
  @Field()
  email!: string
}

@Resolver(() => Hello)
export class HelloController {
  @UseGuards(SupabaseGuard)
  @Query(() => Hello)
  getHello(@CurrentUser() user: SupabaseUser): Hello {
    return { email: user.email! }
  }
}
