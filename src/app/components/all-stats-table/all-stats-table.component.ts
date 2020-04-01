import { Component, OnInit } from '@angular/core';
import {SnackBarNotificationService} from '../../services/snack-bar-notification/snack-bar-notification.service';
import {DataRetrievalService} from '../../services/data-retrieval/data-retrieval.service';
import {DataTransformingService} from '../../services/data-transforming/data-transforming.service';
import {DataStoreService} from '../../services/data-store/data-store.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-all-stats-table',
  templateUrl: './all-stats-table.component.html',
  styleUrls: ['./all-stats-table.component.scss']
})
export class AllStatsTableComponent implements OnInit {

  displayedColumns: string[] = ['Number', 'Country', 'TotalCases', 'TotalDeaths', 'TotalRecovered'];

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
    this.subscription = this.dataRetrieval.getTotalsData().subscribe(retrievedData => {
      this.dataStore.rawData = {...retrievedData};
      this.checkRecoveryDataIssue();
      this.dataStore.southAfrica = this.dataTransforming.retrieveSouthAfricaFromLocations(retrievedData.locations);
      this.dataStore.topTenLocations = [...this.dataStore.Locations].splice(0, 10);
      this.dataStore.isDataAssigned = true;
      this.dataStore.isTableLoaded = true;
    });
  }

  private checkRecoveryDataIssue() {
    if (this.dataStore.rawData.recovered === 0 && !this.dataStore.wasRecoveryIssueShown) {
      this.snackBar.openZeroRecoveriesIssue();
      this.dataStore.wasRecoveryIssueShown = true;
    }
  }

  ngOnInit() {
    if (!this.dataStore.isDataAssigned) {
      this.getInitialData();
    }
  }

}
