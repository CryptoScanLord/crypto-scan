import      { Injectable }           from '@nestjs/common'
import      { PassportStrategy }     from '@nestjs/passport'
import type { Request }              from 'express'
import      { ExtractJwt }           from 'passport-jwt'

import      { SupabaseAuthStrategy } from './passport'

@Injectable()
export class SupabaseStrategy extends PassportStrategy(SupabaseAuthStrategy, 'supabase') {
  public constructor() {
    super({
      supabaseUrl: process.env.ORDI_SUPABASE_URL,
      supabaseKey: process.env.ORDI_SUPABASE_KEY,
      supabaseOptions: {},
      extractor: ExtractJwt.fromAuthHeaderAsBearerToken(),
    })
  }

  authenticate(req: Request) {
    super.authenticate(req)
  }
}
