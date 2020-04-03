import {Component, Input, OnInit} from '@angular/core';
import {SouthAfricaCasesDetailsModel} from '../../../models/south-africa-cases-details.model';

@Component({
  selector: 'app-sa-table',
  templateUrl: './sa-table.component.html',
  styleUrls: ['./sa-table.component.scss']
})
export class SaTableComponent implements OnInit {

  displayedColumns: string[] = ['Number', 'Province', 'TotalCases'];

  @Input() tableDataSource: SouthAfricaCasesDetailsModel[] = [];
  @Input() loadstate: boolean;
  constructor() { }

  ngOnInit() {
  }

}
