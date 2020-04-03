import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-icon-anchor-menu-button',
  templateUrl: './custom-icon-anchor-menu-button.component.html',
  styleUrls: ['./custom-icon-anchor-menu-button.component.scss']
})
export class CustomIconAnchorMenuButtonComponent {
  @Input() name: string;
  @Input() link: string;
  @Input() iconName: string;

  constructor() { }

}
