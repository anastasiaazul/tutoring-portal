# Tutoring Portal

A full-stack web application for organizing, managing, and sharing PDF learning resources with students. Built for personal tutoring, this portal streamlines resource distribution and access.

## Features

- Secure user authentication
- Upload, assign, and distribute PDF files to students
- Student dashboard for accessing assigned resources
- RESTful API for PDF management
- Responsive UI built with React
- Backend powered by Node.js and Express

## Tech Stack

- **Frontend:** React, JavaScript, HTML/CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB (recommended)
- **Other:** Axios, Mongoose, dotenv

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB (local or cloud)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tutoring-portal.git
   cd tutoring-portal
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   cp .env.example .env   # Add your environment variables
   npm start
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   npm start
   ```

4. **Access the app**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend: [http://localhost:3001](http://localhost:3001)

## Usage

- Register and log in as a tutor or student.
- Tutors can upload PDFs and assign them to students.
- Students can view and download assigned PDFs from their dashboard.

<img width="947" height="409" alt="image" src="https://github.com/user-attachments/assets/5eef29b2-0e37-4ac1-bbb6-6d2d01a832cf" />


## Folder Structure

```
tutoring-portal/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── index.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json
```
