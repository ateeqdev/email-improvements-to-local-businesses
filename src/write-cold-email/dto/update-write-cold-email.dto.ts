import { PartialType } from '@nestjs/mapped-types';
import { CreateWriteColdEmailDto } from './create-write-cold-email.dto';

export class UpdateWriteColdEmailDto extends PartialType(CreateWriteColdEmailDto) {}
