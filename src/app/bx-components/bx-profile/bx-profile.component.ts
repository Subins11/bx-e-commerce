import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BxLoginServiceService } from 'src/app/bx-core/bx-services/bx-login/bx-login-service.service';
import { BxPersonalDetailsService } from 'src/app/bx-core/bx-services/bx-userDetails/bx-personal-details.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bx-profile',
  templateUrl: './bx-profile.component.html',
  styleUrls: ['./bx-profile.component.scss']
})
export class BxProfileComponent implements OnInit {

  personalDetails: any[] = [];
  isEditing: boolean = false;
  editForm: FormGroup;
  details: any;
  hideDetails: boolean=true;
  isAuthenticated: boolean = false;

  constructor(private userData: BxPersonalDetailsService, 
    private fb: FormBuilder, 
    private loginService: BxLoginServiceService,
    private router: Router) {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadDetails();
    this.isAuthenticated = this.loginService.isAuthenticatedUser();
  }

  loadDetails() {
    this.userData.getDetails().subscribe((data: any) => {
      this.personalDetails = Object.values(data);
    });
  }

//Edit 

  editDetails(user: any) {
  if (user) {
    this.isEditing = true;
    this.hideDetails= false;
    this.details = user;
    this.editForm.patchValue({
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address
    });
  } else {
    console.error('User details are undefined.');
  }
}

//Cancel edit

  cancelEdit() {
    this.isEditing = false;
    this.editForm.reset();
    window.location.reload();
  }

//Update

  updateDetail() {
    if (this.editForm.valid && this.details && this.details.id) {
      const updatedDetails = {
        id: this.details.id,
        ...this.editForm.value
      };
      this.userData.updateDetails(updatedDetails).subscribe(() => {
        this.loadDetails();
        this.isEditing = false;
        this.editForm.reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Updated Succesfully",
          showConfirmButton: false,
          timer: 1500
        });
        window.location.reload();
      }, error => {
        console.error('Error updating details:', error);
      });
    } else {
      console.error('User details are invalid.');
    }
  }
  
  
  

}
