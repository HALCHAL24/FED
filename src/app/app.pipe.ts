import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'employeeFilter'})
export class EmployeeFilterPipe implements PipeTransform {
    transform(value: any[], args:string): any[] {
        //console.log("value" + value);
        //console.log("args" + args);
        let filter:string = args ? args.toLocaleLowerCase() : null;
        //console.log("filter" + filter);
        return filter ? value.filter((employee) =>
        employee.name.toLocaleLowerCase().startsWith(filter) != false) : value;
    }
}