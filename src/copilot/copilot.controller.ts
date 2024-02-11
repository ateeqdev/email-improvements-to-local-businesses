import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CopilotService } from './copilot.service';
import { CreateCopilotDto } from './dto/create-copilot.dto';
import { UpdateCopilotDto } from './dto/update-copilot.dto';

@Controller('copilot')
export class CopilotController {
  constructor(private readonly copilotService: CopilotService) {}

  @Post()
  create(@Body() createCopilotDto: CreateCopilotDto) {
    return this.copilotService.create(createCopilotDto);
  }

  @Get()
  findAll() {
    return this.copilotService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.copilotService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCopilotDto: UpdateCopilotDto) {
    return this.copilotService.update(+id, updateCopilotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.copilotService.remove(+id);
  }
}
