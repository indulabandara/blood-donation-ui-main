import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'top-donors',
  templateUrl: './top-donors.component.html',
  styleUrls: ['./top-donors.component.scss']
})
export class TopDonorsComponent {

  @Input() data: any = []

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

    let labels = [];
    let data = []

    for (const donor of this.data) {
      labels.push(donor.Name)
      data.push(donor.TotalDonate)
    }


    this.salesData = {
      labels: labels,
      datasets: [{
        data: data
      }],
    };
  }

}
