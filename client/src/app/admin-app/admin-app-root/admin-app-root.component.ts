import { Component } from '@angular/core';
import { Employee } from '@shared/employee.interface';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-admin-app-root',
  templateUrl: './admin-app-root.component.html',
  styleUrls: ['./admin-app-root.component.scss'],
})
export class AdminAppRootComponent {
  constructor(private employeeService: EmployeeService) {}
  employees: Employee[] = [];

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }
}
