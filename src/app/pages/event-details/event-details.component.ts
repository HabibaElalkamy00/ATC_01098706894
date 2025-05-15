import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { EventService } from '../../services/event.service';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from '../../services/firestore.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent implements OnInit {
  event: any;
  isAlreadyBooked: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private eventService: EventService,
    private authService: AuthService,
    private firestoreService: FirestoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.eventService.getEventById(id).subscribe(event => {
        this.event = event;
        if (event.locationUrl) {
          this.event.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(event.locationUrl);
        }

        const user = this.authService.getCurrentUser();
        if (user) {
          this.firestoreService.checkIfUserBooked(user.email, event.id).subscribe((booked) => {
            this.isAlreadyBooked = booked;
          });
        }
      });
    }
  }

  book(): void {
    if (!this.authService.isLoggedIn()) {
      this.authService.setPendingAction(() => this.book());
      this.router.navigate(['/login']);
      return;
    }

    const user = this.authService.getCurrentUser();

    const bookingData = {
      userName: user.displayName || 'Anonymous',
      userEmail: user.email,
      eventId: this.event.id,
      eventName: this.event.name,
      bookedAt: new Date().toISOString()
    };

    this.firestoreService.addBooking(bookingData)
      .then(() => {
        this.isAlreadyBooked = true;
        this.router.navigate(['/congrats']);
      })
      .catch(err => {
        alert('Error saving booking: ' + err.message);
      });
  }

  getStars(rating: number): number[] {
    return Array(Math.round(rating)).fill(0);
  }
}
