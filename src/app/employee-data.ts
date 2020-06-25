import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from './model/employee';


export class EmployeeData implements InMemoryDbService {
  createDb() {
    let employees: Employee[] = [
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

    return { employees };
  }
}