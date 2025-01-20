# Testing the Sequelize ORM with Employee Management System

This README section explains how to test the Employee Management System built using **Node.js**, **Express**, **Sequelize ORM**, and **PostgreSQL**. Follow the steps below to set up and test the application.

---

## Table of Contents
1-Setup Instructions
2-Available API Endpoints
3-Testing with Postman
4-Sample API Requests

---

## Setup Instructions

Follow the steps below to set up and run the project locally:

### 1. Clone the Repository
Clone the project to your local machine:
```bash
git clone https://github.com/Sandhep/Sequelize-ORM.git
cd Sequelize-ORM
```
### 2. Install Dependencies
Install the required Node.js packages:
```bash
npm install
```
### 3.Set Up Environment Variables
Create a **.env** file in the root directory and add the following:
```bash

DB_USER=your_postgres_user
DB_HOST=your_postgres_host
DB_DATABASE=your_postgres_database
DB_PASSWORD=your_postgres_password
DB_PORT=your_postgres_port

```
### 4. Run the Application
Start the application:
```bash
npm start
```
The server should start at http://localhost:3000.

---

## Available API Endpoints

### 1. Create a New Employee (POST)

URL: /employees
Method: POST
Body:
```bash
{
  "name": "John Doe",
  "position": "Software Engineer",
  "salary": 75000
}
``` 
Response:
```bash
{
  "id": 1,
  "name": "John Doe",
  "position": "Software Engineer",
  "salary": 75000,
  "updatedAt": "2025-01-20T12:00:00.000Z",
  "createdAt": "2025-01-20T12:00:00.000Z"
}
```

## 2. Get All Employees (GET)
URL: /employees
Method: GET
Response:
```bash
[
  {
    "id": 1,
    "name": "John Doe",
    "position": "Software Engineer",
    "salary": 75000,
    "updatedAt": "2025-01-20T12:00:00.000Z",
    "createdAt": "2025-01-20T12:00:00.000Z"
  }
]
```

### 3. Get a Specific Employee by ID (GET)
URL: /employees/:id
Method: GET
Response:
```bash 
{
  "id": 1,
  "name": "John Doe",
  "position": "Software Engineer",
  "salary": 75000,
  "updatedAt": "2025-01-20T12:00:00.000Z",
  "createdAt": "2025-01-20T12:00:00.000Z"
}
```

### 4. Delete an Employee (DELETE)

URL: /employees/:id
Method: DELETE
Response:
```bash
{
  "message": "Employee deleted successfully"
}
``` 
---