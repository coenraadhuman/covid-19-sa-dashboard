import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataStoreService {
  public showTopTen = true;

  public selectedLanguage: string;

  public isFeatureSnackbarShown = false;

  constructor() {}
}
