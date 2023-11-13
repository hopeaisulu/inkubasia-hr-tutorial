import { Component } from '@angular/core';
import { Employee } from '@shared/employee.interface';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-admin-app-root',
  templateUrl: './admin-app-root.component.html',
  styleUrls: ['./admin-app-root.component.scss'],
})
export class AdminAppRootComponent {
  constructor(private employeeService: EmployeeService) {}
  employees$!: Observable<Employee[]>;

  async ngOnInit() {
    this.employees$ = await this.employeeService.getEmployees();
  }
}
