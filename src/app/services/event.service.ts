import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private firestore: Firestore) {}

  // Get all events from Firestore
  getEvents(): Observable<any[]> {
    const eventsRef = collection(this.firestore, 'events');
    return collectionData(eventsRef, { idField: 'id' });
  }

  // Get a single event by ID
  getEventById(id: string): Observable<any> {
    const eventRef = doc(this.firestore, `events/${id}`);
    return docData(eventRef, { idField: 'id' });
  }

  // Add a new event
  addEvent(event: any) {
    const eventsRef = collection(this.firestore, 'events');
    return addDoc(eventsRef, event);
  }

  // Update an existing event
  updateEvent(id: string, event: any) {
    const eventRef = doc(this.firestore, `events/${id}`);
    return updateDoc(eventRef, event);
  }

  // Delete an event
  deleteEvent(id: string) {
    const eventRef = doc(this.firestore, `events/${id}`);
    return deleteDoc(eventRef);
  }
}
