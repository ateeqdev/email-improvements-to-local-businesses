import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BusinessProfileService } from './business-profile.service';
import { BusinessProfileController } from './business-profile.controller';
import {
  BusinessProfile,
  BusinessProfileSchema,
} from './entities/business-profile.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BusinessProfile.name, schema: BusinessProfileSchema },
    ]),
  ],
  controllers: [BusinessProfileController],
  providers: [BusinessProfileService],
  exports: [BusinessProfileService],
})
export class BusinessProfileModule {}
