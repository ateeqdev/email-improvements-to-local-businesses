import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCopilotDto } from './dto/create-copilot.dto';
import { UpdateCopilotDto } from './dto/update-copilot.dto';
import { Copilot, CopilotDocument } from './entities/copilot.entity';
import { BusinessProfile, BusinessProfileDocument } from '../business-profile/entities/business-profile.entity';

@Injectable()
export class CopilotService {  
  constructor(
    @InjectModel(Copilot.name)
    private copilotModel: Model<CopilotDocument>,
    @InjectModel(BusinessProfile.name)
    private businessProfileModel: Model<BusinessProfileDocument>,
  ) {}

  create(createCopilotDto: CreateCopilotDto) {
    return 'This action adds a new copilot';
  }

  findAll() {
    return `This action returns all copilot`;
  }

  findOne(id: number) {
    return `This action returns a #${id} copilot`;
  }

  update(id: number, updateCopilotDto: UpdateCopilotDto) {
    return `This action updates a #${id} copilot`;
  }

  remove(id: number) {
    return `This action removes a #${id} copilot`;
  }
}
