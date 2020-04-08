import { Component, Input, OnInit } from '@angular/core';
import { SnackBarNotificationService } from '../../../services/snack-bar-notification/snack-bar-notification.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() header: string;
  @Input() icon: string;

  constructor(
    public snackBar: SnackBarNotificationService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public translate: TranslateService
  ) {
    if (translate.langs.length === 0) {
      translate.addLangs(['en']);
    }
    translate.setDefaultLang('en');

    translate.use('en');

    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/github-small.svg'
      )
    );
  }

  ngOnInit() {}
}
