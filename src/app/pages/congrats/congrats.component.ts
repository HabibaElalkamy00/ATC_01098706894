import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-congrats',
  imports: [TranslateModule],
  templateUrl: './congrats.component.html',
  styleUrl: './congrats.component.css'
})
export class CongratsComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }

}
