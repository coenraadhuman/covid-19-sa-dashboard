import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../services/data-store/data-store.service';
import { DataAssignmentService } from '../../services/data-assignment/data-assignment.service';
import { Gtag } from 'angular-gtag';
import { DataLoadService } from '../../services/data-load/data-load.service';
import { LanguageService } from '../../services/language/language.service';
import { AppState, COUNTRIES } from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CountriesReducer } from '../../store/countries/countries.reducer';

@Component({
  selector: 'app-all-stats-table',
  templateUrl: './all-stats-table.component.html',
  styleUrls: ['./all-stats-table.component.scss'],
})
export class AllStatsTableComponent implements OnInit {
  countries$: Observable<CountriesReducer> = this.store.select(COUNTRIES);

  constructor(
    public store: Store<AppState>,
    public dataStore: DataStoreService,
    private dataAssignment: DataAssignmentService,
    public dataLoad: DataLoadService,
    public gtag: Gtag,
    private language: LanguageService
  ) {
    this.language.loadTranslationService();
    this.dataStore.showTopTen = false;
  }

  ngOnInit() {
    this.dataLoad.loadData();
  }
}
