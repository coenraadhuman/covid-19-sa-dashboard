import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  @Input() view: any[];
  @Input() data;

  showLegend = true;
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  xAxisLabel = 'Recorded Date';
  showYAxisLabel = true;
  yAxisLabel = 'Cases';

  colorScheme = {
    domain: [
      '#a8385d',
      '#7aa3e5',
      '#a27ea8',
      '#aae3f5',
      '#adcded',
      '#a95963',
      '#8796c0',
      '#7ed3ed',
      '#50abcc',
      '#ad6886',
    ],
  };

  constructor() {
    this.getScreenSize();
  }

  ngOnInit(): void {}

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    if (window.innerWidth < 768) {
      this.view = [1000, window.innerHeight - 150];
    } else {
      this.view = [window.innerWidth - 100, window.innerHeight - 150];
    }
  }
}
