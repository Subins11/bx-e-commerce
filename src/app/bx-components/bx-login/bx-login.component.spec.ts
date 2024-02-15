import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxLoginComponent } from './bx-login.component';

describe('BxLoginComponent', () => {
  let component: BxLoginComponent;
  let fixture: ComponentFixture<BxLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxLoginComponent]
    });
    fixture = TestBed.createComponent(BxLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
