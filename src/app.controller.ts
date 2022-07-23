import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Render('index')
  root() {
    return { message: this.appService.getHello() };
  }

  @Get('/about')
  @Render('about')
  altcoins() {
    return { message: this.appService.getHello() };
  }


  @Get('/contact')
  @Render('contact')
  contact() {
    return { message: this.appService.getHello() };
  }

  @Get('/statement')
  @Render('statement')
  statement() {
    return { message: this.appService.getHello() };
  }

}
