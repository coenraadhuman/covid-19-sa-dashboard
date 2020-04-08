import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../services/data-store/data-store.service';
import { DataAssignmentService } from '../../services/data-assignment/data-assignment.service';
import { TranslateService } from '@ngx-translate/core';
import { Gtag } from 'angular-gtag';
import { DataLoadService } from '../../services/data-load/data-load.service';

@Component({
  selector: 'app-all-stats-table',
  templateUrl: './all-stats-table.component.html',
  styleUrls: ['./all-stats-table.component.scss'],
})
export class AllStatsTableComponent implements OnInit {
  displayedColumns: string[] = [
    'Number',
    'Country',
    'TotalCases',
    'TotalActive',
    'TotalDeaths',
    'TotalRecovered',
    'CasesToday',
    'DeathsToday',
    'CriticalCondition',
  ];

  constructor(
    public dataStore: DataStoreService,
    private dataAssignment: DataAssignmentService,
    public translate: TranslateService,
    public dataLoad: DataLoadService,
    public gtag: Gtag
  ) {
    this.dataStore.showTopTen = false;

    if (translate.langs.length === 0) {
      translate.addLangs(['en']);
      translate.setDefaultLang('en');
      this.dataStore.selectedLanguage = 'en';
      translate.use(this.dataStore.selectedLanguage);
    } else {
      translate.use(translate.currentLang);
      this.dataStore.selectedLanguage = translate.currentLang;
    }
  }

  ngOnInit() {
    this.dataLoad.loadData();
  }
}
