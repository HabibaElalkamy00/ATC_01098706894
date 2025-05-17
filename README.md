# BookingSystem

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.10.


# 🎉 Event Booking Platform

Welcome to the interactive Event Booking Web App built with Angular + Firebase!

This platform allows users to explore events, view detailed information, and make bookings. It features full authentication, multilingual support (English/Arabic), light/dark mode, and an admin panel for managing events and viewing bookings.

---

## ✨ Features

- 🔐 Firebase Authentication (Login/Register)
- 📅 View upcoming events
- 📄 Full event details with images, description, map, and speakers
- ✅ Only one booking allowed per user
- 🎉 Congrats page after successful booking
- 🧾 Admin Panel: Add/Edit/Delete Events + View Bookings
- 🌙 Light & Dark Theme support (toggle switch)
- 🌐 English / Arabic support with RTL direction for Arabic
- 🔒 Admin-only access to admin panel (secured route guard)
- 📦 Bookings stored in Firebase Firestore
- 🚫 Already booked event disables Book Now button

---

## 🛠️ Built With

- **Angular** — Frontend Framework  
- **Firebase** — Backend (Auth + Firestore)  
- **AngularFire** — Angular + Firebase integration  
- **ngx-translate** — Language switching (i18n)  
- **Bootstrap** — Responsive layout  
- **AOS** — Scroll Animations  

---

## 📁 Project Structure

src/
├── app/
│ ├── pages/
│ │ ├── home/ # Homepage with events
│ │ ├── login/ # Login form
│ │ ├── register/ # Registration form
│ │ ├── event-details/ # Full event info
│ │ ├── admin/ # Admin panel for managing events
│ │ └── congrats/ # Booking confirmation
│ ├── services/
│ │ ├── auth.service.ts
│ │ ├── event.service.ts
│ │ └── firestore.service.ts
│ └── guards/
│ └── admin.guard.ts


---

## 🧪 How to Run the Project

```bash
# 1. Clone the repo
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# 2. Install dependencies
npm install

# 3. Add your Firebase config in environment.ts

# 4. Run the app
ng serve

```

---

## 🔥 Firebase Setup Checklist

-Enable Firebase Authentication (Email/Password)
-Enable Cloud Firestore
-Create 2 collections:
-events
-bookings
-Add test user: admin@example.com
-Password: "123456"
-Deploy your Firebase config in Angular's environment.ts

---

##🌍 Language & Theme

-English & Arabic — fully translatable using ngx-translate
-🌓 Light & Dark mode — saved in localStorage
-↔️ Arabic uses RTL direction automatically

---





