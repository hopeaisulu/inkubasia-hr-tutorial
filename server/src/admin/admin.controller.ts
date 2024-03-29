import { Controller, Get } from '@nestjs/common';
import { EmployeeService } from '../employee/employee.service';

@Controller('admin')
export class AdminController {
  constructor(private employeeService: EmployeeService) {}

  @Get('employees')
  findAll() {
    return this.employeeService.getAllEmployees();
  }
}
