import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';


interface Notification {
  id: number;
  name: string;
  message: string;
  time: string;
}
@Component({
  selector: 'app-navbar',
  imports: [NgIf,NgFor],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  notification=false;
  shownotification(){
    this.notification= !this.notification;
  }
  notifications: Notification[] = [
    { id: 1, name: 'Alan Hill', message: 'Invoice generator', time: '13MIN' },
    { id: 2, name: 'Melanie Oliver', message: 'Low Activity', time: '1HR' },
    { id: 3, name: 'Boris Hart', message: 'New Task Toyseller', time: '13MIN' },
    { id: 4, name: 'Alan Lambert', message: 'Leave Apply', time: '1HR' },
    { id: 5, name: 'Zoe Wright', message: 'Profile Updated', time: '1DAY' }
  ];

  addNotification() {
    this.notifications.unshift({
      id: this.notifications.length + 1,
      name: 'New User',
      message: 'New Notification',
      time: 'Just Now'
    });
  }

}
