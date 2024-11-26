# Authentication, Authorization, and Role-Based Access Control (RBAC) System
## Overview

This project demonstrates a secure system for **Authentication**, **Authorization**, and **Role-Based Access Control (RBAC)**. It ensures proper user authentication, role assignment, and controlled access to resources based on roles and permissions. The system is designed to follow security best practices and implement flexible RBAC mechanisms for user management.
---
## Features

1. **Authentication**:
   - User registration with secure password hashing using bcrypt.
   - Secure login mechanism utilizing **JSON Web Tokens (JWT)**.
   - Logout functionality to invalidate user sessions.

2. **Authorization**:
   - Role-based access to resources using **RBAC**.
   - Three predefined roles:
     - **Admin**: Full access to manage users and system resources.
     - **Moderator**: Limited access to moderate specific system resources.
     - **User**: Access to standard resources.

3. **Security Best Practices**:
   - Passwords hashed using **bcrypt**.
   - Session management via JWT with token expiration.
   - Role validation at both middleware and route levels.

4. **Role-Based Access Control**:
   - Role assignments stored in the database.
   - Permissions dynamically checked based on user roles.
   - Scalable and flexible system to add new roles and permissions.

5. **Extensibility**:
   - Easily extendable to include more roles and granular permissions.
   - Modular code for reusable components.

---
## Technology Stack

- **Backend**: Node.js with Express.js
- **Authentication**: JSON Web Tokens (JWT)
- **Password Security**: bcrypt
- **Database**: MongoDB
- **Middleware**: Role validation middleware for secure resource access

---
## Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/mdnuruli579/RBAC_Backend.git
   cd RBAC_Backend
   npm install
2. **Setup Environment Variables: Create a .env file in the root directory with the following**
```bash
PORT=8080
SERECT_KEY=<your_secret_key>
SERVER=http://localhost:8080
MONGO_URI=<your_database_connection_string>
npm start
# API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register a new user<br/>
Takes Parameter: Json object { name (string), email(string), password(string) role}<br/> 
Role is defined as<br/> 
	Admin<br/> 
	Moderator<br/> 
	User<br/>
POST	/api/auth/login	Authenticate user and return JWT
Takes Parameter : Json object {email(string), password(string)}<br/> 
POST	/api/auth/logout	Log out a user and invalidate token (take token in header token=<token>)<br/>
GET 	/api/users (This is for Admin) Get List of User based on role <br/>


