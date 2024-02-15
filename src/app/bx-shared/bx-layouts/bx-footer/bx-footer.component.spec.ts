import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxFooterComponent } from './bx-footer.component';

describe('BxFooterComponent', () => {
  let component: BxFooterComponent;
  let fixture: ComponentFixture<BxFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxFooterComponent]
    });
    fixture = TestBed.createComponent(BxFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
