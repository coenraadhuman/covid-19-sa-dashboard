import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { LanguageService } from '../language/language.service';

@Injectable({
  providedIn: 'root',
})
export class SnackBarNotificationService {
  constructor(
    private snackBar: MatSnackBar,
    private language: LanguageService
  ) {}

  private openSnackBar(message: string, durationMilliseconds: number) {
    this.snackBar.open(message, 'X', { duration: durationMilliseconds });
  }

  public newFeatures() {
    this.language.getTranslation('SNACKBAR.FEATURES').subscribe((x) => {
      this.openSnackBar(x, 8000);
    });
  }

  public openAbout() {
    this.language.getTranslation('SNACKBAR.ABOUT').subscribe((x) => {
      this.openSnackBar(x, 8000);
    });
  }

  public unknownCountry() {
    this.language.getTranslation('SNACKBAR.INVALIDCOUNTRY').subscribe((x) => {
      this.openSnackBar(x, 8000);
    });
  }
}
