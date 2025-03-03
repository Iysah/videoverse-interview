
## Videoverse Interview - Frontend

npm install
# or
yarn install

npm run dev
# or
yarn dev


frontend/
├── app/              # Next.js pages
├── components/       # Reusable React components
├── styles/           # Tailwind CSS configurations and styles
└── public/           # Static assets



---

**README-BACKEND.md**

```markdown
# Notification API - Backend

## Overview
This project provides a backend API service built with Express.js and TypeScript to manage notifications. It includes endpoints for fetching notifications with pagination, marking individual notifications as read, and (optionally) marking all notifications as read.

## Features
- **Notifications Retrieval:** API endpoint to fetch notifications with pagination support.
- **Mark as Read:** Endpoint to mark a single notification as read.
- **Bonus Feature:** Option to mark all notifications as read.
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

### Installation
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
