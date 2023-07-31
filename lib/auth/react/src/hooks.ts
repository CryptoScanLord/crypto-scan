import { useCallback } from 'react'
import { createClient } from './client'

export function useLogin() {
  const supabase = createClient()
  return useCallback(
    () => supabase.auth.signInWithOAuth({ provider: 'discord', options: { scopes: 'identify' } }),
    [supabase.auth],
  )
}

export function useLogout() {
  const supabase = createClient()
  return useCallback(() => supabase.auth.signOut(), [supabase.auth])
}
