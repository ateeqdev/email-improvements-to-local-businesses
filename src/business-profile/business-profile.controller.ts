import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BusinessProfileService } from './business-profile.service';
import { CreateBusinessProfileDto } from './dto/create-business-profile.dto';
import { UpdateBusinessProfileDto } from './dto/update-business-profile.dto';

@Controller('business-profile')
export class BusinessProfileController {
  constructor(private readonly BusinessProfileService: BusinessProfileService) {}

  @Post()
  create(@Body() createBusinessProfileDto: CreateBusinessProfileDto) {
    return this.BusinessProfileService.create(createBusinessProfileDto);
  }

  @Get()
  findAll() {
    return this.BusinessProfileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.BusinessProfileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBusinessProfileDto: UpdateBusinessProfileDto) {
    return this.BusinessProfileService.update(+id, updateBusinessProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.BusinessProfileService.remove(+id);
  }
}
