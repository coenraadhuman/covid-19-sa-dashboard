import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthAfricaPageComponent } from './south-africa-page.component';

describe('SouthAfricaPageComponent', () => {
  let component: SouthAfricaPageComponent;
  let fixture: ComponentFixture<SouthAfricaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SouthAfricaPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthAfricaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
