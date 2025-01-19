# Backend Developer Assessment
This project implements a backend system for managing users and tasks (JWT), using Node.js, Express, MongoDB, and MySQL.
- [(Backend Developer Assignment.pdf)](https://github.com/vivekjais1110/TV9_NODE/blob/main/Backend%20Developer%20Assignment.pdf)

# Features
- User registration and login.
- JWT-based authentication.
- CRUD operations for tasks.
- MySQL for relational data.
- MongoDB for task storage.
- Task prioritization and status management.



# Setup and Installation
Prerequisites

Ensure the following tools are installed on your system:
- Node.js (v12+)
- MongoDB installed and running locally.
- MySQL server installed.

# Clone the repository:
- git clone https://github.com/vivekjais1110/TV9_NODE.git
- cd TV9_NODE

# Install dependencies:
- npm install

# Configure environment variables:
Create a .env file in the root directory.
Use the example below or customize as needed:

- MONGO_URI=mongodb://localhost:27017/backend-assessment
- PORT=6000
- JWT_SECRET=tv9
- SQL_DB=task_manager
- SQL_USER=root
- SQL_PASSWORD=root
- SQL_HOST=localhost
- SQL_DIALECT=mysql

# Start the server:
- npm start
Environment Variables
The project uses the following environment variables (found in .env):
