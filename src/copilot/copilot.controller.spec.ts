import { Test, TestingModule } from '@nestjs/testing';
import { CopilotController } from './copilot.controller';
import { CopilotService } from './copilot.service';

describe('CopilotController', () => {
  let controller: CopilotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CopilotController],
      providers: [CopilotService],
    }).compile();

    controller = module.get<CopilotController>(CopilotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
