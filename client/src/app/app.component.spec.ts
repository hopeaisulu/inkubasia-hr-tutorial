import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { EmployeeAppModule } from './employee-app/employee-app.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { EmployeeAppRootComponent } from './employee-app/employee-app-root/employee-app-root.component';
import { AdminAppModule } from './admin-app/admin-app.module';
import { AdminAppRootComponent } from './admin-app/admin-app-root/admin-app-root.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        EmployeeAppModule,
        MatToolbarModule,
        MatIconModule,
        AdminAppModule,
      ],
      declarations: [AppComponent],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'client'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('client');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(EmployeeAppRootComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'Hello, Aisulu'
    );
  });

  it('should render title for Admin App', () => {
    const fixture = TestBed.createComponent(AdminAppRootComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'Employees'
    );
  });
});
