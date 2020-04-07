import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-anchor-menu-button',
  templateUrl: './icon-anchor-menu-button.component.html',
  styleUrls: ['./icon-anchor-menu-button.component.scss'],
})
export class IconAnchorMenuButtonComponent {
  @Input() name: string;
  @Input() link: string;
  @Input() iconName: string;

  constructor() {}
}
