import { AuthUser }               from '@supabase/supabase-js'
import { createClient }           from '@supabase/supabase-js'
import { SupabaseClient }         from '@supabase/supabase-js'
import { SupabaseClientOptions }  from '@supabase/supabase-js'
import { UserResponse }           from '@supabase/supabase-js'
import { Request }                from 'express'
import { JwtFromRequestFunction } from 'passport-jwt'
import { Strategy }               from 'passport-strategy'

import { SUPABASE_AUTH }          from './constants'
import { UNAUTHORIZED }           from './constants'

export interface SupabaseAuthStrategyOptions {
  supabaseUrl: string
  supabaseKey: string
  supabaseOptions: SupabaseClientOptions<any>
  extractor: JwtFromRequestFunction
}

export class SupabaseAuthStrategy extends Strategy {
  readonly name = SUPABASE_AUTH

  private supabase: SupabaseClient

  private extractor: JwtFromRequestFunction

  success!: (user: any, info: any) => void

  fail!: Strategy['fail']

  constructor({ supabaseUrl, supabaseOptions = {}, supabaseKey, extractor }: SupabaseAuthStrategyOptions) {
    super()
    if (!extractor) {
      throw new Error(
        '\n Extractor is not a function. You should provide an extractor. \n Read the docs: https://github.com/tfarras/nestjs-firebase-auth#readme',
      )
    }

    this.supabase = createClient(supabaseUrl, supabaseKey, {
      ...supabaseOptions,
      auth: {
        ...(supabaseOptions.auth ?? {}),
        persistSession: false,
      },
    })
    this.extractor = extractor
  }

  async validate(payload: AuthUser): Promise<AuthUser> {
    return payload
  }

  authenticate(req: Request): void {
    const idToken = this.extractor(req)

    if (!idToken) {
      this.fail(UNAUTHORIZED, 401)
      return
    }

    this.supabase.auth
      .getUser(idToken)
      .then((res) => this.validateSupabaseResponse(res))
      .catch((err) => {
        this.fail(err.message, 401)
      })
  }

  private async validateSupabaseResponse({ data, error }: UserResponse) {
    if (error) {
      this.fail(error.message, 401)
    }

    const result = data.user!
    if (result) {
      this.success(result, {})
      return
    }
    this.fail(UNAUTHORIZED, 401)
  }
}
