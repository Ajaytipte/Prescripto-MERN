# 📱 Prescripto MERN Stack Project

A full-stack Doctor Appointment Booking System built using the MERN stack, including payment integrations and an admin panel.

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository:

```bash
git clone https://github.com/Ajaytipte/Prescripto-MERN.git
2️⃣ Install Dependencies:
Navigate to frontend directory and install dependencies:

bash
Copy
Edit
cd frontend
npm install
Navigate to backend directory and install dependencies:

bash
Copy
Edit
cd backend
npm install
Navigate to admin directory and install dependencies:

bash
Copy
Edit
cd admin
npm install
3️⃣ Environment Variables Setup:
📌 Frontend .env
Create a .env file inside the frontend folder and add:

env
Copy
Edit
VITE_BACKEND_URL = 'http://localhost:4000'
VITE_RAZORPAY_KEY_ID = '------ Razorpay Key Id here ------'
📌 Backend .env
Create a .env file inside the backend folder and add:

env
Copy
Edit
CURRENCY = "INR"
JWT_SECRET = "greatstack"

# Admin Panel Credentials
ADMIN_EMAIL = "admin@example.com"
ADMIN_PASSWORD = "greatstack123"

# MongoDB Setup (required)
MONGODB_URI = "DB_url"

# Cloudinary Setup (required)
CLOUDINARY_NAME = "--cloudinary_name---"
CLOUDINARY_API_KEY = "cloudinary_api_key-----"
CLOUDINARY_SECRET_KEY = "--------cloudinary secret key-----"

# Razorpay Payment Integration
RAZORPAY_KEY_ID = "------ Razorpay Key Id here ------"
RAZORPAY_KEY_SECRET = "------ Razorpay Key Secret here ------"

# Stripe Payment Integration
STRIPE_SECRET_KEY = "------ Stripe Secret Key here ------"
4️⃣ Run the Project:
Open terminal, navigate to backend directory and start backend server:

bash
Copy
Edit
npm start
Open another terminal, navigate to frontend directory and start frontend dev server:

bash
Copy
Edit
npm run dev
Open another terminal, navigate to admin directory and start admin panel dev server:

bash
Copy
Edit
npm run dev
📦 Technologies Used
MongoDB: NoSQL database for storing doctor, user, and appointment data.

Express.js: Web application framework for building the backend server.

React.js: JavaScript library for building the user interface.

Node.js: JavaScript runtime environment for executing server-side code.

Tailwind CSS: A utility-first CSS framework for building responsive and modern UI.

JWT (JSON Web Tokens): For secure user authentication and session management.

Cloudinary: Cloud-based image management service.

Razorpay: Indian payment gateway integration.

Stripe: International payment processing platform.
