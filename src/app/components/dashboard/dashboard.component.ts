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
  private subscriptionGlobal: Subscription;

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
      this.dataStore.locations = [...retrievedData.sort((a, b) => b.cases - a.cases)];
      this.dataStore.southAfrica = this.dataTransforming.retrieveSouthAfricaFromLocations(retrievedData);
      this.dataStore.topTenLocations = [...this.dataStore.locations].splice(0, 10);
      this.dataStore.isDataAssigned = true;
      this.dataStore.isTableLoaded = true;
    });

    this.subscriptionGlobal = this.dataRetrieval.getTotalsData().subscribe(retrievedData => {
      this.dataStore.globalStats = retrievedData;
    });
  }

  ngOnInit(): void {
    if (!this.dataStore.isDataAssigned) {
      this.getInitialData();
    }
  }
}
