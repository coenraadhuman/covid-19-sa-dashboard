import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../services/data-store/data-store.service';
import { DataAssignmentService } from '../../services/data-assignment/data-assignment.service';
import { TranslateService } from '@ngx-translate/core';
import { Gtag } from 'angular-gtag';
import { SnackBarNotificationService } from '../../services/snack-bar-notification/snack-bar-notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['Number', 'Province', 'TotalCases'];

  constructor(
    public dataStore: DataStoreService,
    private dataAssignment: DataAssignmentService,
    public translate: TranslateService,
    public snackBar: SnackBarNotificationService,
    public gtag: Gtag
  ) {
    this.dataStore.showTopTen = true;

    if (translate.langs.length === 0) {
      translate.addLangs(['en']);
      translate.setDefaultLang('en');
      this.dataStore.selectedLanguage = 'en';
      translate.use(this.dataStore.selectedLanguage);
    } else {
      translate.use(translate.currentLang);
      this.dataStore.selectedLanguage = translate.currentLang;
    }

    this.snackBar.newFeatures();
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
