import { TestBed } from '@angular/core/testing';
import { DataTransformingService } from '../data-transforming/data-transforming.service';
import { DataStoreService } from './data-store.service';

describe('DataStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataStoreService = TestBed.get(DataStoreService);
    expect(service).toBeTruthy();
  });
});
