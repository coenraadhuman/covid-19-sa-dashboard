import { TestBed } from '@angular/core/testing';

import { SnackBarNotificationService } from './snack-bar-notification.service';
import { MatSnackBarModule } from '@angular/material';
import { LanguageService } from '../language/language.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../../app.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SnackBarNotificationService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [LanguageService],
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClientTestingModule],
          },
        }),
      ],
    })
  );

  it('should be created', () => {
    const service: SnackBarNotificationService = TestBed.get(
      SnackBarNotificationService
    );
    expect(service).toBeTruthy();
  });
});
