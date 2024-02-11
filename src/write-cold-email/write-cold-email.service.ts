import { Injectable } from '@nestjs/common';
import { CreateWriteColdEmailDto } from './dto/create-write-cold-email.dto';
import { UpdateWriteColdEmailDto } from './dto/update-write-cold-email.dto';
import axios from 'axios';

@Injectable()
export class WriteColdEmailService {
  async create(details: CreateWriteColdEmailDto): Promise<any> {
    const options = {
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
    };

    try {
      const response = await axios.request(options);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log("error occured");
      throw error;
    }
  }

  findAll() {
    return `This action returns all writeColdEmail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} writeColdEmail`;
  }

  update(id: number, updateWriteColdEmailDto: UpdateWriteColdEmailDto) {
    return `This action updates a #${id} writeColdEmail`;
  }

  remove(id: number) {
    return `This action removes a #${id} writeColdEmail`;
  }
}
