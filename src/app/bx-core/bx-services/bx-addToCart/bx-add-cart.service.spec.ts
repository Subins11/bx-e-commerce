import { TestBed } from '@angular/core/testing';

import { BxAddCartService } from './bx-add-cart.service';

describe('BxAddCartService', () => {
  let service: BxAddCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BxAddCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
