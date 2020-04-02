import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../services/data-store/data-store.service';
import { DataAssignmentService } from '../../services/data-assignment/data-assignment.service';

@Component({
  selector: 'app-all-stats-table',
  templateUrl: './all-stats-table.component.html',
  styleUrls: ['./all-stats-table.component.scss']
})
export class AllStatsTableComponent implements OnInit {

  displayedColumns: string[] = ['Number', 'Country', 'TotalCases', 'TotalDeaths', 'TotalRecovered', 'TotalActive'];

  constructor(public dataStore: DataStoreService,
              private dataAssignment: DataAssignmentService) {
    setInterval(() => {
      this.dataAssignment.getTablesData();
    }, this.dataStore.updateInterval * 60 * 1000);
  }

  ngOnInit() {
    if (!this.dataStore.isTableLoaded) {
      this.dataAssignment.getTablesData();
    }
  }

}
