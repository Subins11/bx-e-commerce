import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxCartComponent } from './bx-cart.component';

describe('BxCartComponent', () => {
  let component: BxCartComponent;
  let fixture: ComponentFixture<BxCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxCartComponent]
    });
    fixture = TestBed.createComponent(BxCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
