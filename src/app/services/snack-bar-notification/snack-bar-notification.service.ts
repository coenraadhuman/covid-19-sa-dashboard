import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { LanguageService } from '../language/language.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SnackBarNotificationService {
  private subscriptionOne: Subscription;
  private subscriptionTwo: Subscription;
  private subscriptionThree: Subscription;

  constructor(
    private snackBar: MatSnackBar,
    private language: LanguageService
  ) {}

  private openSnackBar(message: string, durationMilliseconds: number) {
    this.snackBar.open(message, 'X', { duration: durationMilliseconds });
  }

  public newFeatures() {
    this.subscriptionOne = this.language
      .getTranslation('SNACKBAR.FEATURES')
      .subscribe((x) => {
        this.openSnackBar(x, 8000);
        this.subscriptionOne.unsubscribe();
      });
  }

  public openAbout() {
    this.subscriptionTwo = this.language
      .getTranslation('SNACKBAR.ABOUT')
      .subscribe((x) => {
        this.openSnackBar(x, 8000);
        this.subscriptionTwo.unsubscribe();
      });
  }

  public unknownCountry() {
    this.subscriptionThree = this.language
      .getTranslation('SNACKBAR.INVALIDCOUNTRY')
      .subscribe((x) => {
        this.openSnackBar(x, 8000);
        this.subscriptionThree.unsubscribe();
      });
  }
}
