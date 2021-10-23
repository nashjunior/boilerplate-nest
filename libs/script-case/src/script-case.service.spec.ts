import { Test, TestingModule } from '@nestjs/testing';
import { ScriptCaseService } from './script-case.service';

describe('ScriptCaseService', () => {
  let service: ScriptCaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScriptCaseService],
    }).compile();

    service = module.get<ScriptCaseService>(ScriptCaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
