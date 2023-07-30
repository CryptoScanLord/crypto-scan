import { Test, TestingModule } from '@nestjs/testing'
import { HelloController } from './hello.controller'

describe.concurrent('AppController', () => {
  let appController: HelloController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HelloController],
    }).compile()

    appController = app.get<HelloController>(HelloController)
  })

  describe.concurrent('root', () => {
    it.concurrent("should return { hello: 'world' }", () => {
      expect(appController.getHello()).toStrictEqual({ hello: 'world' })
    })
  })
})
