import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataStoreService } from '../data-store/data-store.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(
    public translate: TranslateService,
    private dataStore: DataStoreService
  ) {}

  public loadTranslationService() {
    if (this.translate.langs.length === 0) {
      this.translate.addLangs(['en', 'af']);
      this.translate.setDefaultLang('en');
      this.dataStore.selectedLanguage = 'en';
      this.activateEnglish();
    } else {
      this.translate.use(this.translate.currentLang);
      this.dataStore.selectedLanguage = this.translate.currentLang;
    }
  }

  public getTranslation(jsonProperty: string): Observable<string> {
    return this.translate.get(jsonProperty);
  }

  public activateEnglish() {
    this.translate.use('en');
    this.dataStore.timelineLegendCases = 'Total Cases';
    this.dataStore.timelineLegendDeaths = 'Total Deaths';
    this.dataStore.timelineLegendRecovered = 'Total Recovered';
  }

  public activateAfrikaans() {
    this.translate.use('af');
    this.dataStore.timelineLegendCases = 'Totale Gevalle';
    this.dataStore.timelineLegendDeaths = 'Totale Sterftes';
    this.dataStore.timelineLegendRecovered = 'Totale Genesings';
  }

  public activateZulu() {
    this.translate.use('zu');
    this.dataStore.timelineLegendCases = 'Total Cases';
    this.dataStore.timelineLegendDeaths = 'Total Recovered';
    this.dataStore.timelineLegendRecovered = 'Total Deaths';
  }
}
