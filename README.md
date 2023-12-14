User CRUD Application
This is a Node.js, Express.js, and MongoDB application that provides REST API endpoints for performing CRUD operations on a User resource.

Prerequisites
Before you begin, ensure you have the following installed:

Node.js
MongoDB
Installation
Clone the repository:
git clone https://github.com/vbvivek28/REB-Assignment.git

Change into the project directory:
cd REB-Assignment

Install all dependencies using:
npm i

Configuration:
Update the MongoDB connection string in the .env file if necessary.

Start the server:
node index.js
The API will be available at http://localhost:3000.

API Endpoints
GET /users: Returns a list of all users.

GET /users/:id: Returns the user with the specified ID.

POST /users: Creates a new user with the specified data.

PUT /users/:id: Updates the user with the specified ID with the new data.

DELETE /users/:id: Deletes the user with the specified ID.

Use Postman to check the API endpoints.
