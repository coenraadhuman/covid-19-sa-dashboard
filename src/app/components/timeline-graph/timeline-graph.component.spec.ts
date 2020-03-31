import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineGraphComponent } from './timeline-graph.component';

describe('TimelineGraphComponent', () => {
  let component: TimelineGraphComponent;
  let fixture: ComponentFixture<TimelineGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
