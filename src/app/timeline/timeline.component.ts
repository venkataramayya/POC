import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-timeline',
  imports: [CommonModule,BaseChartDirective],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {


    public barChartLabels: string[] = ['02:00', '03:00', '04:00', '05:00', '06:00'];  // Labels as string array

    public barChartType: ChartType = 'bar';

    public barChartData: ChartData<'bar'> = {
      labels: this.barChartLabels,
      datasets: [
        {
          data: [50, 75, 90, 40, 60],
          label: 'Activity Timeline',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    };
    showNotifications = false;
    showFlags = false;
    showProfile = false;
     barChartOptions: false = false;
    toggleNotifications() {
      this.showNotifications = !this.showNotifications;
    }

    toggleFlags() {
      this.showFlags = !this.showFlags;
    }

    toggleProfile() {
      this.showProfile = !this.showProfile;
    }
 


}
