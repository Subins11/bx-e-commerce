import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxBannerSectionComponent } from './bx-banner-section.component';

describe('BxBannerSectionComponent', () => {
  let component: BxBannerSectionComponent;
  let fixture: ComponentFixture<BxBannerSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxBannerSectionComponent]
    });
    fixture = TestBed.createComponent(BxBannerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
