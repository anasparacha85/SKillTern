# SkillTern 🎓💼  
A scalable MERN-based platform that bridges **skill development** with **job opportunities**. SkillTern empowers users to upskill through interactive courses while enabling instructors to create and share learning content — all under a robust role-based system.

## 🚀 Features

### 👤 Role-Based Dashboards
- **Admin Panel**: Manage users, instructors, courses, and platform settings
- **Instructor Dashboard**: Upload, manage, and track courses and videos
- **User Dashboard**: Enroll in courses, view progress, and manage profile

### 🎥 Course Management
- Upload and organize video lessons
- Course categories and tags
- Secure streaming and progress tracking

### 💳 Stripe Integration
- Secure **payment gateway** using Stripe
- Users can **purchase paid courses**
- Payment success/failure handling
- Admin access to **transaction history**

### 🔐 Authentication & Authorization
- Secure login/register (with JWT)
- Role-based access control
- Instructor & Admin approval workflows (optional)

### 📊 Dashboards & Analytics
- Instructor insights (views, enrollments)
- Admin statistics & earnings
- Personalized learning dashboard for users

## 🛠️ Tech Stack

| Technology       | Usage                  |
|------------------|------------------------|
| **MongoDB**      | Database               |
| **Express.js**   | Backend API            |
| **React.js**     | Frontend UI            |
| **Node.js**      | Runtime environment    |
| **Tailwind CSS** | Styling                |
| **JWT**          | Auth tokens            |
| **Redux Toolkit**| State management       |
| **Multer / Cloudinary** | File & media uploads |
| **Stripe**       | Payment processing     |

## 🧪 Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/skilltern.git
cd skilltern

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
