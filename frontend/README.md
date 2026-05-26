# Finsaar Frontend

Vite + React + TypeScript frontend for the Finsaar trading platform clone.

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- React Router
- Chart.js
- Lucide React

## Structure

```text
frontend/
├── public/              Static assets
├── src/
│   ├── app/             Route composition
│   ├── components/      Reusable UI and dashboard components
│   ├── data/            Local market/watchlist data
│   ├── layouts/         Shared layouts
│   ├── pages/           Route-level pages
│   ├── providers/       React context providers
│   ├── routing/         Router adapters
│   ├── sections/        Marketing page sections
│   └── styles/          Tailwind entry CSS
└── vite.config.ts
```

## Environment

Create `frontend/.env`:

```env
VITE_API_URL=http://localhost:3000
```

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

The dev server runs on `http://localhost:5173` by default.
