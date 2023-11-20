import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController } from './admin/admin.controller';
import { EmployeeService } from './employee/employee.service';
import { ConfigModule } from '@nestjs/config';

const project_root = join(__dirname, '..', '..', '..', '..');
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(project_root, 'client', 'dist', 'client'),
    }),
    ConfigModule.forRoot(),
  ],
  controllers: [AppController, AdminController],
  providers: [AppService, EmployeeService],
})
export class AppModule {}
