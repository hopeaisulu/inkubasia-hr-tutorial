import { Test, TestingModule } from '@nestjs/testing';
import { AdminController } from './admin.controller';
import { EmployeeService } from '../employee/employee.service';
import { ConfigModule } from '@nestjs/config';

describe('AdminController', () => {
  let controller: AdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminController],
      providers: [EmployeeService],
      imports: [ConfigModule],
    }).compile();

    controller = module.get<AdminController>(AdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
