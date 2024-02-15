import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { BxLoginServiceService } from '../bx-services/bx-login/bx-login-service.service';

export class BxLoginGuard {
  constructor(private loginService: BxLoginServiceService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.loginService.isAuthenticatedUser()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}