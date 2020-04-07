import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { DataStoreService } from '../../../services/data-store/data-store.service';

@Component({
  selector: 'app-stats-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss'],
})
export class DashboardTableComponent implements OnInit {
  displayedColumns: string[] = [
    'Number',
    'country',
    'cases',
    'active',
    'deaths',
    'recovered',
    'todayCases',
    'todayDeaths',
    'critical',
  ];

  dataSource;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public dataStore: DataStoreService) {
    if (this.dataStore.showTopTen) {
      this.dataSource = new MatTableDataSource(this.dataStore.topTenLocations);
    } else {
      this.dataSource = new MatTableDataSource(this.dataStore.locations);
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}
