# Book Store MERN Stack Project

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Now-blue)](https://book-store-project-frontend.vercel.app)

## Overview

The Book Store MERN Stack Project is a full-stack web application for managing a book store. The project incorporates the MERN stack, including MongoDB for the database, Express.js for the backend, React for the frontend, and Node.js for server-side logic.

## Features

- **CRUD Operations:** Perform Create, Read, Update, and Delete operations for books.
- **Responsive Design:** Create a user-friendly interface with a responsive design for a seamless user experience.
- **Dynamic Routing:** Implement dynamic routing using React Router for efficient navigation.
- **RESTful API:** Develop a RESTful API with Express.js to handle HTTP requests for book operations.
- **MongoDB Database:** Utilize MongoDB as the database for efficient data storage and retrieval.
- **External Libraries:** Integrate external libraries such as Axios for API communication and Notistack for notifications.
- **Tailwind CSS Styling:** Style the application using Tailwind CSS for a clean and modern design.

## Project Structure

- **`frontend/`**: Contains the React.js frontend code.
  - **`src/`**: Includes components, pages, and styling files.
  - **`public/`**: Stores static assets.

- **`backend/`**: Houses the Node.js backend code.
  - **`controllers/`**: Defines the route controllers for handling CRUD operations.
  - **`db/`**: Manages the MongoDB database connection.
  - **`models/`**: Contains the Mongoose data model for books.
  - **`routes/`**: Defines the API routes for book operations.
  - **`index.js`**: Main entry point for the backend server.

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rahulNamavaram24/book-store-project.git
   cd book-store-mern-project
   ```

2. **Install dependencies:**

   - Frontend:

     ```bash
     cd frontend
     npm install
     ```

   - Backend:

     ```bash
     cd backend
     npm install
     ```

3. **Start the development servers:**

   - Frontend:

     ```bash
     cd frontend
     npm run dev
     ```

   - Backend:

     ```bash
     cd backend
     npm run dev
     ```

4. **Open your browser and visit [http://localhost:4201/](http://localhost:4201/) to view the application.**

## Contributing

Feel free to contribute to the project by opening issues or submitting pull requests.