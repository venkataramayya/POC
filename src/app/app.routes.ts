import { Routes } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeLogsComponent } from './employee-logs/employee-logs.component';
import { HomeComponent } from './home/home.component';
import { HoursTrackedComponent } from './hours-tracked/hours-tracked.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ScreencastsComponent } from './screencasts/screencasts.component';
import { TaskProgressComponent } from './task-progrees/task-progrees.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TimesheetComponent } from './timesheet/timesheet.component';

export const routes: Routes = [

  {
    path:"attendance",
    component:AttendanceComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"employee-list",
    component:EmployeeListComponent
  },
  {
    path:"employee-logs",
    component:EmployeeLogsComponent

  },
  {
    path:"home",
    component:HomeComponent

  },
  {
    path:"hours-tracked",
    component:HoursTrackedComponent
  },
  {
    path:"navbar",
    component:NavbarComponent
  },{
    path:"project-list",
    component:ProjectListComponent
  },
  {
    path:"screencast",
    component:ScreencastsComponent
  },{
    path:"task-progrees",
    component:TaskProgressComponent
  },{
    path:"ticket-list",
    component:TicketListComponent
  },{
    path:"timeline",
    component:TimelineComponent
  },
  {
    path:"timeseet",
    component:TimesheetComponent
  }

];
