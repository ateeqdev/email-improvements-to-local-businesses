import { Module } from '@nestjs/common';
import { CopilotService } from './copilot.service';
import { CopilotController } from './copilot.controller';
import { BusinessProfileModule } from 'src/business-profile/business-profile.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Copilot, CopilotSchema } from './entities/copilot.entity';
import {
  BusinessProfile,
  BusinessProfileSchema,
} from '../business-profile/entities/business-profile.entity';

@Module({
  imports: [
    BusinessProfileModule,
    MongooseModule.forFeature([
      { name: Copilot.name, schema: CopilotSchema },
      { name: BusinessProfile.name, schema: BusinessProfileSchema },
    ]),
  ],
  controllers: [CopilotController],
  providers: [CopilotService],
})
export class CopilotModule {}
