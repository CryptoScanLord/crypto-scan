import      { useEffect }    from 'react'
import      { useState }     from 'react'

import type { Session }      from '@supabase/auth-helpers-react'
import type { AuthError }    from '@supabase/supabase-js'
import      { suspend }      from 'suspend-react'

import      { createClient } from './client'

export function useSuspendSession() {
  const supabase = createClient()

  return suspend(async () => {
    const { data, error } = await supabase.auth.getSession()

    if (error) {
      throw error
    }

    return data.session!
  }, ['session'])
}

export function useLazySession() {
  const supabase = createClient()
  const [loading, setLoading] = useState(true)
  const [session, setSession] = useState<Session | null>(null)
  const [error, setError] = useState<AuthError | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data, error }) => {
      setError(error)
      setSession(data?.session!)
      setLoading(false)
    })
  }, [supabase.auth])

  return { loading, session, error }
}
