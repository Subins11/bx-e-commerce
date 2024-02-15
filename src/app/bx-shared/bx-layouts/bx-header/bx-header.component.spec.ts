import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxHeaderComponent } from './bx-header.component';

describe('BxHeaderComponent', () => {
  let component: BxHeaderComponent;
  let fixture: ComponentFixture<BxHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxHeaderComponent]
    });
    fixture = TestBed.createComponent(BxHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
