import { TestBed } from '@angular/core/testing';

import { BxLoginServiceService } from './bx-login-service.service';

describe('BxLoginServiceService', () => {
  let service: BxLoginServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BxLoginServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
