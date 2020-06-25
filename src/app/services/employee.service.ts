import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiurl = '/api/employees';

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };
  /*
    Employees : Employee[] = [
      {
        id: 1,
        name: "Ram",
        location: "Bangalore",
        email: "ram@mail.com",
        phone: "9867512345"
      },
      {
        id: 2,
        name: "Raj",
        location: "Chennai",
        email: "raj@mail.com",
        phone: "7867534521"
      },
      {
        id: 3,
        name: "Vinay",
        location: "Pune",
        email: "vinay@mail.com",
        phone: "9975287450"
      },
      {
        id: 4,
        name: "Sanyasee",
        location: "Bangalore",
        email: "sanyasee17@gmail.com",
        phone: "9777866810"
      }
    ];
  */
  constructor(private http: HttpClient) { }

  //Error Handler
  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  //Get Employees
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiurl).pipe(
      catchError(this.handleError)
    );
  }

  //Add Employee
  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiurl, employee, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  //Delete Employee
  deleteEmployee(id: number): Observable<Employee> {
    const url = `${this.apiurl}/${id}`;
    return this.http.delete<Employee>(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  //Get an Employee
  getEmployee(id: number): Observable<Employee> {
    const url = `${this.apiurl}/${id}`;
    return this.http.get<Employee>(url).pipe(
      catchError(this.handleError)
    );
  }

  //Edit Employee
  editEmployee(employee: Employee): Observable<Employee> {
    //console.log(employee);
    return this.http.put<Employee>(this.apiurl, employee, this.httpOptions).pipe(
      catchError(this.handleError)
    );

  }


  /*

  // Get employees
  getEmployees():Employee[]{
    return this.Employees;
  }

  

  // Add employee 
  addEmployee(employee:Employee){
    this.Employees.push(employee);
    console.log("Added Successfully!");
  }

  // Delete employee 
  deleteEmployee(id:string){
    //console.log(id);
    var toDeleteEmployee: Employee= this.Employees.find(emp => emp.id == parseInt(id));
    //console.log(toDeleteEmployee);
    this.Employees.splice(parseInt(id) - 1, 1);
    console.log("Deleted Successfully!"); 
  }
  
  // Get employee details
  getEmployee(id:number):Employee{
    return this.Employees.find(emp => emp.id == id);
  }

  // Edit employee 
  editEmployee(employee:Employee){
    var editEmployee: Employee= this.Employees.find(emp => emp.id == employee.id);
    editEmployee.name = employee.name;
    editEmployee.location = employee.location;
    editEmployee.email = employee.email;
    editEmployee.phone = employee.phone;
    console.log("Updated Successfully!");
  }

  */


}
