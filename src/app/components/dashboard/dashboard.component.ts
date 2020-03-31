import { Component, OnInit } from '@angular/core';
import { SnackBarNotificationService } from '../../services/snack-bar-notification/snack-bar-notification.service';
import { DataRetrievalService } from '../../services/data-retrieval/data-retrieval.service';
import { DataTransformingService } from '../../services/data-transforming/data-transforming.service';
import { Subscription } from 'rxjs';
import { DataStoreService } from '../../services/data-store/data-store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  private subscription: Subscription;

  constructor(public snackBar: SnackBarNotificationService,
              private dataRetrieval: DataRetrievalService,
              private dataTransforming: DataTransformingService,
              public dataStore: DataStoreService) {
    setInterval(() => {
      this.getInitialData();
    }, this.dataStore.updateInterval * 60 * 1000);
  }

  private getInitialData() {
    this.subscription = this.dataRetrieval.getLocationsData().subscribe(retrievedData => {
      this.dataStore.rawData = {...retrievedData};
      this.checkRecoveryDataIssue();
      this.dataStore.southAfrica = this.dataTransforming.retrieveSouthAfricaFromLocations(retrievedData.locations);
      this.dataStore.aggregatedLocations = this.dataTransforming.aggregateLocationsData(retrievedData.locations);
      this.dataStore.topTenLocations = [...this.dataStore.aggregatedLocations].splice(0, 10);
      this.dataStore.isDataAssigned = true;
      this.dataStore.isTableLoaded = true;
    });
  }

  private checkRecoveryDataIssue() {
    if (this.dataStore.rawData.latest.recovered === 0 && !this.dataStore.wasRecoveryIssueShown) {
      this.snackBar.openZeroRecoveriesIssue();
      this.dataStore.wasRecoveryIssueShown = true;
    }
  }

  ngOnInit(): void {
    if (!this.dataStore.isDataAssigned) {
      this.getInitialData();
    }
  }
}
