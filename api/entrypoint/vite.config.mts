import { defineConfig } from 'vite'
import { VitePluginNode as node } from 'vite-plugin-node'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: Number(process.env['ORDI_PORT'] ?? 8000),
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
  envPrefix: 'ORDI',
})
