import { Component, Input, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() header: string;
  @Input() icon: string;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar() {
    this.snackBar.open('This is a simple dashboard primarily for personal use of a South African citizen.', 'Close', {
      duration: 8000,
    });
  }
}
