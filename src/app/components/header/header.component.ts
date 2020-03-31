import { Component, Input, OnInit} from '@angular/core';
import { SnackBarNotificationService } from '../../services/snack-bar-notification/snack-bar-notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() header: string;
  @Input() icon: string;

  constructor(public snackBar: SnackBarNotificationService) { }

  ngOnInit() {
  }
}
