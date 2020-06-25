import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../model/employee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  public employeeId;
  public employeeModel: any = {};

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.employeeId = id;
    //this.employeeModel = this.employeeService.getEmployee(id);
    this.employeeService.getEmployee(this.employeeId).subscribe(data => {
      this.employeeModel = data;
    });
  }


  //Submit Edited value
  onSubmit(employeeForm) {
    let updateEmployee = new Employee(
      this.employeeId,
      employeeForm.employeeName,
      employeeForm.employeeEmail,
      employeeForm.employeePhone,
      employeeForm.employeeLocation
    );
    this.employeeService.editEmployee(updateEmployee).subscribe();
    this.router.navigate(['/employee-list']);
    console.log("Edited Successfully!");
  }

  //Back to employee list page
  goBack() {
    this.router.navigate(['/employee-list']);
  }

}
