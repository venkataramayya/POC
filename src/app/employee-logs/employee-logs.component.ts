import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-employee-logs',
  imports: [NgFor],
  templateUrl: './employee-logs.component.html',
  styleUrl: './employee-logs.component.css'
})
export class EmployeeLogsComponent {
  logData = [
    {
      employee: 'Phil Glover',
      project: 'Box of Crayons',
      startDate: '27 Dec 2021',
      start: '12:17',
      end: '20:17',
      activeTime: '06:42',
      idleTime: '01:17',
      totalTime: '07:59',
      activityLevel: 73
    },
    {
      employee: 'Phil Glover',
      project: 'Box of Crayons',
      startDate: '28 Dec 2021',
      start: '10:24',
      end: '15:37',
      activeTime: '02:32',
      idleTime: '02:40',
      totalTime: '05:13',
      activityLevel: 38
    },
    {
      employee: 'Phil Glover',
      project: 'Box of Crayons',
      startDate: '28 Dec 2021',
      start: '15:38',
      end: '19:57',
      activeTime: '04:17',
      idleTime: '00:00',
      totalTime: '04:18',
      activityLevel: 88
    },
    {
      employee: 'Phil Glover',
      project: 'Box of Crayons',
      startDate: '29 Dec 2021',
      start: '10:13',
      end: '17:42',
      activeTime: '04:43',
      idleTime: '02:45',
      totalTime: '07:28',
      activityLevel: 49
    },
    {
      employee: 'Phil Glover',
      project: 'Box of Crayons',
      startDate: '29 Dec 2021',
      start: '17:43',
      end: '18:39',
      activeTime: '00:56',
      idleTime: '00:00',
      totalTime: '00:56',
      activityLevel: 90
    }
  ];


}
