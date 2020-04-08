import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DataStoreService } from '../../../services/data-store/data-store.service';
import { MatSort } from '@angular/material/sort';
import { SouthAfricaProvinceTableModel } from '../../../models/south-africa-province-table.model';

@Component({
  selector: 'app-sa-table',
  templateUrl: './sa-table.component.html',
  styleUrls: ['./sa-table.component.scss'],
})
export class SaTableComponent implements OnInit {
  displayedColumns: string[] = [
    'Number',
    'Province',
    'TotalCases',
    'TotalDeaths',
  ];

  tableDataSource;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dataStore: DataStoreService) {
    this.tableDataSource = new MatTableDataSource<
      SouthAfricaProvinceTableModel
    >(this.dataStore.southAfricaProvinceTableDetails);
  }

  ngOnInit() {
    this.tableDataSource.sort = this.sort;
  }

  getTotalDeaths(): number {
    let total = 0;
    this.dataStore.southAfricaProvinceTableDetails.forEach((x) => {
      total += x.totalDeaths;
    });
    return total;
  }

  getTotalCases(): number {
    let total = 0;
    this.dataStore.southAfricaProvinceTableDetails.forEach((x) => {
      total += x.totalCases;
    });
    return total;
  }
}
