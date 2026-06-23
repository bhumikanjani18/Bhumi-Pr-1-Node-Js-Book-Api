# 📚 Book Store API

A RESTful API for managing a book store — built with **Node.js**, **Express**, and **MongoDB**. Users must register and login to access protected routes.

---

## 🗂️ Project Structure

```
bookstore-api/
├── configs/
│   ├── database.js        # MongoDB connection setup
│   └── envConfigs.js      # Environment variable loader
├── models/
│   ├── userModel.js       # User schema (name, email, password)
│   └── bookModel.js       # Book schema (title, author, price, etc.)
├── controllers/
│   ├── userController.js  # Register, Login logic
│   └── bookController.js  # CRUD operations for books
├── middlewares/
│   ├── user.validator.js  # Validates user request body
│   └── book.validator.js  # Validates book request body
├── routes/
│   ├── userRoutes.js      # /api/users → register, login
│   └── bookRoutes.js      # /api/books → CRUD
├── .env                   # Environment variables (not committed)
└── index.js               # App entry point
```

---

# Explanation video
https://drive.google.com/file/d/17ovvq7XNvAXQHqmqblXVym4Z6KD8Pczs/view?usp=drive_link

![alt text](<images/Screenshot 2026-06-23 210231.png>) 
![alt text](<images/Screenshot 2026-06-23 210759.png>) 
![alt text](<images/Screenshot 2026-06-23 210854.png>) 
![alt text](<images/Screenshot 2026-06-23 211628.png>)


## ⚙️ Setup & Installation

```bash
# 1. Clone the repo
git clone <your-repo-url>
cd bookstore-api

# 2. Install dependencies
npm install

# 3. Create .env file
cp .env.example .env
# Fill in your values (see below)

# 4. Start the server
npm start
```

### `.env` Variables

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/bookstore
```

---

## 🔐 Auth Flow

User **must register first**, then login to get a JWT token. That token is required for all book routes.

```
POST /api/users/register   →   Create account
POST /api/users/login      →   Get JWT token
```

Use the token in the `Authorization` header:

```
Authorization: Bearer <token>
```

---

## 📡 API Endpoints

### 👤 User Routes — `/api/users`

| Method | Endpoint    | Description       | Auth Required |
|--------|-------------|-------------------|---------------|
| POST   | `/register` | Register new user | ❌ No         |
| POST   | `/login`    | Login & get token | ❌ No         |

### 📖 Book Routes — `/api/books`

| Method | Endpoint  | Description        | Auth Required |
|--------|-----------|--------------------|---------------|
| GET    | `/`       | Get all books      | ✅ Yes        |
| GET    | `/:id`    | Get book by ID     | ✅ Yes        |
| POST   | `/`       | Add new book       | ✅ Yes        |
| PUT    | `/:id`    | Update book by ID  | ✅ Yes        |
| DELETE | `/:id`    | Delete book by ID  | ✅ Yes        |

---

## 🧪 Testing with Postman

1. **Register** → `POST /api/users/register` with `{ name, email, password, confirmpassword }`
2. **Login** → `POST /api/users/login` — copy the returned 
4. Now you can call any book route ✅

---

## 🛡️ Middlewares

- **user.validator.js** — checks required fields on register/login requests
- **book.validator.js** — validates book data before create/update

---

## 🧰 Tech Stack

| Tool       | Purpose              |
|------------|----------------------|
| Node.js    | Runtime              |
| Express.js | Web framework        |
| MongoDB    | Database             |
| Mongoose   | ODM for MongoDB      |
| dotenv     | Environment config   |

---


Built with ❤️ using Node.js — open to contributions and improvements.