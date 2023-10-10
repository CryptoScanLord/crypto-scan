import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { cert, key } from './tls'

const PORT = Number(process.env.ORDI_PORT ?? 8000)
const CORS_ORIGIN = process.env.ORDI_CORS ?? JSON.stringify('http://localhost:5173')

export async function factory() {
  const app = await NestFactory.create(AppModule, {
    httpsOptions: import.meta.env.PROD ? { cert, key } : undefined!,
  })

  app.enableCors({
    origin: JSON.parse(CORS_ORIGIN),
    methods: ['POST', 'GET'],
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

    await app.listen(PORT, '0.0.0.0')
  })()
}

export const app = factory()
