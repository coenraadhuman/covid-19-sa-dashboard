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
      this.dataStore.rawData = {...retrievedData.reports[0]};
      this.dataStore.locations = [...retrievedData.reports[0].table[0]];
      this.dataTransforming.addZeroCounts(this.dataStore.locations);
      this.dataStore.southAfrica = this.dataTransforming.retrieveSouthAfricaFromLocations(retrievedData.reports[0].table[0]);
      this.dataStore.topTenLocations = [...retrievedData.reports[0].table[0]].splice(0, 10);
      this.dataStore.isDataAssigned = true;
      this.dataStore.isTableLoaded = true;
    });
  }

  ngOnInit() {
    if (!this.dataStore.isDataAssigned) {
      this.getInitialData();
    }
  }

}
