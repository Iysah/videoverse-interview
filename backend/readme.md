
```markdown
# Videoverse Interview - Backend

## Overview
This project provides a backend API service built with Express.js and TypeScript to manage notifications. It includes endpoints for fetching notifications with pagination, marking individual notifications as read.

## Features
- **Notifications Retrieval:** API endpoint to fetch notifications with pagination support.
- **Supports Multiple Types:** Handles various notifications like:
  - Friend Request Received
  - Login from a new device
  - Posted an update
  - Liked your post
  - Commented on your post
  - Shared your post

## Technologies
- **Express.js** – Lightweight web framework for Node.js.
- **TypeScript** – Strongly typed superset of JavaScript.

## Getting Started

### Prerequisites
- Node.js (>=12.x)
- npm or yarn


backend/
├── src/
│   ├── controllers/   # Contains API endpoint logic
│   ├── models/        # Notification data models
│   ├── routes/        # Express routes definitions
│   ├── services/      # Business logic and utilities
│   └── app.ts         # Express app configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Project metadata and dependencies


## Mongo DB URI
MONGODB_URI=mongodb+srv://wale:DoEYI6SF9ixuzFEj@beep.89slz.mongodb.net/?retryWrites=true&w=majority&appName=beep