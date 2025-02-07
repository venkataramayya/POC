import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface TimeEntry {
  project: string;
  startTime: string;
  endTime: string;
  worked: string;
  taskDetail: string;
}
@Component({
  selector: 'app-timesheet',
  imports: [CommonModule],
  templateUrl: './timesheet.component.html',
  styleUrl: './timesheet.component.css'
})
export class TimesheetComponent {
  timeEntries: TimeEntry[] = [
    { project: 'Box of Crayons', startTime: '08:45 AM', endTime: '06:07 PM', worked: '8h 52m', taskDetail: 'Form Validation' },
    { project: 'Gob Geeklords', startTime: '08:40 AM', endTime: '07:08 PM', worked: '9h 53m', taskDetail: 'Marketing Image Design' },
    { project: 'Java Dalia', startTime: '09:20 AM', endTime: '05:08 PM', worked: '6h 28m', taskDetail: 'API Developing' },
    { project: 'Practice to Perfect', startTime: '08:20 AM', endTime: '07:08 PM', worked: '8h 28m', taskDetail: 'Bug Fixed' },
    { project: 'Rhinestone', startTime: '09:07 AM', endTime: '07:00 PM', worked: '9h 07m', taskDetail: 'Working On Design' }
  ];

  saveEntry(index: number) {
    alert(`Entry for "${this.timeEntries[index].project}" saved!`);
  }

  deleteEntry(index: number) {
    if (confirm(`Are you sure you want to delete "${this.timeEntries[index].project}"?`)) {
      this.timeEntries.splice(index, 1);
    }
  }
}
