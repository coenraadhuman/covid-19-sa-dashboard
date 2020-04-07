import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconAnchorMenuButtonComponent } from './icon-anchor-menu-button.component';

describe('IconAnchorMenuButtonComponent', () => {
  let component: IconAnchorMenuButtonComponent;
  let fixture: ComponentFixture<IconAnchorMenuButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconAnchorMenuButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconAnchorMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
