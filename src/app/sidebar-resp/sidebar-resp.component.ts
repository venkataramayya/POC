
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-sidebar-resp',
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar-resp.component.html',
  styleUrl: './sidebar-resp.component.css',
})
export class SidebarRespComponent {
  isCollapsed = false;

  // Menu data
  menuSections = [
    {
      icon: '🏠',
      text: 'Home',
      subOptions: null,
      isOpen: false,
      url: '/home'
    },
    {
      icon: '🔁',
      text: 'Reprts',
      subOptions: [
        { icon: '📄', text: 'Attendance', url: 'attendance' },
        { icon: '⏳', text: 'Hours tracked', url: '/hours-tracked' },
        { icon: '⏰', text: 'Timeline', url: '/timeline' },
        { icon: '👮‍♂️', text: 'employee', url: '/employee-list' },
      ],
      isOpen: false,
    },
    {
      icon: '📺',
      text: 'Screen casts',

      isOpen: false,
      url:'/screencast'
    },
    {
      icon: '🏢',
      text: 'projects',
      subOptions: [
        { icon: '🎟', text: 'project list', url: '/project-list' },
        { icon: '🎟', text: 'employee', url: '/employee-logs' },
        { icon: '🎟', text: 'Task progrees', url: '/task-progrees' },
        { icon: '⏳', text: 'ticket list', url: '/ticket-list' },
      ],
    },

  ];

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
      this.menuSections.forEach((section) => (section.isOpen = false));
    }
  }

  toggleSection(section: any) {
    if (section.subOptions) {
      section.isOpen = !section.isOpen;
    }
  }
}

