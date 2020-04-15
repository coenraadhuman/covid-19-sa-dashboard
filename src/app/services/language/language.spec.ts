import { TestBed } from '@angular/core/testing';
import { LanguageService } from '../language/language.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../../app.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataStoreService } from '../data-store/data-store.service';

describe('LanguageService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [DataStoreService],
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClientTestingModule],
          },
        }),
      ],
    })
  );

  it('should be created', () => {
    const service: LanguageService = TestBed.get(LanguageService);
    expect(service).toBeTruthy();
  });
});
