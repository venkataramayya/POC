import { CommonModule, NgFor } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-project-list',
  imports: [NgFor,CommonModule,FormsModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
  members = [1, 2, 3, 4, 5]; // Dummy array for displaying avatars
  showForm = false;
  projectName = '';
  projectCategory = '';
  startDate = '';
  endDate = '';
  notificationGroup = '';
  assignedPerson = '';
  description = '';
  selectedFiles: File | null = null;

  openForm() {
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
  }

  onFileSelect(event: any) {
    this.selectedFiles = event.target.files[0];
  }

  submitForm() {
    const projectData = {
      projectName: this.projectName,
      projectCategory: this.projectCategory,
      startDate: this.startDate,
      endDate: this.endDate,
      notificationGroup: this.notificationGroup,
      assignedPerson: this.assignedPerson,
      description: this.description,
      selectedFiles: this.selectedFiles
    };
    console.log('Project Submitted:', projectData);
    this.closeForm();
  }
}
