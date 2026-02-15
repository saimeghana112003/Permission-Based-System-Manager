# Permission-Based System Manager

A Local-First Authentication & Authorization Engine built with React.

This project demonstrates how to manage role-based access control, protected routes, and persistent authentication using:

- React
- Context API
- Local Storage
- React Router
- React Hooks (useState, useEffect, useContext)

---

## Project Overview

The Permission-Based System Manager is a logic-driven application that controls:

- What users can see
- What users can edit
- What users can delete
- What users can access

Based on their role:

- Admin
- Editor
- Viewer

---

## Architecture

### 🔹 Authentication Engine
- Login system (no backend required)
- Role-based user simulation
- Protected routes
- Automatic redirect if not authenticated

### 🔹 Authorization Logic
- Role-based rendering
- Conditional UI access
- Admin-only actions
- Route guarding

### 🔹 Persistence System
- Stores user role in localStorage
- Rehydrates authentication on refresh
- Cross-tab logout synchronization

---

##  Core Logic Features

###  Protected Routes
If a user tries to manually access a restricted URL:
- The system intercepts
- Redirects to /login

### 2️⃣ Resource Filtering Engine
Filters resources based on user role:

```js
resource.minRoleRequired <= user.role
