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

To connect this project to Firebase properly, follow these exact steps:

1. ✅ **Enable Firebase Authentication**
   - Go to **Firebase Console → Authentication → Sign-in method**
   - Enable **Email/Password**

2. ✅ **Enable Firestore Database**
   - Go to **Firestore Database**
   - Click **Create database**
   - Choose test mode or secure rules as needed

3. ✅ **Create Required Collections**
   - `events` — to store all event data (id, name, date, time, venue, etc.)
   - `bookings` — to store booking records with user name, email, event ID, event name, and booked date

4. ✅ **Add Test Admin User**
   - Manually create a user via **Authentication → Users**
   - Email: `admin@example.com`
   - Set a password (e.g. `123456`)
   - This user will have access to the admin panel

5. ✅ **Update Firebase Config in Angular**
   - Open `src/environments/environment.ts`
   - Paste your Firebase config from Firebase Console:
     ```ts
     export const environment = {
       production: false,
       firebase: {
         apiKey: "AIzaSyCwx6cTp8zqCbnKmLsdn4S3q9-fayiyVHM",
         authDomain: "event-booking-system-9288d.firebaseapp.com",
         projectId: "event-booking-system-9288d",
         storageBucket: "event-booking-system-9288d.appspot.com",
         messagingSenderId: "237568001447",
         appId: "1:237568001447:web:52a4ab8fe9783e928fe282",
         measurementId: "G-6E0BBHQWJ6"
       }
     };
     ```

---

## 🌍 Language & Theme Support

1. 🌐 **Multilingual Support**
   - Uses `@ngx-translate/core` for language translation
   - Supports **English 🇬🇧** and **Arabic 🇸🇦**
   - Strings are stored in `assets/i18n/en.json` and `ar.json`
   - Automatically switches layout to **RTL** for Arabic

2. 🎨 **Theme Toggle**
   - Supports **Light** and **Dark** mode
   - Saved to `localStorage` to remember user preference
   - Toggle using the moon/sun icon in the navbar

3. 🧠 **Smart UI Behavior**
   - Direction (`ltr` or `rtl`) is automatically applied based on selected language
   - Theme and language settings persist across sessions

---






