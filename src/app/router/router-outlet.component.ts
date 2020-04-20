import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './router-outlet.component.html',
  styleUrls: ['./router-outlet.component.scss'],
})
export class RouterOutletComponent implements OnInit {
  public header = 'COVID-19 Pandemic';

  constructor() {}

  ngOnInit() {}
}
