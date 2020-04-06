import { Component, OnInit } from '@angular/core';
import {DataStoreService} from '../../services/data-store/data-store.service';
import {DataAssignmentService} from '../../services/data-assignment/data-assignment.service';
import {TranslateService} from '@ngx-translate/core';
import {Gtag} from 'angular-gtag';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  displayedColumns: string[] = ['Number', 'Province', 'TotalCases'];

  constructor(public dataStore: DataStoreService,
              private dataAssignment: DataAssignmentService,
              public translate: TranslateService,
              private activatedRoute: ActivatedRoute,
              public gtag: Gtag) {

    if (translate.langs.length === 0) {
      translate.addLangs(['en']);
    }
    translate.setDefaultLang('en');

    translate.use('en');

    console.log(this.activatedRoute.snapshot.paramMap.get('country'));
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
