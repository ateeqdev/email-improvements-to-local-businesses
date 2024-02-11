import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WriteColdEmailService } from './write-cold-email.service';
import { CreateWriteColdEmailDto } from './dto/create-write-cold-email.dto';
import { UpdateWriteColdEmailDto } from './dto/update-write-cold-email.dto';

@Controller('write-cold-email')
export class WriteColdEmailController {
  constructor(private readonly writeColdEmailService: WriteColdEmailService) {}

  @Post()
  create(@Body() createWriteColdEmailDto: CreateWriteColdEmailDto) {
    return this.writeColdEmailService.create(createWriteColdEmailDto);
  }

  @Get()
  findAll() {
    return this.writeColdEmailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.writeColdEmailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWriteColdEmailDto: UpdateWriteColdEmailDto) {
    return this.writeColdEmailService.update(+id, updateWriteColdEmailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.writeColdEmailService.remove(+id);
  }
}
