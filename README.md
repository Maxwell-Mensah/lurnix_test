# lurnix_test
# Startup API

## Description
Create a simple RESTful API using Node.js and TypeScript that manages startup information.  
This project introduces modern web development technologies, database management, API documentation, and cloud deployment.

## Features
- Create a new startup
- List all startups

## Tech Stack
- **Runtime:** Node.js (v18+)
- **Language:** TypeScript
- **Framework:** Express.js
- **Database:** MongoDB Atlas (cloud)
- **Documentation:** Swagger/OpenAPI 3.0
- **Deployment:** Render.com
- **Version Control:** Git + GitHub

## Installation

1. Clone the repository:
# bash
git clone https://github.com/Maxwell-Mensah/lurnix_test
cd startup-api

## Install dependencies
# bash
npm install
npm.cmd init -y
npx tsc --init 
npm install typescript ts-node @types/node --save-dev 
npm install mongodb 
npm install dotenv 
npm install express 
npm install @types/express --save-dev 
npm install mongoose
npm install swagger-jsdoc swagger-ui-express
npm install -D @types/swagger-jsdoc @types/swagger-ui-express
npm install yamljs
npm install --save-dev @types/yamljs 

## Modify the .env file to connect your database to the API
**MONGO_URI=** <your-mongodb-uri>

## Run the Project
# Development mode:

**npm run dev**

## API Endpoints

# POST /api/startups
**Purpose:** Create a new startup
**Response:** Created startup object with generated ID

# GET /api/startups
**Purpose:** Retrieve all startups
**Response:** Array of all startup objects

# API Documentation
Swagger documentation is available at:
**http://localhost:5000/api-docs**

# Testing
You can test the API using:

- Postman

- Thunder Client

## Author
Maxwell
