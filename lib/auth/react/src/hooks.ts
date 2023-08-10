import { useCallback, useEffect } from 'react'
import { createClient } from './client'
import { useSuspendSession } from './session'
import { useNavigate } from 'react-router-dom'

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

export function useAuthGuard() {
  const navigate = useNavigate()
  const session = useSuspendSession()

  useEffect(() => {
    if (!session) {
      navigate('/login')
    }
  }, [navigate, session])
}
