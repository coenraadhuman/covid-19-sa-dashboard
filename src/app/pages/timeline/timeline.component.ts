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
import { DataLoadService } from '../../services/data-load/data-load.service';
import { SnackBarNotificationService } from '../../services/snack-bar-notification/snack-bar-notification.service';
import { LanguageService } from '../../services/language/language.service';

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

  selectedCountry = 'unknown';
  formattedPrefix: string;

  constructor(
    public dataStore: DataStoreService,
    private dataAssignment: DataAssignmentService,
    private activatedRoute: ActivatedRoute,
    private dataTransforming: DataTransformingService,
    private dataLoad: DataLoadService,
    private snackBar: SnackBarNotificationService,
    public gtag: Gtag,
    private language: LanguageService
  ) {
    this.language.loadTranslationService();

    this.selectedCountry = this.activatedRoute.snapshot.paramMap.get('country');
    this.formattedPrefix = this.selectedCountry + ' ';

    dataLoad.loadData();

    if (this.selectedCountry === 'Global') {
      this.assignGlobalToGraph();
    } else {
      this.assignDataToGraph();
    }
  }

  assignDataToGraph() {
    if (this.dataStore.timelineDataCopy.length === 0) {
      this.dataAssignment.getTimelineData();
      this.dataStore.getTimelineData().subscribe((x) => {
        this.mapData(x);
      });
    } else {
      this.mapData(this.dataStore.timelineDataCopy);
    }
  }

  assignGlobalToGraph() {
    if (this.dataStore.timelineDataCopy.length === 0) {
      this.dataAssignment.getTimelineData();
      this.dataStore.getGlobalTimelineData().subscribe((x) => {
        this.mapDataGlobal(x);
      });
    } else {
      this.mapDataGlobal(this.dataStore.globalTimelineDataCopy);
    }
  }

  mapDataGlobal(x: GlobalTimeSeriesModel) {
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
  }

  mapData(countries: GlobalTimeSeriesModel[]) {
    countries.forEach((x) => {
      if (x.country === this.selectedCountry) {
        this.selectedCountryData = x;
      }
    });

    if (this.selectedCountry === 'unknown') {
      this.snackBar.unknownCountry();
    } else {
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
