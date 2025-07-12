# Skill Swap Platform - Backend API

> **Important Note**: Due to network limitations and time constraints during development, we were unable to fully implement and connect the frontend interface. However, the backend API is nearly complete with all core functionality implemented and tested.

## Project Status
- ✅ **Backend**: 95% complete (All major features implemented)
- ⚠️ **Frontend**: Basic scaffolding only (Not fully connected)
- 🔌 **API**: Fully functional and ready for frontend integration

## Table of Contents
1. [API Overview](#api-overview)
2. [Key Features](#key-features)
3. [Authentication](#authentication)
4. [User Management](#user-management)
5. [Skill System](#skill-system)
6. [Swap Functionality](#swap-functionality)
7. [Admin Controls](#admin-controls)
8. [Data Models](#data-models)
9. [Error Handling](#error-handling)
10. [Setup Instructions](#setup-instructions)
11. [Future Improvements](#future-improvements)

---

## API Overview
A RESTful API for a skill-sharing platform where users can:
- Create profiles with their skills
- Connect with other users
- Initiate skill swaps
- Rate completed exchanges
- Manage friend networks

**Base URL**: `http://localhost:8000/api`

---

## Key Features

### Completed Backend Features
- JWT authentication system
- User profile management
- Skill catalog with approval system
- Friend request workflow
- Swap negotiation system
- Rating system for completed swaps
- Admin moderation tools

### Pending Frontend Integration
- User registration flow
- Skill browsing interface
- Swap management dashboard
- Real-time notifications
- Rating submission UI

---

## Authentication

| Endpoint       | Method | Description                          | Parameters                          |
|----------------|--------|--------------------------------------|-------------------------------------|
| `/auth/signup` | POST   | Register new user                    | name, email, password, [adminKey]   |
| `/auth/login`  | POST   | Authenticate user                    | email, password                     |
| `/auth/logout` | GET    | Terminate session                    | (Requires auth token)               |

**Sample Login Request**:
```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

---

## User Management

### Profile Endpoints

| Endpoint    | Method | Description               |
|-------------|--------|---------------------------|
| `/users/me` | GET    | Get current user profile  |
| `/users/me` | PUT    | Update profile information|

### Friend System

| Endpoint                                   | Method | Description           |
|--------------------------------------------|--------|-----------------------|
| `/users/friends/request/:userId`          | POST   | Send friend request   |
| `/users/friends/respond/:requestId`       | PUT    | Accept/reject request |
| `/users/friends/:friendId`                | DELETE | Remove friend         |

---

## Skill System

| Endpoint        | Method | Description        | Access Level |
|-----------------|--------|--------------------|--------------|
| `/skills`       | GET    | List all approved skills | Public |
| `/skills/:id`   | GET    | Get skill details   | Public       |
| `/skills`       | POST   | Create new skill    | Admin        |
| `/skills/:id`   | PUT    | Update skill        | Admin        |

---

## Swap Functionality

| Endpoint                  | Method | Description            |
|---------------------------|--------|------------------------|
| `/swaps`                  | POST   | Initiate new swap      |
| `/swaps/:id/respond`      | PUT    | Accept/reject swap     |
| `/swaps/:id/rate`         | PUT    | Submit rating          |
| `/swaps/:id/complete`     | PUT    | Mark swap as complete  |

---

## Admin Controls
(Admin endpoints to be documented in `API SPECS.md`)

---

## Data Models

### User
```json
{
  "id": "ObjectId",
  "name": "String",
  "email": "String",
  "skillsOffered": ["SkillId"],
  "skillsWanted": ["SkillId"],
  "friends": ["UserId"],
  "friendRequests": {
    "sent": [{
      "to": "UserId",
      "status": "String"
    }],
    "received": [{
      "from": "UserId",
      "status": "String"
    }]
  }
}
```

Complete documentation available in **API SPECS.md**

---

## Error Handling
To be covered in `API SPECS.md`.

---

## Setup Instructions

1. **Clone repository**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure `.env` file**
   ```
   MONGODB_URI=your_connection_string
   JWT_SECRET=your_secret_key
   ADMIN_SECRET=your_admin_key
   ```

4. **Start server**
   ```bash
   npm start
   ```

---

## Future Improvements

- Frontend integration
- Real-time notifications
- Advanced search filters
- Skill verification system
- Mobile app development
