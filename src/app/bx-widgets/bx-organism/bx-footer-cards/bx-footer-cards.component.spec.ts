import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxFooterCardsComponent } from './bx-footer-cards.component';

describe('BxFooterCardsComponent', () => {
  let component: BxFooterCardsComponent;
  let fixture: ComponentFixture<BxFooterCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxFooterCardsComponent]
    });
    fixture = TestBed.createComponent(BxFooterCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
