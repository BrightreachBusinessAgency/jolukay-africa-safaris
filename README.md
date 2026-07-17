# JOLUKAY AFRICA SAFARIS

A modern full-stack Tourism & Safari Management System built with **Laravel 13**, **React 19**, **TypeScript**, and **Vite**.

The platform enables administrators to manage safari packages, bookings, customer inquiries, galleries, users, and website content through a secure admin dashboard while providing visitors with an intuitive booking experience.

---

## Features

### Public Website
- Home page
- About page
- Safari Packages
- Package Details
- Gallery
- Booking Form
- Contact Form
- Responsive Design

### Admin Dashboard
- Secure Authentication
- Dashboard Overview
- Package Management (CRUD)
- Gallery Management
- Booking Management
- Customer Inquiries
- User Management
- Social Settings
- Image Uploads

---

## Technology Stack

### Backend
- Laravel 13
- PHP 8.4
- REST API
- Laravel Sanctum
- MySQL / SQLite

### Frontend
- React 19
- TypeScript
- Vite
- Axios
- React Router

---

## Project Structure

```
backend/
    app/
    routes/
    database/
    storage/

frontend/
    src/
        components/
        pages/
        services/
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/BrightreachBusinessAgency/jolukay-africa-safaris.git
```

### Backend

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan storage:link
php artisan serve
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Main Modules

- Authentication
- Packages
- Gallery
- Bookings
- Customers
- Dashboard
- Website
- Social Settings

---

## Future Improvements

- Online Payments
- Email Notifications
- WhatsApp Integration
- SMS Notifications
- SEO Enhancements
- Analytics Dashboard
- Customer Portal

---

## Author

**BrightReach Business Agency**

GitHub:
https://github.com/BrightreachBusinessAgency

---

## License

This project is released for educational and portfolio purposes.
