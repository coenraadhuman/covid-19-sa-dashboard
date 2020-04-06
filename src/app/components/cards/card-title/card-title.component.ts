import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-title',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.scss']
})
export class CardTitleComponent {

  @Input() prefix = '';
  @Input() postfix = '';
  @Input() translationKey: string;
  constructor() { }

}
