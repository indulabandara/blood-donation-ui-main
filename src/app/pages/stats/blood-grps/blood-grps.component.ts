import { Component, Input, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'blood-grps',
  templateUrl: './blood-grps.component.html',
  styleUrls: ['./blood-grps.component.scss']
})
export class BloodGrpsComponent {

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

    for (const grp of this.data) {
      labels.push(grp.type)
      data.push(grp.count)
    }


    this.salesData = {
      labels: labels,
      datasets: [{
        data: data
      }],
    };
  }
}
