import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, query, where, getDocs } from '@angular/fire/firestore';
import { Observable, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  // ✅ دالة إضافة الحجز
  addBooking(booking: any) {
    const ref = collection(this.firestore, 'bookings');
    return addDoc(ref, booking);
  }

  // ✅ دالة التأكد من الحجز
  checkIfUserBooked(email: string, eventId: string): Observable<boolean> {
    const ref = collection(this.firestore, 'bookings');
    const q = query(ref, where('userEmail', '==', email), where('eventId', '==', eventId));
    return from(getDocs(q)).pipe(
      map(snapshot => !snapshot.empty)
    );
  }

  // ✅ دالة الحصول على كل الحجوزات
  getAllBookings(): Observable<any[]> {
    const bookingsRef = collection(this.firestore, 'bookings');
    return from(getDocs(bookingsRef)).pipe(
      map(snapshot => snapshot.docs.map(doc => doc.data()))
    );
  }
}
