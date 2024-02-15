import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxProductListComponent } from './bx-product-list.component';

describe('BxProductListComponent', () => {
  let component: BxProductListComponent;
  let fixture: ComponentFixture<BxProductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxProductListComponent]
    });
    fixture = TestBed.createComponent(BxProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
