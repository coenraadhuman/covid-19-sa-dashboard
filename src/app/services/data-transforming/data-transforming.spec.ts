import { TestBed } from '@angular/core/testing';
import { DataStoreService } from '../data-store/data-store.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataTransformingService } from './data-transforming.service';

describe('DataTransformingService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [DataStoreService],
    })
  );

  it('should be created', () => {
    const service: DataTransformingService = TestBed.get(
      DataTransformingService
    );
    expect(service).toBeTruthy();
  });
});
