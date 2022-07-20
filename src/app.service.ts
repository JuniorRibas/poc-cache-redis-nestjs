import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cache: Cache) { }

  async getHello() {

    await this.cache.set('cache_exemplo', { redirect: 'ribeiro' });
    const value = await this.cache.get('cache_exemplo');
    console.log(value);
    return 'Hello World!';
  }
}
