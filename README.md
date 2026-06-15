# Sayali Portfolio Website

## Project Overview

This project is a personal portfolio website developed using React.js and Vite. The portfolio showcases my professional profile, technical skills, projects, resume, and contact information. The website is designed to be responsive, user-friendly, and optimized for performance across different devices.

---

# Features

* Responsive design for Desktop, Tablet, and Mobile devices
* Professional Navigation Bar
* About Me Section
* Skills Section
* Projects Section
* Resume Download Functionality
* Contact Section with GitHub and LinkedIn Links
* Smooth Scrolling Navigation
* Bootstrap-based Modern User Interface
* Lazy Loading for Components and Images
* Optimized Production Build

---

# Technologies Used

## Frontend Technologies

* React.js
* Vite
* Bootstrap 5
* HTML5
* CSS3
* JavaScript (ES6)

## Development Tools

* Visual Studio Code
* Git
* GitHub
* Vercel

---

# Project Structure

```text
PortfolioWebsite/

├── public/
│   └── Resume.pdf
│
├── src/
│   ├── assets/
│   │   └── Profile.jpeg
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Resume.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

# Development Process

## Step 1: Create React Project

```bash
npm create vite@latest portfolio-website -- --template react
```

## Step 2: Install Dependencies

```bash
npm install
npm install bootstrap
```

## Step 3: Configure Bootstrap

Import Bootstrap in `main.jsx`:

```javascript
import "bootstrap/dist/css/bootstrap.min.css";
```

## Step 4: Create Components

Created reusable React components:

* Navbar
* About
* Skills
* Projects
* Contact
* Resume

## Step 5: Implement Responsive Design

Used Bootstrap Grid System:

* Container
* Row
* Col

Ensured responsiveness across:

* Desktop Devices
* Tablets
* Mobile Devices

## Step 6: Performance Optimization

Implemented lazy loading for React components:

```javascript
import { lazy, Suspense } from "react";

const About = lazy(() => import("./components/About"));
```

Implemented lazy loading for images:

```html
<img src={profile} loading="lazy" alt="Profile" />
```

## Step 7: Generate Production Build

Generated optimized production build:

```bash
npm run build
```

Output Folder:

```text
dist/
```

## Step 8: Local Build Verification

Previewed the production build locally:

```bash
npm run preview
```

Verified:

* Navigation Functionality
* Resume Download
* Responsive Layout
* Project Cards
* Contact Links

---

# Deployment Process

## Git Initialization

```bash
git init
git add .
git commit -m "Initial Portfolio Website"
```

## GitHub Repository

Repository URL:

https://github.com/SayaliPawar1125/Portfolio-website

Uploaded source code using:

```bash
git remote add origin <repository-url>
git branch -M main
git push -u origin main
```

## Vercel Deployment

The portfolio website was deployed using Vercel.

### Deployment Steps

1. Uploaded the source code to GitHub.
2. Connected the GitHub repository to Vercel.
3. Vercel automatically detected the Vite framework.
4. Configured the build settings:

   * Build Command: `npm run build`
   * Output Directory: `dist`
5. Successfully deployed the application.
6. Verified all functionalities after deployment.
7. Tested responsiveness and browser compatibility.

### Live Website

https://portfolio-website-1d5nbv5pm-sayali-pawar-s-projects.vercel.app

### SSL and Security

Vercel automatically provided:

* HTTPS Support
* SSL Certificate
* Secure Deployment URL

---

# Challenges Faced and Solutions

## 1. Lazy Loading Errors

### Issue

Duplicate component imports caused build failures.

### Solution

Removed normal imports and implemented `React.lazy()` with `Suspense`.

---

## 2. Image Rendering Issues

### Issue

Profile image was not displaying correctly.

### Solution

Used the correct image import path and applied proper CSS styling using `object-fit`.

---

## 3. JSX Key Warning

### Issue

React displayed the warning:

```text
Each child in a list should have a unique "key" prop.
```

### Solution

```javascript
{projects.map((project, index) => (
  <div key={index}>
```

---

## 4. Resume Download Issue

### Issue

Resume file was not downloading properly.

### Solution

Placed `Resume.pdf` inside the `public` folder and used:

```html
<a href="/Resume.pdf" download>
```

---

# Testing

## Functional Testing

Verified:

* Navigation Links
* Resume Download
* Project Section
* Contact Information
* Social Media Links

## Cross-Browser Testing

Tested successfully on:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox

## Responsive Testing

Verified on:

* Mobile Devices
* Tablets
* Laptops
* Desktop Screens

---

# Future Enhancements

* Add Dark Mode
* Add Project Screenshots
* Integrate Email Service
* Add Animations
* Add Blog Section

---

# Author

**Sayali Pawar**

Email: [sayalipawar1125@gmail.com](mailto:sayalipawar1125@gmail.com)

GitHub: https://github.com/SayaliPawar1125

LinkedIn: https://linkedin.com/in/sayalipawar1125

---

# Conclusion

The React Portfolio Website was successfully designed, developed, optimized, tested, and deployed using Vercel. The application provides a responsive and user-friendly platform to showcase projects, technical skills, resume, and contact information while maintaining performance, accessibility, and professional design standards.
