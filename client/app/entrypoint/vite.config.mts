import { defineConfig } from 'vite'
import vite from '@vitejs/plugin-react'
import { env } from '@lib/vite'

export default defineConfig({
  plugins: [vite()],
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
