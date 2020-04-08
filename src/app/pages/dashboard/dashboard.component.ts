import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../services/data-store/data-store.service';
import { Gtag } from 'angular-gtag';
import { SnackBarNotificationService } from '../../services/snack-bar-notification/snack-bar-notification.service';
import { DataLoadService } from '../../services/data-load/data-load.service';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    public dataStore: DataStoreService,
    private dataLoad: DataLoadService,
    public snackBar: SnackBarNotificationService,
    public gtag: Gtag,
    private language: LanguageService
  ) {
    this.language.loadTranslationService();
    this.dataStore.showTopTen = true;
    this.snackBar.newFeatures();
  }

  ngOnInit(): void {
    this.dataLoad.loadData();
  }
}
