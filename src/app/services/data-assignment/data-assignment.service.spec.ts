import { TestBed } from '@angular/core/testing';

import { DataAssignmentService } from './data-assignment.service';

describe('DataAssignmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataAssignmentService = TestBed.get(DataAssignmentService);
    expect(service).toBeTruthy();
  });
});
