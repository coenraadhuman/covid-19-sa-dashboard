import { TestBed } from '@angular/core/testing';

import { SnackBarNotificationService } from './snack-bar-notification.service';

describe('SnackBarNotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SnackBarNotificationService = TestBed.get(
      SnackBarNotificationService
    );
    expect(service).toBeTruthy();
  });
});
