import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomIconAnchorMenuButtonComponent } from './custom-icon-anchor-menu-button.component';

describe('CustomIconAnchorMenuButtonComponent', () => {
  let component: CustomIconAnchorMenuButtonComponent;
  let fixture: ComponentFixture<CustomIconAnchorMenuButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomIconAnchorMenuButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomIconAnchorMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
