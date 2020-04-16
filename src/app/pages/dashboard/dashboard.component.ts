import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../services/data-store/data-store.service';
import { Gtag } from 'angular-gtag';
import { SnackBarNotificationService } from '../../services/snack-bar-notification/snack-bar-notification.service';
import { DataLoadService } from '../../services/data-load/data-load.service';
import { LanguageService } from '../../services/language/language.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, COUNTRIES, GLOBAL_STATS } from '../../store/app.reducer';
import { GlobalStatsReducer } from '../../store/global-stats/global-stats.reducer';
import { CountriesReducer } from '../../store/countries/countries.reducer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  globalStats$: Observable<GlobalStatsReducer> = this.store.select(
    GLOBAL_STATS
  );
  countries$: Observable<CountriesReducer> = this.store.select(COUNTRIES);

  constructor(
    public dataStore: DataStoreService,
    private dataLoad: DataLoadService,
    public snackBar: SnackBarNotificationService,
    public gtag: Gtag,
    private language: LanguageService,
    public store: Store<AppState>
  ) {
    this.language.loadTranslationService();
    this.dataStore.showTopTen = true;

    if (!this.dataStore.isFeatureSnackbarShown) {
      this.snackBar.newFeatures();
      this.dataStore.isFeatureSnackbarShown = true;
    }
  }

  ngOnInit(): void {
    this.dataLoad.loadData();
  }
}
