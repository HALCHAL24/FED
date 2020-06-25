import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../model/employee'
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  nameFilter: string = '';
  //empCount: number = 0;

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    //this.employees = this.employeeService.getEmployees();
    //this.empCount = this.employees.length;
    this.getEmployees();
  }

  //Get all employees
  getEmployees() {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }


  // Employee Details
  onDetails(employee) {
    this.router.navigate(["/employee-list", employee.id]);
  }

  // Edit employee details
  onEdit(employee) {
    this.router.navigate(["/edit-employee", employee.id]);

  }

  // Delete an employee
  onDelete(employee) {
    var result = confirm("Are you sure! You want to delete this Employee?");
    if (result) {
      this.employeeService.deleteEmployee(employee.id).subscribe(data => {
        this.getEmployees();
      });
      this.router.navigate(["employee-list"]);
      console.log("Deleted successfully");
    }
  }

}
