import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): object {
    return {
      message: 'NestJS API Vercel example',
    };
  }

  @Get('/other')
  other(): object {
    return {
      message: 'other',
    };
  }

  @Post()
  post(): object {
    return {
      message: 'post example',
    };
  }
}
