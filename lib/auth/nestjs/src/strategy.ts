import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { SupabaseAuthStrategy } from './passport'
import { ExtractJwt } from 'passport-jwt'
import type { Request } from 'express'

@Injectable()
export class SupabaseStrategy extends PassportStrategy(SupabaseAuthStrategy, 'supabase') {
  public constructor() {
    super({
      supabaseUrl: import.meta.env['SUPABASE_URL'],
      supabaseKey: import.meta.env['SUPABASE_KEY'],
      supabaseOptions: {},
      extractor: ExtractJwt.fromAuthHeaderAsBearerToken(),
    })
  }

  authenticate(req: Request) {
    super.authenticate(req)
  }
}
