import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCopilotDto } from './dto/create-copilot.dto';
import { UpdateCopilotDto } from './dto/update-copilot.dto';
import { Copilot, CopilotDocument } from './entities/copilot.entity';
import {
  BusinessProfile,
  BusinessProfileDocument,
} from '../business-profile/entities/business-profile.entity';
import axios from 'axios';
import { BusinessProfileService } from '../business-profile/business-profile.service';
import { CreateBusinessProfileDto } from '../business-profile/dto/create-business-profile.dto';

@Injectable()
export class CopilotService {
  constructor(
    @InjectModel(Copilot.name)
    private copilotModel: Model<CopilotDocument>,
    @InjectModel(BusinessProfile.name)
    private businessProfileModel: Model<BusinessProfileDocument>,
    private readonly businessProfileService: BusinessProfileService,
  ) {}

  async create(details: CreateCopilotDto) {
    let existingRecord = await this.businessProfileModel.findOne({
      email_written: false,
      query: `${details.query} (lat: ${details.lat}, lng: ${details.lng})`,
    });
    if (!existingRecord) {
      await this.businessProfileService.create(
        details as CreateBusinessProfileDto,
      );
      existingRecord = await this.businessProfileModel.findOne({
        email_written: false,
        query: `${details.query} (lat: ${details.lat}, lng: ${details.lng})`,
      });
    }
    if (!existingRecord) {
      existingRecord = await this.copilotModel.findOne({
        query: `${details.query} (lat: ${details.lat}, lng: ${details.lng})`,
      });
      if (existingRecord) {
        return existingRecord.toObject();
      }
      return false;
    }

    const options = {
      method: 'POST',
      url: process.env.COPILOT_URL,
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.COPILOT_HOST,
      },
      data: {
        message:
          'Act as an expert in SEO, web, and mobile design and development. Review my Google Business Profile and advise on enhancements via email. Ensure the email is brief, focusing on a single issue identified from the profile. Craft a catchy subject with no more than two words. Do not add any signature or unnecessary words. Please find my business details attached.' +
          JSON.stringify(existingRecord),
        conversation_id: null,
        tone: 'PRECISE',
        markdown: false,
      },
    };
    const response = await axios.request(options);
    console.log(response.data);

    for (const data of Object.values(response.data)) {
      const copilot = new this.copilotModel(data);
      copilot.query = `${details.query} (lat: ${details.lat}, lng: ${details.lng})`;
      await copilot.save();
    }
    return response.data;
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
