import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
