import { Body, Controller, Delete, Get, Param, Post, Put, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateEmployeeDto } from 'src/admin/dto/CreateEmployee.dto';
import { EmployeesService } from 'src/admin/services/employees/employees.service';

@Controller('employee')
export class EmployeeController {

  constructor(private readonly employeeService : EmployeesService){}

  // getting the empoyee information (default)
  // @Get()
  // getEmployees(){
  //   return [{ Employee : 'Ovy' , contact : 'ovy@email.com' , username : 'ovy1', password : '123455'},
  //   { Employee : 'Ovy' , contact : 'ovy@email.com' , username : 'ovy1', password : '123455'},
  //   { Employee : 'Ovy' , contact : 'ovy@email.com' , username : 'ovy1', password : '123455'},
  // ]
  // }


  // creating the employee here -->> through DTO
  @Post('create')
  @UsePipes(new ValidationPipe())
  createEmployee(@Body() employeeData : CreateEmployeeDto){
      this.employeeService.createEmployee(employeeData)
      return 'Employee is created';
  }


  @Put(':id')
  @UsePipes(new ValidationPipe())
  updateEmployee(@Param('id') id : number, @Body() updateEmployee : CreateEmployeeDto){
  this.employeeService.updateEmployee(id,updateEmployee)

  return 'Employee' +id+ 'updated';
  }


  @Delete(':id')
  deleteEmployee(@Param('id') id:number){
    this.employeeService.deleteEmployee(id);

    return "Employee id " + id + " is deleted";

  }

  @Get(':username')
  searchUser(@Param('username') username : string){
    return this.employeeService.searchEmployee(username);
  }

  @Get()
  getAllUsers(){
    return this.employeeService.getAllEmployee();
  }
}
