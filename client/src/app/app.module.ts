import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeAppModule } from './employee-app/employee-app.module';
import { AdminAppModule } from './admin-app/admin-app.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EmployeeAppModule,
    AdminAppModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
