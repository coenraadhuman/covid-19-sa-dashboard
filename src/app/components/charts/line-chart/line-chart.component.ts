import { Component, HostListener, Input, OnInit } from '@angular/core';
import {LanguageService} from '../../../services/language/language.service';

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

  isLabelXLoaded = false;
  isLabelYLoaded = false;

  colorScheme = {
    domain: [
      '#1B9CFC',
      '#BDC581',
      '#FD7272',
      '#aae3f5',
      '#adcded',
      '#a95963',
      '#8796c0',
      '#7ed3ed',
      '#50abcc',
      '#ad6886',
    ],
  };

  constructor(private language: LanguageService) {
    this.getScreenSize();
    language.getTranslation('CHART.XAXISLABEL').subscribe(x => {
      this.xAxisLabel = x;
      this.isLabelXLoaded = true;
    });
    language.getTranslation('CHART.YAXISLABEL').subscribe(y => {
      this.yAxisLabel = y;
      this.isLabelYLoaded = true;
    });
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
