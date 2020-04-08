import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../services/data-store/data-store.service';
import { DataAssignmentService } from '../../services/data-assignment/data-assignment.service';
import { Gtag } from 'angular-gtag';
import { DataLoadService } from '../../services/data-load/data-load.service';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-all-stats-table',
  templateUrl: './all-stats-table.component.html',
  styleUrls: ['./all-stats-table.component.scss'],
})
export class AllStatsTableComponent implements OnInit {
  constructor(
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
