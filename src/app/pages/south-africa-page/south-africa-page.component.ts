import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../services/data-store/data-store.service';
import { Gtag } from 'angular-gtag';
import { DataLoadService } from '../../services/data-load/data-load.service';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-south-africa-page',
  templateUrl: './south-africa-page.component.html',
  styleUrls: ['./south-africa-page.component.scss'],
})
export class SouthAfricaPageComponent implements OnInit {
  constructor(
    private dataStore: DataStoreService,
    private dataLoad: DataLoadService,
    public gtag: Gtag,
    private language: LanguageService
  ) {
    this.language.loadTranslationService();
  }

  ngOnInit() {
    this.dataLoad.loadData();
  }
}
