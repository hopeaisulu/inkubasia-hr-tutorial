import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeAppRootComponent } from './employee-app-root/employee-app-root.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [EmployeeAppRootComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule],
  exports: [EmployeeAppRootComponent],
})
export class EmployeeAppModule {}
