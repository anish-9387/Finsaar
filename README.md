# Finsaar (Zerodha clone)

A full-stack trading platform clone with a Vite + React frontend and a Node.js + Express + MongoDB backend.

## Project Structure

- `frontend/` - Vite, React, TypeScript, Tailwind CSS, React Router, dashboard and marketing pages.
- `backend/` - Node.js, Express, TypeScript, MongoDB, Mongoose, JWT auth, and portfolio/order APIs.

## Getting Started

Install dependencies in each workspace:

```bash
npm install --prefix frontend
npm install --prefix backend
```

Create `backend/.env`:

```env
PORT=3000
MONGO_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/finsaar
JWT_SECRET=your_super_secret_key
```

Create `frontend/.env`:

```env
VITE_API_URL=http://localhost:3000
```

## Scripts

- `npm run start:frontend` - run only the Vite frontend.
- `npm run start:backend` - run only the Express backend.
- `npm run build` - build frontend and backend.

### Project is live at https://finsaar-zerodha.vercel.app
