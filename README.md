# JWT-Auth

A Node.js backend project implementing JWT-based authentication. This project demonstrates user registration, login, and profile retrieval using JSON Web Tokens (JWT), along with integrated Swagger documentation for easy API reference.

## Features

- **User Registration**: Create a new account by providing a name, email, and password.
- **User Login**: Authenticate and receive a JWT token.
- **Get User Profile**: Retrieve authenticated user details using the provided token.
- **JWT Security**: Secure endpoints with JSON Web Tokens.
- **Swagger Documentation**: Interactive API documentation available at `/api-docs`.

## Technologies Used

- **Node.js** & **Express.js**
- **MongoDB** (via Mongoose)
- **JSON Web Tokens (JWT)**
- **bcryptjs** for password hashing
- **Swagger** (swagger-ui-express, swagger-jsdoc)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (local or remote instance)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/NitantBhagat/JWT-Auth.git
   cd JWT-Auth

## 2. Install Dependencies

  ```bash
  npm install
```

## 3. Configure Environment Variables

Create a `.env` file in the root directory and add the following:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EXPIRES_IN=1h
NODE_ENV=development
```

Replace your_mongodb_connection_string and your_jwt_secret with your actual MongoDB URI and a secure secret for JWT.

## 4. Run the Server

```bash
npm start
```
The server will start on http://localhost:5000.

## Swagger Documentation

To view the interactive API documentation, go to:

```bash
http://localhost:5000/api-docs
```


You can test all endpoints directly in your browser using the Swagger UI.

### How to Use API Calls in Swagger

1. **Register a New User**  
   - **Endpoint**: `POST /api/users/`  
   - In Swagger UI, find the `POST /api/users/` section and click **"Try it out"**.  
   - Provide the following JSON in the request body (adjust values as needed):
     ```json
     {
       "name": "example name",
       "email": "example@example.com",
       "password": "examplepassword"
     }
     ```
   - Click **"Execute"** to send the request.  
   - If successful, you will see a `201 Created` response with the user details and a JWT token.

2. **Login a User**  
   - **Endpoint**: `POST /api/users/login`  
   - In Swagger UI, find the `POST /api/users/login` section and click **"Try it out"**.  
   - Provide your existing user’s credentials in the JSON request body:
     ```json
     {
       "email": "example@example.com",
       "password": "examplepassword"
     }
     ```
   - Click **"Execute"** to log in.  
   - If successful, you will see a `200 OK` response with the user details and a JWT token.

3. **Get User Profile**  
   - **Endpoint**: `GET /api/users/me`  
   - First, copy the JWT token from your **Login** response.  
   - In Swagger UI, click the **"Authorize"** button (top-right).  
   - Enter your token.
   - Click **"Authorize"** to apply the token.  
   - Find the `GET /api/users/me` section and click **"Try it out"**.  
   - Click **"Execute"** to retrieve your profile.  
   - If authorized, you will see a `200 OK` response with your user ID, name, and email.

