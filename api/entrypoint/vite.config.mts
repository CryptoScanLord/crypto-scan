/// <reference types="vitest" />

import { defineConfig } from 'vite'
import { VitePluginNode as node } from 'vite-plugin-node'
import { env } from '@lib/vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: Number(process.env['PORT'] ?? 8000),
  },
  plugins: [
    ...node({
      adapter: 'nest',
      appPath: './src/main.ts',
      exportName: 'app',
      tsCompiler: 'swc',
    }),
  ],
  optimizeDeps: {
    exclude: ['@nestjs/websockets', '@nestjs/microservices'],
    include: ['./src/main.ts'],
  },
  test: {
    environment: 'node',
    globals: true,
    root: '../../',
    deps: {
      interopDefault: true
    }
  },
  define: {
    ...env(
      'SUPABASE_URL',
      'SUPABASE_KEY',
      'ROLE_GUARD_TOKEN',
      'PASS_ROLE_ID',
        'API_URL',
    ),
  }
})
