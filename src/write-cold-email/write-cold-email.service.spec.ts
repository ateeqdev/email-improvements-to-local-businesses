import { Test, TestingModule } from '@nestjs/testing';
import { WriteColdEmailService } from './write-cold-email.service';

describe('WriteColdEmailService', () => {
  let service: WriteColdEmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WriteColdEmailService],
    }).compile();

    service = module.get<WriteColdEmailService>(WriteColdEmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
