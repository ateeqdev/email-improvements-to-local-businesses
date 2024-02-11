import { Test, TestingModule } from '@nestjs/testing';
import { WriteColdEmailController } from './write-cold-email.controller';
import { WriteColdEmailService } from './write-cold-email.service';

describe('WriteColdEmailController', () => {
  let controller: WriteColdEmailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WriteColdEmailController],
      providers: [WriteColdEmailService],
    }).compile();

    controller = module.get<WriteColdEmailController>(WriteColdEmailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
