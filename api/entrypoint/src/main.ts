import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const PORT = Number(process.env['PORT'] ?? 8000)

export async function factory() {
  const app = await NestFactory.create(AppModule)

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
