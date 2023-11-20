import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAppRootComponent } from './admin-app-root.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EmployeeService } from 'src/app/employee.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AdminAppRootComponent', () => {
  let component: AdminAppRootComponent;
  let fixture: ComponentFixture<AdminAppRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAppRootComponent],
      imports: [MatIconModule, MatToolbarModule],
      providers: [EmployeeService, HttpClient, HttpHandler],
    });
    fixture = TestBed.createComponent(AdminAppRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
