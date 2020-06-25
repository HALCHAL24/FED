import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../model/employee'
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employeeId: number;
  public employeeDetails: any = {};
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.employeeId = id;
    //this.employeeDetails = this.employeeService.getEmployee(id);
    this.employeeService.getEmployee(this.employeeId).subscribe(data => {
      this.employeeDetails = data;
    });
  }

  //Back to Employee List Page
  goBack() {
    this.router.navigate(['/employee-list']);
  }

}
