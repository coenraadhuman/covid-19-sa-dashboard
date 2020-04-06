import { Component, OnInit } from '@angular/core';
import {DataStoreService} from '../../services/data-store/data-store.service';
import {DataAssignmentService} from '../../services/data-assignment/data-assignment.service';
import {TranslateService} from '@ngx-translate/core';
import {Gtag} from 'angular-gtag';
import {ActivatedRoute} from '@angular/router';
import {DataTransformingService} from '../../services/data-transforming/data-transforming.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  selectedCountry: string;
  formattedPrefix: string;

  constructor(public dataStore: DataStoreService,
              private dataAssignment: DataAssignmentService,
              public translate: TranslateService,
              private activatedRoute: ActivatedRoute,
              private dataTransforming: DataTransformingService,
              public gtag: Gtag) {

    if (translate.langs.length === 0) {
      translate.addLangs(['en']);
      translate.setDefaultLang('en');
      this.dataStore.selectedLanguage = 'en';
      translate.use(this.dataStore.selectedLanguage);
    } else {
      translate.use(translate.currentLang);
      this.dataStore.selectedLanguage = translate.currentLang;
    }

    this.selectedCountry = this.activatedRoute.snapshot.paramMap.get('country');
    this.formattedPrefix = this.dataTransforming.getFirstLetterCapitalizedString(this.selectedCountry) + ' ';
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
