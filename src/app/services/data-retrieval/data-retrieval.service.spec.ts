import { TestBed } from '@angular/core/testing';

import { DataRetrievalService } from './data-retrieval.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DataStoreService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
    }));

    it('should be created', () => {
        const service: DataRetrievalService = TestBed.get(DataRetrievalService);
        expect(service).toBeTruthy();
    });
});
