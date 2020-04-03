import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../services/data-store/data-store.service';
import { DataAssignmentService } from '../../services/data-assignment/data-assignment.service';
import { TranslateService } from '@ngx-translate/core';
import { Gtag } from 'angular-gtag';

@Component({
  selector: 'app-all-stats-table',
  templateUrl: './all-stats-table.component.html',
  styleUrls: ['./all-stats-table.component.scss']
})
export class AllStatsTableComponent implements OnInit {

  displayedColumns: string[] = ['Number', 'Country', 'TotalCases', 'TotalActive', 'TotalDeaths', 'TotalRecovered',
    'CasesToday', 'DeathsToday', 'CriticalCondition'];

  constructor(public dataStore: DataStoreService,
              private dataAssignment: DataAssignmentService,
              public translate: TranslateService,
              public gtag: Gtag) {

    if (translate.langs.length === 0) {
      translate.addLangs(['en']);
    }
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use('en');
    setInterval(() => {
      this.dataAssignment.getTablesData();
    }, this.dataStore.updateInterval * 60 * 1000);
  }

  ngOnInit() {
    if (!this.dataStore.isTableLoaded) {
      this.dataAssignment.getTablesData();
    }
  }

}
