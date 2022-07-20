import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import * as Store from 'cache-manager-redis-store';
import { AppService } from './app.service';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      store: Store,
      host: 'localhost',
      port: 6379,
      auth_pass: '1234',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
