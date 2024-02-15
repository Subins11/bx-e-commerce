import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxHomepageComponent } from './bx-homepage.component';

describe('BxHomepageComponent', () => {
  let component: BxHomepageComponent;
  let fixture: ComponentFixture<BxHomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxHomepageComponent]
    });
    fixture = TestBed.createComponent(BxHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
