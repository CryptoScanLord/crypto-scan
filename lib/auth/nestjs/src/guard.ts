import { ExecutionContext, Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Injectable()
export class SupabaseGuard extends AuthGuard('supabase') {
  getRequest(context: ExecutionContext) {
    return context.switchToHttp().getRequest()
  }
}
