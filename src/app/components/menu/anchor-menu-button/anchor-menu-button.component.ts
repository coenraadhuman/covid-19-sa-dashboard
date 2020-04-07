import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-anchor-menu-button',
  templateUrl: './anchor-menu-button.component.html',
  styleUrls: ['./anchor-menu-button.component.scss'],
})
export class AnchorMenuButtonComponent {
  @Input() name: string;
  @Input() link: string;

  constructor() {}
}
