import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { SouthAfricaProvinceTableModel } from '../../../models/south-africa-province-table.model';
import { AppState, SOUTH_AFRICA_PROVINCE_ } from '../../../store/app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-sa-table',
  templateUrl: './sa-table.component.html',
  styleUrls: ['./sa-table.component.scss'],
})
export class SaTableComponent implements OnInit {
  displayedColumns: string[] = ['Number', 'name', 'totalCases', 'totalDeaths'];

  data: SouthAfricaProvinceTableModel[];
  tableDataSource;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public store: Store<AppState>) {
    this.store.select(SOUTH_AFRICA_PROVINCE_).subscribe((x) => {
      if (x.isDeathDetailsLoaded && x.isProvinceDetailsLoaded) {
        this.data = x.southAfricaProvinceTableDetails;
        this.tableDataSource = new MatTableDataSource<
          SouthAfricaProvinceTableModel
        >(this.data.sort((a, b) => b.totalCases - a.totalCases));
      }
    });
  }

  ngOnInit() {
    this.tableDataSource.sort = this.sort;
  }

  getTotalDeaths(): number {
    let total = 0;
    this.data.forEach((x) => {
      total += x.totalDeaths;
    });
    return total;
  }

  getTotalCases(): number {
    let total = 0;
    this.data.forEach((x) => {
      total += x.totalCases;
    });
    return total;
  }
}
