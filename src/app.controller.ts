import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
/*
Controller: 
set a value to filter the API paths 
i.e. @Controller('data')

is 127.0.0.1:3000/data etc etc

can further filter by 
 @Get('users')
is 127.0.0.1:3000/data/users etc 
 
 Allowed Methods ie. PUT POST GET DELETE PATCH
 @Get()
 @POST()

 Dependency injection from App Services 
 constructor(private readonly appService: AppService) {}

this is TypeScript
appService: AppService
i.e. variable: type

NestJS can then look up the type

this function uses the app service: 
  getHello(): string {
    return this.appService.getHello();
  }

But you can just declare a method:
  getHello(): string {
    return 'Hello World!';
  }

  you can change the Type too
getHello(): { name: string , date: string} {
    return {
      name: 'Dan';
      date: new Date.toLocale('en-gb')
    };
  }

  can use @header('content-type','text/html')
*/

@Controller('data')
export class AppController {
  @Get()
  getHello(): { name: string; date: string } {
    return {
      name: 'Dan',
      date: new Date().toLocaleDateString('en-gb'),
    };
  }
}
