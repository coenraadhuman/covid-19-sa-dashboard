import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStatsTableComponent } from './all-stats-table.component';

describe('AllStatsTableComponent', () => {
  let component: AllStatsTableComponent;
  let fixture: ComponentFixture<AllStatsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllStatsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStatsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
