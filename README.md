# Sayali Portfolio Website

## Project Overview

This project is a personal portfolio website developed using React and Vite. The portfolio showcases my professional profile, technical skills, projects, resume, and contact information. The website is designed to be responsive, user-friendly, and optimized for performance.

---

## Features

* Responsive design for desktop, tablet, and mobile devices
* Professional navigation bar
* About Me section
* Skills section
* Projects section
* Resume download functionality
* Contact section with GitHub and LinkedIn links
* Smooth scrolling navigation
* Bootstrap-based modern UI
* Lazy loading implementation for improved performance

---

## Technologies Used

### Frontend

* React.js
* Vite
* Bootstrap 5
* HTML5
* CSS3
* JavaScript (ES6)

### Tools

* Visual Studio Code
* Git
* GitHub

---

## Project Structure

```text
PortfolioWebsite/
│
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

## Development Process

### Step 1: Create React Project

```bash
npm create vite@latest portfolio-website -- --template react
```

### Step 2: Install Dependencies

```bash
npm install
npm install bootstrap
```

### Step 3: Configure Bootstrap

Import Bootstrap in main.jsx:

```javascript
import "bootstrap/dist/css/bootstrap.min.css";
```

### Step 4: Create Components

Created the following reusable React components:

* Navbar
* About
* Skills
* Projects
* Contact

### Step 5: Implement Responsive Design

Used Bootstrap Grid System:

* Container
* Row
* Col

Ensured responsiveness across:

* Desktop
* Tablet
* Mobile devices

### Step 6: Performance Optimization

Implemented lazy loading:

```javascript
import { lazy, Suspense } from "react";

const About = lazy(() => import("./components/About"));
```

Used image lazy loading:

```html
<img src={profile} loading="lazy" alt="Profile" />
```

### Step 7: Production Build

Generated optimized production build:

```bash
npm run build
```

Output folder:

```text
dist/
```

### Step 8: Local Build Verification

Previewed production build locally:

```bash
npm run preview
```

Verified:

* Navigation
* Resume Download
* Responsive Layout
* Project Cards
* Contact Links

---

## Deployment Process

### Git Initialization

```bash
git init
git add .
git commit -m "Initial Portfolio Website"
```

### GitHub Repository

Created a repository on GitHub and pushed the project:

```bash
git remote add origin <repository-url>
git branch -M main
git push -u origin main
```

### Deployment Using Netlify

1. Login to Netlify
2. Click "Add New Site"
3. Import Git Repository
4. Select GitHub Repository
5. Configure Build Settings:

Build Command:

```bash
npm run build
```

Publish Directory:

```text
dist
```

6. Deploy Site

---

## Challenges Faced

### 1. Lazy Loading Errors

Issue:
Duplicate component imports caused build failures.

Solution:
Removed normal imports and used React.lazy() with Suspense.

### 2. Image Rendering Issues

Issue:
Profile image was not displaying correctly.

Solution:
Used correct image import path and object-fit styling.

### 3. JSX Key Warning

Issue:
React displayed warning:

```text
Each child in a list should have a unique "key" prop.
```

Solution:

```jsx
{projects.map((project, index) => (
  <div key={index}>
```

### 4. Resume Download Issue

Issue:
Resume file was not downloading.

Solution:
Placed Resume.pdf inside public folder and used:

```jsx
<a href="/Resume.pdf" download>
```

---

## Testing

### Functional Testing

* Navigation Links
* Resume Download
* Project Section
* Contact Information

### Cross-Browser Testing

Tested on:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox

### Responsive Testing

Tested on:

* Mobile Devices
* Tablets
* Laptops
* Desktop Screens

---

## Future Enhancements

* Add Dark Mode
* Add Project Screenshots
* Integrate Email Service
* Add Animations
* Add Blog Section

---

## Author

### Sayali Pawar

Email: [sayalipawar1125@gmail.com](mailto:sayalipawar1125@gmail.com)

GitHub:
https://github.com/SayaliPawar1125

LinkedIn:
https://linkedin.com/in/sayalipawar1125
