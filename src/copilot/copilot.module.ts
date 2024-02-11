import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CopilotService } from './copilot.service';
import { CopilotController } from './copilot.controller';
import { Copilot, CopilotSchema } from './entities/copilot.entity';
import { BusinessProfileModule } from '../business-profile/business-profile.module';

@Module({
  imports: [
    BusinessProfileModule,
    MongooseModule.forFeature([{ name: Copilot.name, schema: CopilotSchema }]),
  ],
  controllers: [CopilotController],
  providers: [CopilotService],
  exports: [CopilotService],
})
export class CopilotModule {}
