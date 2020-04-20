import { TestBed } from '@angular/core/testing';

import { DataRetrievalService } from './data-retrieval.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { appReducerMap } from '../../store/app.reducer';
import { StoreModule } from '@ngrx/store';

describe('DataRetrievalService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StoreModule.forRoot(appReducerMap)],
    })
  );

  it('should be created', () => {
    const service: DataRetrievalService = TestBed.get(DataRetrievalService);
    expect(service).toBeTruthy();
  });
});
