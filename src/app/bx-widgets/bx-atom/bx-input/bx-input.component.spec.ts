import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxInputComponent } from './bx-input.component';

describe('BxInputComponent', () => {
  let component: BxInputComponent;
  let fixture: ComponentFixture<BxInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxInputComponent]
    });
    fixture = TestBed.createComponent(BxInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
