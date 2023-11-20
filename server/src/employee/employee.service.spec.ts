import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeService } from './employee.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeService, ConfigService],
      imports: [ConfigModule],
    }).compile();

    service = module.get<EmployeeService>(EmployeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
