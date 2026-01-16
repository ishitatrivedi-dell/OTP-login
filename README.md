# 🔐 OTP-Based Authentication System (MERN Stack)

A secure **OTP-based authentication system** built with the **MERN stack**, supporting **phone-first login**, **conditional registration**, **multiple OTP delivery channels**, and **JWT-based session management with a 3-hour expiry**.

This project mirrors real-world authentication flows used in fintech, SaaS, and large-scale consumer applications.

---

## 🚀 Features

- 📱 Phone number as the primary login identifier
- 🔍 Existing user detection
- 🔐 OTP-based authentication (no passwords)
- 🆕 Automatic redirection to registration for new users
- ✉️ OTP via **SMS / Email / WhatsApp**
- 🍪 JWT stored in **HTTP-only cookies**
- ⏱️ Session expiry after **3 hours**
- 🧭 Login persistence across multiple tabs
- 🛡️ Secure OTP handling (hashed, expiring, single-use)

---

## 🧠 Authentication Flow

### 1️⃣ Phone Number Entry
User enters phone number → backend checks database.

| Case | Result |
|------|--------|
| Existing user | Send OTP → Verify → Login |
| New user | Redirect to registration |

---

### 2️⃣ Existing User Login Flow
1. OTP sent to registered phone/email  
2. User enters OTP  
3. OTP verified  
4. JWT issued (valid for 3 hours)  
5. Redirect to Dashboard  

---

### 3️⃣ New User Registration Flow
1. User provides:
   - Name
   - Email
   - Phone number
   - Preferred OTP channel
2. OTP sent
3. OTP verified
4. User account created
5. Auto-login
6. Redirect to Dashboard

---

### 4️⃣ Session Handling
- JWT stored in **HTTP-only cookie**
- Shared across browser tabs
- Expires automatically after **3 hours**
- Expired token → redirect to login

---

## 🛠️ Tech Stack

### Frontend
- React
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt

### OTP Services (Pluggable)
- Twilio (SMS / WhatsApp)
- Fast2SMS
- SendGrid / AWS SES (Email)

---

## 🗂️ Database Schema

### User Schema
```js
{
  name: String,
  email: String,
  phone: String,
  isVerified: Boolean,
  createdAt: Date
}
OTP Schema
{
  identifier: String, // phone or email
  otp: String,        // hashed
  channel: String,    // sms | email | whatsapp
  expiresAt: Date,
  attempts: Number
}

🔗 API Endpoints
Method	Endpoint	Description
POST	/auth/check-user	Check if user exists
POST	/auth/send-otp	Send OTP
POST	/auth/verify-otp	Verify OTP & login
POST	/auth/register	Register new user
POST	/auth/register/verify-otp	Verify OTP & auto-login
GET	/auth/me	Get logged-in user
POST	/auth/logout	Logout user
🔐 Security Measures

OTP expiry: 5 minutes

OTP hashing using bcrypt

Maximum OTP attempts: 3

OTP invalidated after verification

Rate-limiting OTP requests

HTTP-only cookies

JWT expiration enforcement

🧪 Test Scenarios

Existing user OTP login

New user registration + OTP

Invalid OTP attempts

OTP expiry handling

Multi-tab authentication

Session expiration after 3 hours

📦 Installation & Setup
# Clone the repository
git clone https://github.com/your-username/otp-auth-mern.git

# Backend setup
cd server
npm install
npm run dev

# Frontend setup
cd client
npm install
npm start

📈 Future Enhancements

Refresh token implementation

Role-based access control

Push-based OTP approvals

Login activity & audit logs

International SMS support

📜 License

MIT License

👩‍💻 Author

Ishita Trivedi
Full Stack Developer (MERN, Next.js, AWS)
