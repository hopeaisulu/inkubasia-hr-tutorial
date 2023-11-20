import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAppRootComponent } from './employee-app-root.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { EmployeeService } from 'src/app/employee.service';

describe('EmployeeAppRootComponent', () => {
  let component: EmployeeAppRootComponent;
  let fixture: ComponentFixture<EmployeeAppRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeAppRootComponent],
      imports: [MatToolbarModule, MatIconModule],
      providers: [EmployeeService],
    });
    fixture = TestBed.createComponent(EmployeeAppRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
