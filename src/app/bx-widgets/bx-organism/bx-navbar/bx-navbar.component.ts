import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BxLoginServiceService } from 'src/app/bx-core/bx-services/bx-login/bx-login-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bx-navbar',
  templateUrl: './bx-navbar.component.html',
  styleUrls: ['./bx-navbar.component.scss']
})
export class BxNavbarComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(private loginService: BxLoginServiceService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isAuthenticatedUser();
  }

//Logout

  logout(): void {
    console.log('Logging off...');
    this.loginService.logout();
    this.isLoggedIn = false;
    this.cdr.detectChanges();
    Swal.fire({
      icon: "error",
      title: "Loggin Out..",
      text: "..........",
    });
    window.location.reload();
  }
}
