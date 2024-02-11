import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BusinessProfileModule } from './business-profile/business-profile.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CopilotModule } from './copilot/copilot.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    BusinessProfileModule,
    CopilotModule,
    MongooseModule.forRoot(process.env.DB_CONNECTION, {
      dbName: process.env.DB_NAME,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
