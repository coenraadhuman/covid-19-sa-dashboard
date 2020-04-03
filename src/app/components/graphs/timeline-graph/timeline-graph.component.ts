import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-timeline-graph',
  templateUrl: './timeline-graph.component.html',
  styleUrls: ['./timeline-graph.component.scss']
})
export class TimelineGraphComponent implements OnInit {
  @Input() title: string;
  @Input() uri: string;

  constructor() { }

  ngOnInit() {
  }

}
