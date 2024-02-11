import { Module } from '@nestjs/common';
import { WriteColdEmailService } from './write-cold-email.service';
import { WriteColdEmailController } from './write-cold-email.controller';

@Module({
  controllers: [WriteColdEmailController],
  providers: [WriteColdEmailService],
})
export class WriteColdEmailModule {}
