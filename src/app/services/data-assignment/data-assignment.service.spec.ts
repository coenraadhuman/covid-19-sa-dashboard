import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataRetrievalService } from '../data-retrieval/data-retrieval.service';
import { DataStoreService } from '../data-store/data-store.service';
import { DataTransformingService } from '../data-transforming/data-transforming.service';
import { DataAssignmentService } from './data-assignment.service';
import { appReducerMap } from '../../store/app.reducer';
import { StoreModule } from '@ngrx/store';

describe('DataAssignmentService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StoreModule.forRoot(appReducerMap)],
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
