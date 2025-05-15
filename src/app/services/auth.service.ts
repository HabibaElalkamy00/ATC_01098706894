import { Injectable } from '@angular/core';
import { Auth, onAuthStateChanged, User } from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUser: User | null = null;
  private pendingAction: (() => void) | null = null;

  constructor(private auth: Auth) {
    onAuthStateChanged(this.auth, user => {
      this.currentUser = user;

      // خزن بيانات المستخدم في localStorage عشان تفضل موجودة بعد الريلود
      if (user) {
        localStorage.setItem('user', JSON.stringify({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName
        }));
      } else {
        localStorage.removeItem('user');
      }
    });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  getCurrentUser() {
    const userString = localStorage.getItem('user');
    return userString ? JSON.parse(userString) : null;
  }

  setPendingAction(action: () => void) {
    this.pendingAction = action;
  }

  runPendingAction() {
    if (this.pendingAction) {
      this.pendingAction();
      this.pendingAction = null;
    }
  }

  hasPendingAction(): boolean {
    return !!this.pendingAction;
  }
}
