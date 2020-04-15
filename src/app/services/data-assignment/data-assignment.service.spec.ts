import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataRetrievalService } from '../data-retrieval/data-retrieval.service';
import { DataStoreService } from '../data-store/data-store.service';
import { DataTransformingService } from '../data-transforming/data-transforming.service';
import { DataAssignmentService } from './data-assignment.service';

describe('DataAssignmentService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        DataStoreService,
        DataRetrievalService,
        DataTransformingService,
      ],
    })
  );

  it('should be created', () => {
    const service: DataAssignmentService = TestBed.get(DataAssignmentService);
    expect(service).toBeTruthy();
  });
});
