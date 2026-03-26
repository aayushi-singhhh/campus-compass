# Backend Reference (Express + MongoDB)

This frontend prototype uses mock data. To connect a real backend:

## Structure
```
server/
  routes/locations.js    – GET /locations, GET /route
  models/Location.js     – Mongoose schema
  controllers/locations.js – Business logic
  server.js              – Express entry point
  .env.example           – MONGO_URI, PORT
```

## Location Schema (Mongoose)
```js
const locationSchema = new mongoose.Schema({
  name: String,
  latitude: Number,
  longitude: Number,
  description: String,
});
```

## API Endpoints
- `GET /api/locations` → returns all locations
- `GET /api/route?from=<id>&to=<id>` → returns mock route

## Setup
1. `cd server && npm install`
2. Copy `.env.example` to `.env` and set `MONGO_URI`
3. `npm run seed` to populate sample data
4. `npm start`

Then update `src/services/api.ts` to call the real endpoints.
