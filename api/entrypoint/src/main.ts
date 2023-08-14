import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as process from 'process'

const PORT = Number(process.env['PORT'] ?? 8000)
const CORS_ORIGIN = process.env['CORS_ORIGIN'] ?? JSON.stringify('https://studio.apollographql.com')

export async function factory() {
  const app = await NestFactory.create(AppModule)

  app.enableCors({
    origin: JSON.parse(CORS_ORIGIN),
    methods: 'POST',
    allowedHeaders: 'Content-Type, Accept, Authorization',
    credentials: true,
  })

  app.enableShutdownHooks()

  return app
}

if (import.meta.env.PROD) {
  // eslint-disable-next-line no-void
  void (async () => {
    const app = await factory()

    await app.listen(PORT)
  })()
}

export const app = factory()
