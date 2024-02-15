import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxProductDetailsComponent } from './bx-product-details.component';

describe('BxProductDetailsComponent', () => {
  let component: BxProductDetailsComponent;
  let fixture: ComponentFixture<BxProductDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxProductDetailsComponent]
    });
    fixture = TestBed.createComponent(BxProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
