import { Module } from '@nestjs/common';
import { CopilotService } from './copilot.service';
import { CopilotController } from './copilot.controller';
import { BusinessProfileModule } from '../business-profile/business-profile.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Copilot, CopilotSchema } from './entities/copilot.entity';
import {
  BusinessProfile,
  BusinessProfileSchema,
} from '../business-profile/entities/business-profile.entity';
import { BusinessProfileService } from '../business-profile/business-profile.service';

@Module({
  imports: [
    BusinessProfileModule,
    MongooseModule.forFeature([
      { name: Copilot.name, schema: CopilotSchema },
      { name: BusinessProfile.name, schema: BusinessProfileSchema },
    ]),
  ],
  controllers: [CopilotController],
  providers: [CopilotService, BusinessProfileService],
})
export class CopilotModule {}
