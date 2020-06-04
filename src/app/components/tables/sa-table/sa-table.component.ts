import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { AppState, SOUTH_AFRICA_PROVINCE } from '../../../store/app.reducer';
import { Store } from '@ngrx/store';
import { SouthAfricaProvinceTableModel } from '../../../store/south-africa-province/south-africa-province.reducer';

@Component({
  selector: 'app-sa-table',
  templateUrl: './sa-table.component.html',
  styleUrls: ['./sa-table.component.scss'],
})
export class SaTableComponent implements OnInit {
  displayedColumns: string[] = ['Number', 'name', 'totalCases'];

  southAfricaProvinceTableDetails: SouthAfricaProvinceTableModel[] = [
    {
      key: '',
      alternativeName: 'gauteng',
      name: 'Gauteng',
      totalCases: 0,
      totalDeaths: 0,
    },
    {
      key: 'WC',
      alternativeName: 'western_cape',
      name: 'Western Cape',
      totalCases: 0,
      totalDeaths: 0,
    },
    {
      key: 'KZN',
      alternativeName: 'kwazulu_natal',
      name: 'KwaZulu-Natal',
      totalCases: 0,
      totalDeaths: 0,
    },
    {
      key: 'FS',
      alternativeName: 'free_state',
      name: 'Free State',
      totalCases: 0,
      totalDeaths: 0,
    },
    {
      key: 'MP',
      alternativeName: 'mpumlanga',
      name: 'Mpumalanga',
      totalCases: 0,
      totalDeaths: 0,
    },
    {
      key: 'NW',
      alternativeName: 'north_west',
      name: 'North West',
      totalCases: 0,
      totalDeaths: 0,
    },
    {
      key: 'LP',
      alternativeName: 'limpopo',
      name: 'Limpopo',
      totalCases: 0,
      totalDeaths: 0,
    },
    {
      key: 'EC',
      alternativeName: 'eastern_cape',
      name: 'Eastern Cape',
      totalCases: 0,
      totalDeaths: 0,
    },
    {
      key: 'NC',
      alternativeName: 'northern_cape',
      name: 'Northern Cape',
      totalCases: 0,
      totalDeaths: 0,
    },
    {
      key: 'UNK',
      alternativeName: 'unknown',
      name: 'Unknown',
      totalCases: 0,
      totalDeaths: 0,
    },
  ];

  data: SouthAfricaProvinceTableModel[];
  tableDataSource;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public store: Store<AppState>) {
    this.store.select(SOUTH_AFRICA_PROVINCE).subscribe((x) => {
      if (x.isDeathDetailsLoaded && x.isProvinceDetailsLoaded) {
        const sortData = [...x.southAfricaProvinceDetails].sort(
          (a, b) =>
            (b.provinces.gauteng === '' ? 0 : Number(b.provinces.gauteng)) -
            (a.provinces.gauteng === '' ? 0 : Number(a.provinces.gauteng))
        );
        this.southAfricaProvinceTableDetails[0].totalCases = Number(
          sortData[0].provinces.gauteng
        );
        this.southAfricaProvinceTableDetails[1].totalCases = Number(
          sortData[0].provinces.western_cape
        );
        this.southAfricaProvinceTableDetails[2].totalCases = Number(
          sortData[0].provinces.kwazulu_natal
        );
        this.southAfricaProvinceTableDetails[3].totalCases = Number(
          sortData[0].provinces.free_state
        );
        this.southAfricaProvinceTableDetails[4].totalCases = Number(
          sortData[0].provinces.mpumlanga
        );
        this.southAfricaProvinceTableDetails[5].totalCases = Number(
          sortData[0].provinces.north_west
        );
        this.southAfricaProvinceTableDetails[6].totalCases = Number(
          sortData[0].provinces.limpopo
        );
        this.southAfricaProvinceTableDetails[7].totalCases = Number(
          sortData[0].provinces.eastern_cape
        );
        this.southAfricaProvinceTableDetails[8].totalCases = Number(
          sortData[0].provinces.northern_cape
        );
        this.southAfricaProvinceTableDetails[9].totalCases = Number(
          sortData[0].provinces.unknown
        );

        x.southAfricaDeathDetails.forEach((a) => {
          this.southAfricaProvinceTableDetails.forEach((b) => {
            if (a.province === b.key) {
              b.totalDeaths += 1;
            }
          });
        });

        this.tableDataSource = new MatTableDataSource<
          SouthAfricaProvinceTableModel
        >(
          this.southAfricaProvinceTableDetails.sort(
            (a, b) => b.totalCases - a.totalCases
          )
        );
      }
    });
  }

  ngOnInit() {
    this.tableDataSource.sort = this.sort;
  }

  getTotalDeaths(): number {
    let total = 0;
    this.southAfricaProvinceTableDetails.forEach((x) => {
      total += x.totalDeaths;
    });
    return total;
  }

  getTotalCases(): number {
    let total = 0;
    this.southAfricaProvinceTableDetails.forEach((x) => {
      total += x.totalCases;
    });
    return total;
  }
}
