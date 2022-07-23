import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('this is new test.');
    return 'Hello World!';
  }
}
