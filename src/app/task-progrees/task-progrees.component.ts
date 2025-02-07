import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-progress',
  imports: [CommonModule,NgFor],
  templateUrl: './task-progrees.component.html',
   styleUrl: './task-progrees.component.css'
})
export class TaskProgressComponent {

  members = [1, 2]; // Dummy array for displaying avatars


}
