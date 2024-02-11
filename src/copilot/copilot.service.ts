import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Copilot, CopilotDocument } from './entities/copilot.entity';
import { CreateCopilotDto } from './dto/create-copilot.dto';
import { UpdateCopilotDto } from './dto/update-copilot.dto';
import axios from 'axios';
import { BusinessProfileService } from '../business-profile/business-profile.service';
import { CreateBusinessProfileDto } from '../business-profile/dto/create-business-profile.dto';

@Injectable()
export class CopilotService {
  constructor(
    @InjectModel(Copilot.name)
    private copilotModel: Model<CopilotDocument>,
    private readonly businessProfileService: BusinessProfileService,
  ) {}
  async create(details: CreateCopilotDto): Promise<any> {
    try {
      let existingRecord = await this.businessProfileService.findOneByFilters({
        email_written: false,
        query: `${details.query} (lat: ${details.lat}, lng: ${details.lng})`,
      });
      if (!existingRecord) {
        await this.businessProfileService.create(
          details as CreateBusinessProfileDto,
        );
        existingRecord = await this.businessProfileService.findOneByFilters({
          email_written: false,
          query: `${details.query} (lat: ${details.lat}, lng: ${details.lng})`,
        });
      }
      if (!existingRecord) {
        existingRecord = await this.copilotModel.findOne({
          name: `${details.query} (lat: ${details.lat}, lng: ${details.lng})`,
        });
        if (existingRecord) {
          return existingRecord.toObject();
        }
        return false;
      }
      existingRecord = existingRecord.toJSON();

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
            'Act as an expert in SEO, web, and mobile design and development. Review my Google Business Profile and advise on enhancements via email. Ensure the email is brief, focusing on a single issue identified from the profile. Craft a catchy subject with no more than two words. Do not add signature, placeholder, or unnecessary words like Best regards,Company name, Address, Phone, Website, View on Google Maps, Type, District, Verified, Photos, Services, Business Status, Timezone, Owner, Note etc. Please find my business details attached.' +
            JSON.stringify(existingRecord),
          conversation_id: null,
          tone: 'PRECISE',
          markdown: false,
        },
      };
      const response = await axios.request(options);
      const util = require('util');
      console.log(util.inspect(response.data, false, null, true));
      const copilotData: any[] = Object.values(response.data)
        .filter((data: any) => data.hasOwnProperty('message'))
        .map((data: any) => ({
          ...(data as object),
          name: `${details.query} (lat: ${details.lat}, lng: ${details.lng})`,
        }));

      try {
        const inserted = await this.copilotModel.insertMany(copilotData);

        await this.businessProfileService.update(existingRecord.id, {
          ...existingRecord,
          email_written: true,
        });
        return inserted[0]?.message;
      } catch (error) {
        console.error('Error inserting copilot data:', error);
        throw error;
      }
    } catch (error) {
      console.error('Error occurred:', error);
      throw error;
    }
  }

  async findAll() {
    return `This action returns all Copilot`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} Copilot`;
  }

  async findByFilters(filters: Object) {
    return `This action returns a Copilot`;
  }

  async findOneByFilters(filters: Object) {
    return await this.copilotModel.findOne(filters);
  }

  async update(id: number, updateCopilotDto: UpdateCopilotDto) {
    return `This action updates a #${id} Copilot`;
  }

  async remove(id: number) {
    return `This action removes a #${id} Copilot`;
  }
}
