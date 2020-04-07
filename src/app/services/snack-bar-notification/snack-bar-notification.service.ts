import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root',
})
export class SnackBarNotificationService {
  constructor(private snackBar: MatSnackBar) {}

  private openSnackBar(message: string, durationMilliseconds: number) {
    this.snackBar.open(message, 'Close', { duration: durationMilliseconds });
  }

  public newFeatures() {
    this.openSnackBar(
      'New Features: we have smart tables, sort them by clicking the column header. ' +
        'Timeline graphs are added, just click a country name to view it.',
      8000
    );
  }

  public openAbout() {
    this.openSnackBar(
      'This is a simple COVID-19 tracker dashboard primarily for personal use by a South African citizen. If you can buy us a coffee :)',
      8000
    );
  }
}
