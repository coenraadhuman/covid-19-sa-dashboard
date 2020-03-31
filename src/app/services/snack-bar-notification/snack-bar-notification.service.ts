import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackBarNotificationService {

  constructor(private snackBar: MatSnackBar) { }

  private openSnackBar(message: string, durationMilliseconds: number) {
    this.snackBar.open(message, 'Close', { duration: durationMilliseconds });
  }

  public openZeroRecoveriesIssue() {
    this.openSnackBar('"JHU (our main data provider) ' +
        'no longer provides data for amount of recoveries, and as a result, ' +
        'the API will be showing 0 for this statistic. Apologies for any inconvenience. ' +
        'Hopefully we\'ll be able to find an alternative data-source that offers this."',
        20000);
  }

  public openAbout() {
    this.openSnackBar('This is a simple dashboard primarily for personal use of a South African citizen.', 8000);
  }
}
