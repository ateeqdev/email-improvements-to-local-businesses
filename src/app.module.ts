import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WriteColdEmailModule } from './write-cold-email/write-cold-email.module';

@Module({
  imports: [WriteColdEmailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
