import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attendance',
  imports: [CommonModule],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.css'
})
export class AttendanceComponent {
  days: number[] = Array.from({ length: 31 }, (_, i) => i + 1);

  employees = [
    { name: "Joan Dyer", attendance: ["full", "full", "full", "half", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "half", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", ] },
    { name: "Ryan Randall", attendance: ["absent", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "absent", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", ] },
    { name: "Phil Glover", attendance: ["full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", ] },
    { name: "Victor Rampling", attendance: ["full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "half", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", ] },
    { name: "Sally Graham", attendance: ["full", "full", "half", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full",] },
    { name: "Robert Anderson", attendance: ["full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full","half", "full", "full", "full", "full", "full", "full","half", "full",] },
    { name: "Ryan Stewart", attendance: ["full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full", "full","half", "full", "full", "full", "full", "full", "full","half", "full",], },
  ];

  getStatusIcon(status: string): string {
    return status === "full" ? "✅" : status === "half" ? "🌗" : "❌";
  }

}
