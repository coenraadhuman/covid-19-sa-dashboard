import { Component, OnInit } from '@angular/core';
import {DataStoreService} from '../../services/data-store/data-store.service';
import {DataAssignmentService} from '../../services/data-assignment/data-assignment.service';
import {TranslateService} from '@ngx-translate/core';
import {Gtag} from 'angular-gtag';
import {ActivatedRoute} from '@angular/router';
import {DataTransformingService} from '../../services/data-transforming/data-transforming.service';
import {MultilineChartDataModel} from '../../models/multiline-chart-data.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  multiLineData: MultilineChartDataModel[] = [
    {
      name: 'New Cases',
      series: [
        {
          name: '2010',
          value: 7300,
        },
        {
          name: '2011',
          value: 8940,
        },
      ],
    },
    {
      name: 'Recovered Cases',
      series: [
        {
          name: '2010',
          value: 7870,
        },
        {
          name: '2011',
          value: 8270,
        },
      ],
    },
    {
      name: 'Deaths',
      series: [
        {
          name: '2010',
          value: 5002,
        },
        {
          name: '2011',
          value: 5800,
        },
      ],
    },
  ];

  selectedCountry: string;
  formattedPrefix: string;

  constructor(public dataStore: DataStoreService,
              private dataAssignment: DataAssignmentService,
              public translate: TranslateService,
              private activatedRoute: ActivatedRoute,
              private dataTransforming: DataTransformingService,
              public gtag: Gtag) {

    if (translate.langs.length === 0) {
      translate.addLangs(['en']);
      translate.setDefaultLang('en');
      this.dataStore.selectedLanguage = 'en';
      translate.use(this.dataStore.selectedLanguage);
    } else {
      translate.use(translate.currentLang);
      this.dataStore.selectedLanguage = translate.currentLang;
    }

    this.selectedCountry = this.activatedRoute.snapshot.paramMap.get('country');
    this.formattedPrefix = this.dataTransforming.getFirstLetterCapitalizedString(this.selectedCountry) + ' ';
  }
  
  ngOnInit(): void {
  }
}
