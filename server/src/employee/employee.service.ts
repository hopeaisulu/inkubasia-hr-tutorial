import { Injectable } from '@nestjs/common';
import { Employee } from '@shared/employee.interface';

@Injectable()
export class EmployeeService {
  getAllEmployees(): Employee[] {
    const employees: Employee[] = [
      {
        id: 1,
        firstName: 'Aisulu',
        lastName: 'Abdraimova',
      },
      {
        id: 2,
        firstName: 'Aidai',
        lastName: 'Sydykbekova',
      },
      {
        id: 3,
        firstName: 'Aman',
        lastName: 'Madiiarbekov',
      },
      {
        id: 4,
        firstName: 'Tilegen',
        lastName: 'Asankulov',
      },
      {
        id: 5,
        firstName: 'Tavita',
        lastName: 'Menashe',
      },
      {
        id: 6,
        firstName: 'FuMing',
        lastName: 'Young',
      },
      {
        id: 7,
        firstName: 'Aaron',
        lastName: 'Hong',
      },
      {
        id: 8,
        firstName: 'David',
        lastName: 'Wise',
      },
    ];
    return employees;
  }
}
