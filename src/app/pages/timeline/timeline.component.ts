import { Component, OnInit } from '@angular/core';
import {DataStoreService} from '../../services/data-store/data-store.service';
import {DataAssignmentService} from '../../services/data-assignment/data-assignment.service';
import {TranslateService} from '@ngx-translate/core';
import {Gtag} from 'angular-gtag';
import {ActivatedRoute} from '@angular/router';
import {DataTransformingService} from '../../services/data-transforming/data-transforming.service';
import {MultilineChartDataModel} from '../../models/multiline-chart-data.model';
import {GlobalTimeSeriesModel} from '../../models/global-timeSeries.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  selectedCountryData;
  loaded = false;
  multiLineData: MultilineChartDataModel[] = [
    {
      name: 'New Cases',
      series: [],
    },
    {
      name: 'Recovered Cases',
      series: [],
    },
    {
      name: 'Deaths',
      series: [],
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

    if (this.dataStore.timelineDataCopy.length === 0) {
      this.dataAssignment.getTimelineData();
    }

    this.assignDataToGraph();
  }

  assignDataToGraph() {
    if (this.dataStore.timelineDataCopy.length === 0) {
      this.dataStore.getTimelineData().subscribe(x => {
        this.mapData(x);
      });
    } else {
      this.mapData(this.dataStore.timelineDataCopy);
    }
  }

  mapData(countries: GlobalTimeSeriesModel[]) {
    countries.forEach(x => {
      if (x.country === this.selectedCountry) {
        this.selectedCountryData = x;
      }
    });

    for (const key in this.selectedCountryData.timeline.cases) {
      this.multiLineData[0].series.push({ name: key, value: this.selectedCountryData.timeline.cases[key] });
    }
    for (const key in this.selectedCountryData.timeline.recovered) {
      this.multiLineData[1].series.push({ name: key, value: this.selectedCountryData.timeline.recovered[key] });
    }
    for (const key in this.selectedCountryData.timeline.deaths) {
      this.multiLineData[2].series.push({ name: key, value: this.selectedCountryData.timeline.deaths[key] });
    }

    this.loaded = true;
  }

  ngOnInit(): void {
  }
}
