import { MongoMemoryServer } from 'mongodb-memory-server'
import { MongooseModule } from '@nestjs/mongoose'
import { Module } from '@nestjs/common'

let mongod: MongoMemoryServer

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async () => {
        mongod = await MongoMemoryServer.create()
        const uri = mongod.getUri()
        return { uri }
      }
    })
  ],
  exports: [MongooseModule]
})

export class TestDatabaseModule {}

afterAll(async () => {
  if (mongod) {
    await mongod.stop()
  }
})
