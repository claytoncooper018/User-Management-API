# 🧠 User Management API

A simple and secure RESTful API for managing users — built with **Node.js** and **Express**, and enhanced/debugged using **GitHub Copilot**.

---

## ✨ Features
✅ CRUD operations for user management  
✅ Input validation middleware  
✅ Logging with Morgan  
✅ Error handling middleware  
✅ Copilot-assisted debugging and refactoring  

---

## 🛠️ Tech Stack
- Node.js
- Express.js
- Morgan
- UUID
- CORS
- GitHub Copilot (AI-assisted development)

---

## ⚙️ Installation
```bash
git clone https://github.com/your-username/user-management-api.git
cd user-management-api
npm install
npm start
```

Server runs on **http://localhost:3000**

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|-----------|--------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get a single user |
| POST | `/api/users` | Create a new user |
| PUT | `/api/users/:id` | Update an existing user |
| DELETE | `/api/users/:id` | Delete a user |

---

## 🧩 Example Request
```bash
POST /api/users
Content-Type: application/json

{
  "name": "Charlie Brown",
  "email": "charlie@example.com"
}
```

Response:
```json
{
  "id": "some-uuid",
  "name": "Charlie Brown",
  "email": "charlie@example.com"
}
```

---

## 💡 Copilot Involvement
GitHub Copilot assisted in:
- Generating CRUD logic
- Suggesting validation improvements
- Debugging route errors
- Enhancing error handling middleware

---

## 📜 License
MIT License © 2025 Clayton Cooper