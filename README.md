SDAT + DEV OPS Final Sprint - Alicia & Keira

Project Overview
this project is a full-stack application built to manage and display flight arrivals and departures from multiple airports.
it supports both public users for viewing flight information and admin users
managing system data. Spring boot is used for the backend and React for the frontend.

Technology Stack
Frontend
- React
- JavaScript
- Fetch API
- 
BackEnd
- Java Spring Boot
- RESTful API
- 
Database
- PostgreSQL



System Entities
The system includes
- Flight
- Aircraft
- Airline
- Gate
- Airport
Each entity is related and supports CRUD operations through the API and admin UI.

Public Features:
- Viewing arriving and departing flights
- Switch between airports
- See flight details such as Scheduled time, Arrival/Departure type, Flight number, Airline, Gate, Destination and Status
- Error handling if API is unavailable.

Admin Features:
- Flight Management
Create, view, and delete flights
Assign aircraft, airline and gate
Form validation to prevent invalid input
- Aircraft Management
Add and view aircraft
Validate model, manufacturer and capacity
- Gates Management
Add and view gates
Handling incase backend API is unavailable

Docker Support
This project is structured to be containerized using Docker for both frontend and backend services.

Running the Project Locally
1. Open the backend project
2. Configure PostgreSQL connection
3. Run the Spring Boot Application

Frontend
npm install
npm run dev

front end will run at: http://localhost:5173

the backend API runs at: http://localhost8080

Repository Structure
Frontend:
React UI and Admin Dashboard

Backend:
Spring Boot API and database logic

Team Contribution
Keira - 



Alicia - I was responsible for developing the Frontend including arrivals and departures view, admin CRUD pages for flights, aircraft and gates as well as validation and error handling.
I also created the user stories and manual test scenarios.

