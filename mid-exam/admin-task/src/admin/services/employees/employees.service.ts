import { Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { CreateEmployeeDto } from 'src/admin/dto/CreateEmployee.dto';

@Injectable()
export class EmployeesService {

  private Employee = [];

  createEmployee( Employee : CreateEmployeeDto){
    this.Employee.push(Employee);
  }

  updateEmployee(id:number, updateEmployee : CreateEmployeeDto){
    if (this.Employee[id]){
      this.Employee[id] = updateEmployee;
    }else{
      throw new NotFoundException("Employee Not Found")
    }
  }

  deleteEmployee(id:number){
  if (this.Employee[id]){
    this.Employee.splice(id,1);
  }
  else{
    throw new NotFoundException('Employee Not Found');
  }
  }

  searchEmployee(username : string){
    const Employee = this.Employee.find((u)=>u.username === username);
    if (!Employee){
      throw new NotFoundException('Employee not found')
    }
    return Employee;
  }

  getAllEmployee(){
    return this.Employee;
  }

}
