import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorMenuButtonComponent } from './anchor-menu-button.component';

describe('AnchorMenuButtonComponent', () => {
  let component: AnchorMenuButtonComponent;
  let fixture: ComponentFixture<AnchorMenuButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnchorMenuButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnchorMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
