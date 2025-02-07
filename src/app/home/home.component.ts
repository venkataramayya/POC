import { ChartOptions, ChartData, ChartType } from 'chart.js';
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-home',
  imports: [CommonModule,BaseChartDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Dynamic Timeline Graph';

   public barChartOptions: ChartOptions = {
    responsive: true,
  };

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
