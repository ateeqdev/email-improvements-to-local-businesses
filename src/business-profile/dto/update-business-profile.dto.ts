import { PartialType } from '@nestjs/mapped-types';
import { CreateBusinessProfileDto } from './create-business-profile.dto';
import { BusinessProfile } from '../entities/business-profile.entity';

export class UpdateBusinessProfileDto extends PartialType(BusinessProfile) {}
