import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../services/data-store/data-store.service';
import {DataAssignmentService} from '../../services/data-assignment/data-assignment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['Number', 'Province', 'TotalCases'];

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
