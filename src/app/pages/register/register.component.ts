import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  firstName = '';
  lastName = '';
  email = '';
  password = '';

  constructor(private auth: Auth, private router: Router) {}

  onRegister() {
    const fullName = `${this.firstName} ${this.lastName}`;

    createUserWithEmailAndPassword(this.auth, this.email, this.password)
      .then(() => {
        // ✅ خزّن الاسم والإيميل في localStorage
        localStorage.setItem('user', JSON.stringify({
          email: this.email,
          displayName: fullName
        }));

        alert('Registered successfully. Please log in.');
        this.router.navigate(['/login']);
      })
      .catch(error => alert(error.message));
  }
}
