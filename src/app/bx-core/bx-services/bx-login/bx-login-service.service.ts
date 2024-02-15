import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BxLoginServiceService {

  private isAuthenticated = false;

  constructor() {
    // Check if a user is already logged in
    const isAuthenticatedString = localStorage.getItem('isAuthenticated');
    if (isAuthenticatedString) {
      this.isAuthenticated = JSON.parse(isAuthenticatedString);
    }
  }

  // Login Function
  login(email: string, password: string): boolean {
    if (email === 'user' && password === 'password') {
      // Successful login
      this.isAuthenticated = true;

      // Store authentication state in localStorage
      localStorage.setItem('isAuthenticated', JSON.stringify(true));

      return true;
    }
    // Incorrect credentials
    return false;
  }

  // Logout Function
  logout(): void {
    console.log('Logging out...');
    this.isAuthenticated = false;

    // Remove authentication state from localStorage on logout
    localStorage.removeItem('isAuthenticated');
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
