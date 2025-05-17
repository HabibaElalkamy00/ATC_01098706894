import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { AuthService } from '../../services/auth.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, TranslateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private auth: Auth, private authService: AuthService, private router: Router) {}

  onLogin() {
  signInWithEmailAndPassword(this.auth, this.email, this.password)
    .then(() => {
      const hasPending = this.authService.hasPendingAction(); 
      this.authService.runPendingAction();

      if (!hasPending) {
        this.router.navigate(['/']);
      }
    })
    .catch(error => alert(error.message));
}
} 