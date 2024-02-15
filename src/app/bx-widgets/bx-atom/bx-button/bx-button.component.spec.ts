import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxButtonComponent } from './bx-button.component';

describe('BxButtonComponent', () => {
  let component: BxButtonComponent;
  let fixture: ComponentFixture<BxButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxButtonComponent]
    });
    fixture = TestBed.createComponent(BxButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
