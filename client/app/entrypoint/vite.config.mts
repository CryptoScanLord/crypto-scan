import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { env } from '@lib/vite'

export default defineConfig({
  // @ts-expect-error
  plugins: [react()],
  server: {
    host: '0.0.0.0'
  },
  define: {
    ...env(
      'SUPABASE_URL',
      'SUPABASE_ANON_KEY',
    ),
  }
})
