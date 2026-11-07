```
HTTP Request
     │
     ▼
[ src/index.js ]            <-- Boots express, loads middlewares, connects to DB
     │
     ▼
[ src/routes/todo.routes.js ] <-- Matches path (e.g., POST /todos) & HTTP verb
     │
     ▼
[ src/schemas/todo.schema.js ] <-- Validates req.body, req.params, or req.query (Zod)
     │
     ▼
[ src/models/todo.model.js ]   <-- Interacts with MongoDB via Mongoose
     │
     ▼
HTTP Response (JSON + Status Code)
```
## Flow of my implementation.
1. Started with installing dependencies
`npm install express mongoose dotenv zod `
2. Created the database schema and model in models/todo.model.js, but have not yet connected to the database. The database itself has been created.
3. created the zod todo schemas for input validation
4. connect Db on `db.js`
5. prepare the `index.js`.
6. Prepare the routes.