# BookingSystem

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.10.


# 🎉 Event Booking Platform

Welcome to the interactive Event Booking Web App built with Angular + Firebase!

## 🚀 Project Overview
This platform allows users to explore events, view detailed information, and make bookings. It features full authentication, multilingual support (English/Arabic), light/dark mode, and an admin panel for managing events and viewing bookings.

## ✨ Features

- 🔐 Login & Register via Firebase Authentication
- 📅 View events and book only one event per user
- 📄 Detailed event information with image, map, speakers, price, and tickets
- ✅ Congrats page after booking
- 🧾 Admin Panel to Add / Edit / Delete events and manage bookings
- 🌙 Light and Dark Theme support
- 🌐 Full English & Arabic language translation
- 🔒 Admin page access protected by route guard
- 📦 Bookings saved to Firebase Firestore
- 🔄 Language direction changes dynamically (LTR/RTL)

## 🛠️ Technologies Used

| Tool         | Purpose                        |
|--------------|--------------------------------|
| Angular      | Frontend framework             |
| Firebase     | Auth & Firestore               |
| AngularFire  | Firebase SDK for Angular       |
| ngx-translate| Internationalization (i18n)    |
| Bootstrap    | Responsive UI design           |
| AOS          | Scroll animations              |

## 📁 Project Structure (Simplified)
src/
├── app/
│ ├── pages/
│ │ ├── home/ # Home page
│ │ ├── login/ # Login page
│ │ ├── register/ # Register page
│ │ ├── event-details/ # Full event info
│ │ ├── admin/ # Admin panel
│ │ └── congrats/ # Booking success
│ ├── services/
│ │ ├── auth.service.ts
│ │ ├── event.service.ts
│ │ └── firestore.service.ts
│ └── guards/
│ └── admin.guard.ts


## 🧪 How to Run the Project

1. **Clone the Repository**
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

## Install Dependencies
npm install


