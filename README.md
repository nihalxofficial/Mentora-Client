# 📚 Mentora — Online Learning Management System

> **Unlock your potential with expert-led courses.** Mentora is a full-stack LMS (Learning Management System) platform where students can browse, enroll in, and learn from high-quality courses, and instructors can publish and manage their own content.

🌐 **Live Demo (Client):** [mentora-lms-platform.vercel.app](https://mentora-lms-platform.vercel.app/)
🖥️ **Live Demo (Server):** [mentora-server-sandy.vercel.app](https://mentora-server-sandy.vercel.app/)

| Repo | Link |
|---|---|
| 📁 Client Repository | [github.com/nihalxofficial/Mentora-Client](https://github.com/nihalxofficial/Mentora-Client) |
| 📁 Server Repository | [github.com/nihalxofficial/Mentora-Server](https://github.com/nihalxofficial/Mentora-Server) |

---

## ✨ Features

### 🎓 For Students
- Browse a catalog of expert-led courses across multiple categories
- Search and filter courses by category, duration, and price
- View detailed course pages with lesson breakdowns and instructor info
- Enroll in courses and track learning progress via a personal dashboard
- Responsive design for seamless learning on any device

### 🧑‍🏫 For Instructors
- Add and publish new courses directly from the platform
- Define course structure: weeks, lessons, pricing, and thumbnail
- Manage published courses from the instructor dashboard

### 🔐 Authentication & Accounts
- Secure sign-up and login powered by **BetterAuth**
- User profile and settings management
- Role-based access (student vs. instructor)

### 🖥️ Platform
- Fast, SEO-friendly pages with **Next.js** App Router
- Toast notifications for real-time user feedback
- Modern, accessible UI components via **Hero UI**
- Fully responsive layout with **Tailwind CSS**

---

## 🗂️ Course Categories

| Category | Example Course |
|---|---|
| Web Development | Complete MERN Stack Development |
| Frontend Development | Advanced Next.js Masterclass |
| Backend Development | Node.js Backend Engineering |
| Design | UI/UX Design Bootcamp |
| DevOps | DevOps & CI/CD Pipeline |
| Data Science | Python for Data Science |
| Cyber Security | Cyber Security Essentials |
| Mobile Development | React Native App Development |

---

## 🛠️ Tech Stack

### Frontend
- **React** — Component-based UI
- **Next.js** — Full-stack React framework with App Router & SSR
- **Tailwind CSS** — Utility-first CSS styling
- **Hero UI** — Accessible, pre-built UI component library
- **Swiper.js** — Touch-friendly slider and carousel component
- **React Toast** — Lightweight toast notification system
- **ES6+** — Modern JavaScript (arrow functions, async/await, destructuring, modules)

### Backend & Database
- **MongoDB** — NoSQL document database for storing users, courses, and enrollments
- **MongoDB Atlas** — Cloud-hosted MongoDB service
- **Next.js API Routes** — Serverless backend endpoints

### Auth & Security
- **BetterAuth** — Authentication library handling sessions, sign-in, and sign-up
- **JWT (JSON Web Tokens)** — Stateless token-based authentication and route protection
- **jose-cjs** — JWT verification and signing in Next.js middleware and API routes

### Deployment
- **Vercel** — Hosting and CI/CD for the Next.js application

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18+`
- npm or yarn
- A MongoDB Atlas account and connection URI

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/mentora-lms-platform.git
cd mentora-lms-platform

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env.local
```

### Environment Variables

Create a `.env.local` file in the root directory and fill in the following:

```env
# MongoDB
MONGODB_URI=your_mongodb_atlas_connection_string

# BetterAuth
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000

# Next.js
NEXTAUTH_URL=http://localhost:3000
```

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
mentora-lms-platform/
├── app/                    # Next.js App Router pages
│   ├── (home)/             # Landing page
│   ├── courses/            # Course listing & detail pages
│   ├── add-course/         # Instructor course creation
│   ├── dashboard/          # Student/instructor dashboard
│   └── settings/           # User profile settings
├── components/             # Reusable React components
├── lib/                    # Utility functions & DB connection
├── models/                 # MongoDB/Mongoose data models
├── public/                 # Static assets
└── styles/                 # Global styles
```

---

## 📦 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Hero UI](https://www.heroui.com/)
- [Swiper.js](https://swiperjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/atlas)
- [BetterAuth](https://www.better-auth.com/)
- [JWT](https://jwt.io/)
- [jose](https://github.com/panva/jose)
- [Vercel](https://vercel.com/)

---

<p align="center">Made with ❤️ by the Mentora Team · © 2026 Mentora Inc.</p>
