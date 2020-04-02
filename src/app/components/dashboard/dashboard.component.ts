import { Component, OnInit } from '@angular/core';
import { SnackBarNotificationService } from '../../services/snack-bar-notification/snack-bar-notification.service';
import { DataRetrievalService } from '../../services/data-retrieval/data-retrieval.service';
import { DataTransformingService } from '../../services/data-transforming/data-transforming.service';
import { Subscription } from 'rxjs';
import { DataStoreService } from '../../services/data-store/data-store.service';
import {DataAssignmentService} from '../../services/data-assignment/data-assignment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  constructor(public dataStore: DataStoreService,
              private dataAssignment: DataAssignmentService) {
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
