import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";

import { NavbarComponent } from "./navbar/navbar.component";

import { SidebarRespComponent } from "./sidebar-resp/sidebar-resp.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DashboardComponent, NavbarComponent,  SidebarRespComponent],
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
