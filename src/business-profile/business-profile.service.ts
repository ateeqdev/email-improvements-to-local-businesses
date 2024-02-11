import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  BusinessProfile,
  BusinessProfileDocument,
} from './entities/business-profile.entity';
import { CreateBusinessProfileDto } from './dto/create-business-profile.dto';
import { UpdateBusinessProfileDto } from './dto/update-business-profile.dto';
import axios from 'axios';

@Injectable()
export class BusinessProfileService {
  constructor(
    @InjectModel(BusinessProfile.name)
    private businessProfileModel: Model<BusinessProfileDocument>,
  ) {}
  async create(details: CreateBusinessProfileDto): Promise<any> {
    try {
      const response = await axios.request({
        method: 'GET',
        url: process.env.GET_GOOGLE_BUSINESS_PROFILES,
        params: {
          query: details.query,
          limit: process.env.RECORDS_LIMIT,
          lat: details.lat,
          lng: details.lng,
          zoom: '13',
          language: 'en',
          region: 'us',
          verified: 'true',
        },
        headers: {
          'X-RapidAPI-Key': process.env.RAPID_API_KEY,
          'X-RapidAPI-Host': process.env.GET_GOOGLE_BUSINESS_PROFILES_HOST,
        },
      });

      for (const data of response.data.data) {
        const businessProfile = new this.businessProfileModel(data);
        businessProfile.query = `${details.query} (lat: ${details.lat}, lng: ${details.lng})`;
        businessProfile.email_written = false;
        await businessProfile.save();
      }

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  findAll() {
    return `This action returns all BusinessProfile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} BusinessProfile`;
  }

  update(id: number, updateBusinessProfileDto: UpdateBusinessProfileDto) {
    return `This action updates a #${id} BusinessProfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} BusinessProfile`;
  }
}
