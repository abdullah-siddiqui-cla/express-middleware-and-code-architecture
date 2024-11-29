# Express.js CRUD Exercise Manual

This manual outlines the tasks for implementing an Express.js application using the specified folder structure, middlewares, CRUD operations, and Zod validation.

# Folder Structure
```
project/
├── middlewares/
│   ├── logger.middleware.js
│   ├── auth.middleware.js
│   └── error.middleware.js
├── routes/
│   └── post.routes.js
├── modules/
│   └── posts/
│       ├── services/
│       │   ├── posts.service.js
│       │   └── posts.data.js
│       ├── post.validation.js
│       ├── posts.controller.js
├── app.js
└── package.json
```

# Setup
Initialize Project
Run `npm init -y` to create a package.json.

## Install Dependencies
`npm install express zod`.

# Tasks
## 1. Logger Middleware
Create a middleware `logger.middleware.js` to log method, URL, and timestamp of every request.

## 2. Auth Middleware
Create `auth.middleware.js` to validate the presence of an Authorization header. Send a `401` Unauthorized response if missing.

## 3. Error Middleware
Create `error.middleware.js` to handle uncaught errors and send `500` Internal Server Error responses.

## 4 .Post Resource: Data and Service
- Implement `posts.data.js` as an in-memory array for storing posts.
- Create `posts.service.js` for CRUD operations:
  - create: Add a new post.
  - findAll: Return all posts.
  - findById: Return a post by ID.
  - update: Modify a post by ID.
  - delete: Remove a post by ID.

## 5. Validation Middleware
- Use Zod in `post.validation.js` to validate title and body fields for creating a post.
- Send a `400` Bad Request with validation errors for invalid inputs.

## 6. Post Controller
- Create `posts.controller.js` to:
  - Handle requests.
  - Call corresponding methods from posts.service.js.
  - Respond with appropriate data or error messages.

## 7. Routes

- Define routes in post.routes.js:
  - POST /posts: Validate and create a post.
  - GET /posts: Retrieve all posts.
  - GET /posts/:id: Retrieve a post by ID.
  - PUT /posts/:id: Update a post by ID.
  - DELETE /posts/:id: Delete a post by ID.
- Use auth.middleware.js for all routes and validateCreatePost for POST /posts.

## 8. App Entry Point
- In app.js:
  - Import middlewares and routes.
  - Register middlewares globally.
  - Use /posts for post-related routes.
  - Add error handling middleware.
  - Start the server on http://localhost:3000.

# Endpoints
## POST /posts

Validation: Requires title (string, non-empty) and body (string, non-empty).
### 1. GET /posts
- Retrieve all posts.

### 2. GET /posts/:id
- Retrieve a single post by ID.

### 3. PUT /posts/:id
- Update an existing post by ID.

### DELETE /posts/:id
- Delete a post by ID.

# Additional Notes
Ensure modularity by separating concerns into middlewares, services, validation, and controllers.
Test using Postman or any REST API tool.

# Convert In-Memory Posts to MongoDB

## Objective
Refactor the existing `posts.service.js` to replace the in-memory posts array with MongoDB as the data source.

## Steps
### Set Up MongoDB:
Ensure that you have MongoDB running locally or provide access to a cloud-based MongoDB instance (e.g., MongoDB Atlas).

### Integrate Mongoose:
Update the service to use `Mongoose` for data modeling and CRUD operations.

### Define a Post Model:
- Create a `Mongoose` schema for `Post` with `title (string, required)` and `body (string, required)`.
- Refactor CRUD Functions: Replace operations on the posts array with MongoDB queries using `Mongoose` methods like `save`, `find`, `findById`, `findByIdAndUpdate`, and `findByIdAndDelete`.

### Preserve Functionality:
- The refactored service should have the same exported methods (`create`, `findAll`, `findById`, `update`, `delet`).
- Ensure the function signatures and expected inputs/outputs stay the same.

### Add Error Handling:
Handle errors such as database connection failures or validation errors.

### Test the Refactored Code:
Write a small script to test the refactored service with sample data.