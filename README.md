AI Recommendation System
This project is a Node.js-based backend application for recommending AI tools tailored to user needs. It connects to a MongoDB database, stores detailed information about various AI tools, and provides endpoints for retrieving recommendations.

Features
AI Tool Storage: Store and manage data for AI tools, including their name, description, category, features, and use cases.
Custom Recommendations: Search for tools based on user needs, such as specific categories, features, or use cases.
Database Seeding: Preload the MongoDB database with sample AI tool data for testing and demonstration.
RESTful API: Expose endpoints for retrieving AI tool recommendations via HTTP.

Tech Stack
Node.js: Backend framework for building the server and APIs.
Express.js: Middleware for handling routes and HTTP requests.
MongoDB: NoSQL database for storing AI tool information.
Mongoose: ODM for managing MongoDB interactions.
dotenv: Manage environment variables securely.
Postman: API testing and debugging tool.

Endpoints
GET /: Health check endpoint to confirm the server is running.
POST /api/recommendations/get-tools: Fetch recommended AI tools based on user input.
