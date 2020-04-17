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
import {
  AppState,
  COUNTRIES,
  GLOBAL_TIME_SERIES,
} from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CountriesReducer } from '../../store/countries/countries.reducer';
import {
  GlobalTimeSeriesReducer,
  globalTimeSeriesReducer,
} from '../../store/global-time-series/global-time-series.reducer';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  selectedCountryData;
  loaded = false;
  isTotalCasesLoaded = false;
  isTotalRecoveredLoaded = false;
  isTotalDeathsLoaded = false;
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
  timeline$: Observable<GlobalTimeSeriesReducer> = this.store.select(
    GLOBAL_TIME_SERIES
  );
  constructor(
    public dataStore: DataStoreService,
    private dataAssignment: DataAssignmentService,
    private activatedRoute: ActivatedRoute,
    private dataTransforming: DataTransformingService,
    private dataLoad: DataLoadService,
    private snackBar: SnackBarNotificationService,
    private store: Store<AppState>,
    public gtag: Gtag,
    private language: LanguageService
  ) {
    this.language.loadTranslationService();

    this.selectedCountry = this.activatedRoute.snapshot.paramMap.get('country');
    this.formattedPrefix = this.selectedCountry + ' ';

    dataLoad.loadData();
    this.store.select(GLOBAL_TIME_SERIES).subscribe((x) => {
      if (x.isLoaded) {
        if (this.selectedCountry === 'Global') {
          this.assignGlobalToGraph();
        } else {
          this.assignDataToGraph();
        }
      }
    });

    language.getTranslation('TABLECOLUMNS.TOTALCASES').subscribe((x) => {
      this.multiLineData[0].name = x;
      this.isTotalCasesLoaded = true;
    });

    language.getTranslation('TABLECOLUMNS.TOTALRECOVERED').subscribe((x) => {
      this.multiLineData[1].name = x;
      this.isTotalRecoveredLoaded = true;
    });

    language.getTranslation('TABLECOLUMNS.TOTALDEATHS').subscribe((x) => {
      this.multiLineData[2].name = x;
      this.isTotalDeathsLoaded = true;
    });
  }

  assignDataToGraph() {
    this.store.select(GLOBAL_TIME_SERIES).subscribe((x) => {
      console.log(x.timelineData);
      this.mapData(x.timelineData);
    });
  }

  assignGlobalToGraph() {
    this.store.select(GLOBAL_TIME_SERIES).subscribe((x) => {
      this.mapDataGlobal(x.globalTimelineData);
    });
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
    console.log(countries);
    countries.forEach((x) => {
      if (x.country === this.selectedCountry) {
        this.selectedCountryData = x;
      }
    });

    console.log(this.selectedCountryData);
    console.log(this.selectedCountry);
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
