import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { FirestoreService } from '../../services/firestore.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // 🔹 إدارة الفعاليات
  events: any[] = [];
  showAddForm = false;
  eventForm!: FormGroup;
  editingEventId: string | null = null;

  // 🔹 عرض الحجوزات
  bookings: any[] = [];

  constructor(
    private eventService: EventService,
    private firestoreService: FirestoreService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadEvents();
    this.loadBookings();

    this.eventForm = this.fb.group({
      name: [''],
      category: [''],
      date: [''],
      time: [''],
      venue: [''],
      price: [0],
      tickets: [0],
      image: [''],
      description: [''],
      locationUrl: ['']
    });
  }

  // ✅ تحميل الفعاليات
  loadEvents(): void {
    this.eventService.getEvents().subscribe(data => {
      this.events = data;
    });
  }

  // ✅ تحميل الحجوزات
  loadBookings(): void {
    this.firestoreService.getAllBookings().subscribe(data => {
      this.bookings = data;
    });
  }

  // ✅ إضافة أو تحديث حدث
  onSubmit(): void {
    if (this.editingEventId) {
      this.eventService.updateEvent(this.editingEventId, this.eventForm.value);
      this.editingEventId = null;
    } else {
      this.eventService.addEvent(this.eventForm.value);
    }

    this.eventForm.reset();
    this.showAddForm = false;
  }

  // ✅ تعديل حدث
  editEvent(event: any): void {
    this.eventForm.patchValue(event);
    this.editingEventId = event.id;
    this.showAddForm = true;
  }

  // ✅ حذف حدث
  deleteEvent(id: string): void {
    if (confirm('Are you sure you want to delete this event?')) {
      this.eventService.deleteEvent(id);
    }
  }
}
