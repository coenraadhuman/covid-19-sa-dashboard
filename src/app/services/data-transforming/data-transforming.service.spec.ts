import { TestBed } from '@angular/core/testing';

import { DataTransformingService } from './data-transforming.service';

describe('DataTransformingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataTransformingService = TestBed.get(
      DataTransformingService
    );
    expect(service).toBeTruthy();
  });
});
