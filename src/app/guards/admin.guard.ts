import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private auth: Auth, private router: Router) {}

  async canActivate(): Promise<boolean> {
    const user = this.auth.currentUser;

    if (user && user.email === 'admin@example.com') {
      return true; // هو Admin
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
