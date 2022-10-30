import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/product.module';

@Module({
  imports: [ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/* embraces modularity

App does not use all module we tell it what to use 

Provider is extra services we can inject to provide extra functionality

controller is the API router that handle incoming requests/endpoints
*/
