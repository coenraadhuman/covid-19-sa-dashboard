import { Component, Input, OnInit } from '@angular/core';
import { ProvinceCount } from '../../../models/south-africa-cases-details.model';

@Component({
  selector: 'app-sa-table',
  templateUrl: './sa-table.component.html',
  styleUrls: ['./sa-table.component.scss'],
})
export class SaTableComponent implements OnInit {
  displayedColumns: string[] = ['Number', 'Province', 'TotalCases'];

  @Input() tableDataSource: ProvinceCount[] = [];
  @Input() loadstate: boolean;
  constructor() {}

  ngOnInit() {}
}
