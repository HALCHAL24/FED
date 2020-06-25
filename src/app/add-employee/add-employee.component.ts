import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee'
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  // Services injected in constructor
  constructor(private addEmployeeService: EmployeeService, private router: Router) { }

  employee: Employee;
  public newId;

  ngOnInit() {
    this.addEmployeeService.getEmployees().subscribe(data => {
      const lastEmployee = data[data.length - 1];
      this.newId = lastEmployee['id'] + 1;
      //console.log(this.newId);
    });
  }

  employeeModel = new Employee(this.newId, '', '', '', '');

  // Add Employee
  onSubmit() {
    //this.addEmployeeService.addEmployee(this.employeeModel);
    this.addEmployeeService.addEmployee(this.employeeModel).subscribe(data => {
      this.employee = data;
    });
    console.log("Employee Added Successfully!");
    this.router.navigate(["employee-list"]);
  }

  //Back to Employee List Page
  goBack() {
    this.router.navigate(['/employee-list']);
  }



}
