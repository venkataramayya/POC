import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  imports: [NgFor,CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employees = [
    { name: 'Phil Glover', project: 'Gob Geeklords', tasks: 2, email: 'PhilGlover@gmail.com', projectAssigned: new Date('2021-03-18'), highlight: false },
    { name: 'Robert Anderson', project: 'Rhinestone', tasks: 5, email: 'RobertAnderson@gmail.com', projectAssigned: new Date('2021-01-14'), highlight: false },
    { name: 'Ryan Randall', project: 'Fast Cad', tasks: 8, email: 'RyanRandall@gmail.com', projectAssigned: new Date('2021-04-14'), highlight: false },
    { name: 'Ryan Stewart', project: 'Social Geek Made', tasks: 15, email: 'RyanStewart@gmail.com', projectAssigned: new Date('2021-01-13'), highlight: false },
    { name: 'Sally Graham', project: 'Practice to Perfect', tasks: 9, email: 'SallyGraham@gmail.com', projectAssigned: new Date('2021-01-13'), highlight: false },
    { name: 'Victor Rampling', project: 'Java Dalia', tasks: 7, email: 'VictorRampling@gmail.com', projectAssigned: new Date('2021-06-18'), highlight: false },
    { name: 'Joan Dyer', project: 'Box of Crayons', tasks: 5, email: 'JoanDyer@gmail.com', projectAssigned: new Date('2021-02-23'), highlight: true }
  ];

  editEmployee(employee: any) {
    console.log('Editing employee:', employee);
  }

  deleteEmployee(employee: any) {
    const index = this.employees.indexOf(employee);
    if (index > -1) {
      this.employees.splice(index, 1);
    }
    console.log('Deleted employee:', employee);
  }


}
