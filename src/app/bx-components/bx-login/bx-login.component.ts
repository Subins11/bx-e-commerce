import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BxLoginServiceService } from 'src/app/bx-core/bx-services/bx-login/bx-login-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bx-login',
  templateUrl: './bx-login.component.html',
  styleUrls: ['./bx-login.component.scss']
})
export class BxLoginComponent implements OnInit{

loginForm!: FormGroup

constructor( private formBuilder: FormBuilder, private loginService: BxLoginServiceService, private router :Router ) {}


ngOnInit(): void {
  this.initializeForm();
}

initializeForm(): void {
  this.loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
}

// Login Function

login(): void {
  if (this.loginForm && this.loginForm.valid) {
    const email = this.loginForm.get('email')!.value;
    const password = this.loginForm.get('password')!.value;
    console.log('Attempting to log in:', email, password);

    const loginSuccessful = this.loginService.login(email, password);
    if (loginSuccessful) {
      console.log('Login successful');
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome Back !!",
      });
      console.log('Login failed');
      this.router.navigate(['/home']);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter a Valid Credential",
      });
      console.log('Login failed');
    }
  }
}




}
