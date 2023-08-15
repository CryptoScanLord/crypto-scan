import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { env } from '@lib/vite'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    watch: {
      usePolling: true,
    },
  },
  define: {
    ...env(
      'SUPABASE_URL',
      'SUPABASE_ANON_KEY',
      'PUBLIC_URL',
    ),
  },
})
