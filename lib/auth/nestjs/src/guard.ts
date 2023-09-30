import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Injectable()
export class SupabaseGuard extends AuthGuard('supabase') {
  getRequest(context: ExecutionContext) {
    return context.switchToHttp().getRequest()
  }
}

@Injectable()
export class RoleGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const { user } = context.switchToHttp().getRequest()

    if (!user || !user.user_metadata) {
      return false
    }

    const { provider_id: id } = user.user_metadata

    const member = await fetch(`https://discord.com/api/v10//guilds/1123676140842778654/members/${id}`, {
      headers: {
        Authorization: `Bot ${import.meta.env['ROLE_GUARD_TOKEN']}`,
      },
    }).then((res) => res.json())

    return member?.roles?.includes?.(import.meta.env['PASS_ROLE_ID'])
  }
}
