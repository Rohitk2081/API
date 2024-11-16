Expense Tracking API
Overview
The Expense Tracking API is a Node.js and Express.js application that helps users manage their expenses with secure authentication and CRUD operations. It uses MongoDB for data storage and JWT for user session management.

Features
User Authentication: Secure registration and login with JWT-based sessions.
Expense Management: Add, read, update, and delete expenses.
Protected Routes: Accessible only to authenticated users.
Password Security: Encrypted passwords using bcrypt.js.
Robust Error Handling: Comprehensive error responses for seamless debugging.
Project Structure
project-folder/
├── controllers/
│   ├── authController.js
│   └── expenseController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── Expense.js
│   └── User.js
├── routes/
│   ├── authRoutes.js
│   └── expenseRoutes.js
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
Technologies Used
Backend: Node.js, Express.js
Database: MongoDB (Mongoose ODM)
Authentication: JSON Web Tokens (JWT)
Password Hashing: bcrypt.js
Environment Variables: dotenv
Installation
Prerequisites
Node.js (Download)
MongoDB (Download or use MongoDB Atlas)
Steps
Clone the repository:

git clone https://github.com/Rohitk2081/API
cd expense-tracking-api
Install dependencies:

npm install
Create .env file: Create a .env file in the root directory with the following:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000  # Default port or your preferred port
Run the application:

npm start
Or use nodemon for development:

npx nodemon server.js
Server Confirmation:

Server running on port 5000
MongoDB connected
API Endpoints
Authentication Routes
POST /api/auth/register: Register a new user.

Request Body:
{
  "username": "JohnDoe",
  "email": "john@example.com",
  "password": "password123"
}
POST /api/auth/login: Login and receive a JWT token.

Request Body:
{
  "email": "john@example.com",
  "password": "password123"
}
Expense Routes (Protected)
POST /api/expenses: Add a new expense.

Headers: Authorization: Bearer <token>
Request Body:
{
  "title": "Grocery Shopping",
  "amount": 100,
  "description": "Weekly groceries"
}
GET /api/expenses: Retrieve all expenses for the logged-in user.

Headers: Authorization: Bearer <token>
PUT /api/expenses/:id: Update an existing expense by ID.

Headers: Authorization: Bearer <token>
Request Body (fields to update):
{
  "title": "Updated Title",
  "amount": 120
}
DELETE /api/expenses/:id: Delete an expense by ID.

Headers: Authorization: Bearer <token>
Usage
Register a new user using /api/auth/register.
Login with /api/auth/login to receive a JWT token.
Use the token for protected routes by including it in the Authorization header:
Authorization: Bearer your_jwt_token
Error Codes
400: Bad request (e.g., validation issues).
401: Unauthorized (e.g., missing/invalid token).
404: Not found (e.g., non-existent resource).
500: Server error (e.g., database or code issue).
Future Enhancements
Add pagination for listing expenses.
Implement advanced filters and sorting.
Create a user-friendly frontend interface.
Include notifications for upcoming payments.
Contributing
Fork this repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m 'Add a new feature').
Push to your branch (git push origin feature/your-feature).
Open a pull request.
License
This project is licensed under the MIT License.

Contact
Author: Rohit

For any questions or feedback, please open an issue or contact me directly.
