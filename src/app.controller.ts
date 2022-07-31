import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() { }

  @Get()
  async hello(): Promise<string> {
    return 'hello world'
  }
}
