import { TestBed } from '@angular/core/testing';
import { DataLoadService } from './data-load.service';
import { DataStoreService } from '../data-store/data-store.service';
import { DataAssignmentService } from '../data-assignment/data-assignment.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DataLoadService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataStoreService, DataAssignmentService],
    })
  );

  it('should be created', () => {
    const service: DataLoadService = TestBed.get(DataLoadService);
    expect(service).toBeTruthy();
  });
});
