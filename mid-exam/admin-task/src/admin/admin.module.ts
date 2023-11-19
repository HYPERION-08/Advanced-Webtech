import { Module } from '@nestjs/common';
import { EmployeeController } from './controllers/employee/employee.controller';
import { EmployeesService } from './services/employees/employees.service';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeesService]
})
export class AdminModule {}
