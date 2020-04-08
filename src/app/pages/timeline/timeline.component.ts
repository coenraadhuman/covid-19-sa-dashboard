import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../services/data-store/data-store.service';
import { DataAssignmentService } from '../../services/data-assignment/data-assignment.service';
import { TranslateService } from '@ngx-translate/core';
import { Gtag } from 'angular-gtag';
import { ActivatedRoute } from '@angular/router';
import { DataTransformingService } from '../../services/data-transforming/data-transforming.service';
import {
  MultilineChartDataModel,
  MultilineChartTimelineSeriesData,
} from '../../models/multiline-chart-data.model';
import {
  GlobalTimeSeriesModel,
  Timeline,
} from '../../models/global-timeSeries.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  selectedCountryData;
  loaded = false;
  multiLineData: MultilineChartDataModel[] = [
    {
      name: 'Total Cases',
      series: [],
    },
    {
      name: 'Total Recovered',
      series: [],
    },
    {
      name: 'Total Deaths',
      series: [],
    },
  ];

  selectedCountry: string;
  formattedPrefix: string;

  constructor(
    public dataStore: DataStoreService,
    private dataAssignment: DataAssignmentService,
    public translate: TranslateService,
    private activatedRoute: ActivatedRoute,
    private dataTransforming: DataTransformingService,
    public gtag: Gtag
  ) {
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
    this.formattedPrefix = this.selectedCountry + ' ';

    if (!this.dataStore.isGlobalTimelineDataRetrieved) {
      this.dataAssignment.getGlobalData();
    }

    if (this.dataStore.timelineDataCopy.length === 0) {
      this.dataAssignment.getTimelineData();
    }

    if (this.selectedCountry === 'Global') {
      this.dataStore.getGlobalTimelineData().subscribe((x) => {
        this.selectedCountryData = x;

        this.multiLineData[0].series = this.addToMultilineChartTimelineSeriesDataArray(
          x.timeline.cases
        );
        this.multiLineData[1].series = this.addToMultilineChartTimelineSeriesDataArray(
          x.timeline.recovered
        );
        this.multiLineData[2].series = this.addToMultilineChartTimelineSeriesDataArray(
          x.timeline.deaths
        );

        this.loaded = true;
      });
    } else {
      this.assignDataToGraph();
    }
  }

  assignDataToGraph() {
    if (this.dataStore.timelineDataCopy.length === 0) {
      this.dataStore.getTimelineData().subscribe((x) => {
        this.mapData(x);
      });
    } else {
      this.mapData(this.dataStore.timelineDataCopy);
    }
  }

  mapData(countries: GlobalTimeSeriesModel[]) {
    countries.forEach((x) => {
      if (x.country === this.selectedCountry) {
        this.selectedCountryData = x;
      }
    });

    this.multiLineData[0].series = this.addToMultilineChartTimelineSeriesDataArray(
      this.selectedCountryData.timeline.cases
    );
    this.multiLineData[1].series = this.addToMultilineChartTimelineSeriesDataArray(
      this.selectedCountryData.timeline.recovered
    );
    this.multiLineData[2].series = this.addToMultilineChartTimelineSeriesDataArray(
      this.selectedCountryData.timeline.deaths
    );

    this.loaded = true;
  }

  addToMultilineChartTimelineSeriesDataArray(
    timeline: Timeline
  ): MultilineChartTimelineSeriesData[] {
    const arr = [] as MultilineChartTimelineSeriesData[];
    for (const key in timeline) {
      if (timeline.hasOwnProperty(key)) {
        arr.push({
          name: key,
          value: timeline[key],
        });
      }
    }
    return arr;
  }

  ngOnInit(): void {}
}
