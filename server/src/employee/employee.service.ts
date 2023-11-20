import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Employee } from '@shared/employee.interface';
import * as postgres from 'postgres';

@Injectable()
export class EmployeeService {
  private readonly db_url: string;
  constructor(private configService: ConfigService) {
    this.db_url = this.configService.get('DATABASE_URL')!;
  }

  async getAllEmployees(): Promise<Employee[]> {
    const sql = postgres(this.db_url);
    const employees: Employee[] = await sql`SELECT * FROM employee;`;
    return employees;
  }
}
