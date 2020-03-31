import { TestBed } from '@angular/core/testing';

import { DataRetrievalService } from './data-retrieval.service';

describe('DataRetrievalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataRetrievalService = TestBed.get(DataRetrievalService);
    expect(service).toBeTruthy();
  });
});
