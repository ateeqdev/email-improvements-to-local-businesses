import { PartialType } from '@nestjs/mapped-types';
import { CreateCopilotDto } from './create-copilot.dto';

export class UpdateCopilotDto extends PartialType(CreateCopilotDto) {}
