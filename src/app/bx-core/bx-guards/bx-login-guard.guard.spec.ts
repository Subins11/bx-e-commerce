import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { bxLoginGuardGuard } from './bx-login-guard.guard';

describe('bxLoginGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => bxLoginGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
