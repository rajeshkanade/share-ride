# Share Ride Application

## Project Overview
The Share Ride application is a platform designed to connect passengers with captains (drivers) for seamless ride-sharing experiences. It includes features for user registration, ride booking, captain registration, and real-time ride tracking. The project is divided into two main parts:

1. **Backend**: Built with Node.js and Express.js, it handles API endpoints, database interactions, and real-time communication using Socket.IO.
2. **Frontend**: Developed with React and Vite, it provides a user-friendly interface for passengers and captains.

## Features
- User and Captain Registration/Login
- Ride Booking and Fare Calculation
- Real-time Ride Tracking
- Captain Availability and Ride Confirmation
- Integration with Google Maps for location and route details
- Responsive Design for Mobile and Desktop

## Project Structure
```
share-ride/
├── backend/       # Backend codebase
├── frontend/      # Frontend codebase
```

## Prerequisites
- Node.js (v18 or higher)
- npm (Package Manager)
- MongoDB (for database)

## Setup Instructions

### Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory with the following variables:
   ```env
   PORT=5000
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm dev
   ```

## Running the Application
1. Ensure MongoDB is running locally or remotely.
2. Start the backend server.
3. Start the frontend development server.
4. Open your browser and navigate to `http://localhost:5173` (default Vite port).

## Technologies Used
- **Backend**: Node.js, Express.js, MongoDB, Socket.IO
- **Frontend**: React, Vite, Tailwind CSS
- **Other Tools**: Axios, React Router, React Toastify, Leaflet

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.