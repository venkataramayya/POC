import { EmployeeListComponent } from './employee-list/employee-list.component';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HoursTrackedComponent } from "./hours-tracked/hours-tracked.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { EmployeeLogsComponent } from "./employee-logs/employee-logs.component";
import { ScreencastsComponent } from "./screencasts/screencasts.component";
import { ProjectListComponent } from "./project-list/project-list.component";
import { TaskProgressComponent } from './task-progrees/task-progrees.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TimesheetComponent } from "./timesheet/timesheet.component";
import { AttendanceComponent } from "./attendance/attendance.component";
import { SidebarRespComponent } from "./sidebar-resp/sidebar-resp.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DashboardComponent, HomeComponent, NavbarComponent, HoursTrackedComponent, TimelineComponent, EmployeeLogsComponent, ScreencastsComponent, ProjectListComponent, EmployeeListComponent, TaskProgressComponent, TicketListComponent, TimesheetComponent, AttendanceComponent, SidebarRespComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isSidebarHidden = false;

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isSidebarHidden = window.innerWidth < 992; // Hide sidebar if screen width is less than 992px
  }
}
