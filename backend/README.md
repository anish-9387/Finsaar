# Finsaar Backend

Node.js + Express + TypeScript backend for authentication, portfolio data, orders, and MongoDB persistence.

## Tech Stack

- Node.js
- Express
- TypeScript
- MongoDB
- Mongoose
- JWT
- bcryptjs

## Environment

Create `backend/.env`:

```env
PORT=3000
MONGO_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/finsaar
JWT_SECRET=your_super_secret_key
```

## Commands

```bash
npm install
npm run dev
npm run build
npm start
npm run seed
```

## API Endpoints

- `GET /` - health check
- `POST /auth/signup` - create a user and return a token
- `POST /auth/login` - login and return a token
- `GET /allHoldings` - authenticated holdings list
- `GET /allPositions` - authenticated positions list
- `GET /allOrders` - authenticated orders list
- `POST /newOrder` - place an authenticated order
- `POST /seed` - seed portfolio data for the authenticated user