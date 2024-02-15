import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxProfileComponent } from './bx-profile.component';

describe('BxProfileComponent', () => {
  let component: BxProfileComponent;
  let fixture: ComponentFixture<BxProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxProfileComponent]
    });
    fixture = TestBed.createComponent(BxProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
