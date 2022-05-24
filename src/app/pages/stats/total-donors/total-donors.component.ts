import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'total-donors',
  templateUrl: './total-donors.component.html',
  styleUrls: ['./total-donors.component.scss']
})
export class TotalDonorsComponent {

  @Input() activeDonors: any = undefined
  @Input() totalDonors: any = undefined

  public salesData: ChartData<'line'> = {
    labels: [],
    datasets: [{
      data: []
    }],
  };

  public chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
      },
    },
  };

  constructor() { }

  ngOnChanges() {
    let inactiveCount = this.totalDonors - this.activeDonors
    this.salesData = {
      labels: ["Active Donors", "Inactive Donors"],
      datasets: [{
        data: [this.activeDonors, inactiveCount]
      }],
    };
  }

}
