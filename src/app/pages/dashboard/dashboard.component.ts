import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../services/data-store/data-store.service';
import {DataAssignmentService} from '../../services/data-assignment/data-assignment.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['Number', 'Province', 'TotalCases'];

  constructor(public dataStore: DataStoreService,
              private dataAssignment: DataAssignmentService,
              public translate: TranslateService) {

    if (translate.langs.length === 0) {
      translate.addLangs(['en']);
    }
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use('en');

    setInterval(() => {
      this.dataAssignment.getTotalsData();
      this.dataAssignment.getSouthAfricaCaseDetailsData();
      this.dataAssignment.getTablesData();
    }, this.dataStore.updateInterval * 60 * 1000);
  }

  ngOnInit(): void {
    if (!this.dataStore.isOverviewLoaded) {
      this.dataAssignment.getTotalsData();
    }

    if (!this.dataStore.isCaseDetailsLoaded) {
      this.dataAssignment.getSouthAfricaCaseDetailsData();
    }

    if (!this.dataStore.isTableLoaded) {
      this.dataAssignment.getTablesData();
    }
  }
}
