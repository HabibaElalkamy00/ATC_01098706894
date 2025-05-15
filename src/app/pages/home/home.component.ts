import { CommonModule } from '@angular/common';
import { Component , OnInit  } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
// Adjust the import path below if your auth.service.ts is in a different location
import { EventService } from '../../services/event.service';
import { AuthService } from '../../services/auth.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule , TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  events: any[] = [];

  constructor(
    private router: Router,
    private eventService: EventService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(data => {
      this.events = data;
    });
  }

  goToDetails(eventId: number): void {
    if (!this.authService.isLoggedIn()) {
      this.authService.setPendingAction(() => this.router.navigate(['/event', eventId]));
      this.router.navigate(['/login']);
      return;
    }
    this.router.navigate(['/event', eventId]);
  }

  book(event: any): void {
    if (!this.authService.isLoggedIn()) {
      this.authService.setPendingAction(() => this.book(event));
      this.router.navigate(['/login']);
      return;
    }

    if (!event.booked) {
      event.booked = true;
      this.router.navigate(['/congrats']);
    }
  }
}