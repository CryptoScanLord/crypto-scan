import { defineConfig } from 'vite'
import vite from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [vite()],
  server: {
    host: '0.0.0.0'
  }
})
