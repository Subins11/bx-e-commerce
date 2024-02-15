import { TestBed } from '@angular/core/testing';

import { BxPersonalDetailsService } from './bx-personal-details.service';

describe('BxPersonalDetailsService', () => {
  let service: BxPersonalDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BxPersonalDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
