import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '@shared/employee.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private httpService: HttpClient) {}

  async getEmployees(): Promise<Observable<Employee[]>> {
    return this.httpService.get<Employee[]>('admin/employees');
  }
}
