import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxNavbarComponent } from './bx-navbar.component';

describe('BxNavbarComponent', () => {
  let component: BxNavbarComponent;
  let fixture: ComponentFixture<BxNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxNavbarComponent]
    });
    fixture = TestBed.createComponent(BxNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
