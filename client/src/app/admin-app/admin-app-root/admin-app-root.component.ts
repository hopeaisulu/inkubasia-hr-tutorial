import { Component, OnInit } from '@angular/core';
import { Employee } from '@shared/employee.interface';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-admin-app-root',
  templateUrl: './admin-app-root.component.html',
  styleUrls: ['./admin-app-root.component.scss'],
})
export class AdminAppRootComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}
  employees!: Employee[];

  displayedColumns: string[] = ['id', 'firstName', 'lastName'];

  async ngOnInit() {
    const employees = await this.employeeService.getEmployees();
    employees.subscribe((employees: Employee[]) => {
      this.employees = employees;
    });
  }
}
