
# Folder Structure

```
.
├── README.md
├── package-lock.json
├── package.json
└── src
    ├── controllers
    │   ├── createUpdateTodos.js
    │   ├── getTodoHandlers.js
    │   ├── homeHandlers.js
    │   └── patchHandler.js
    ├── db.js
    ├── index.js
    ├── middlewares
    │   └── validation.middleware.js
    ├── models
    │   └── todo.model.js          ---> DB Schema
    ├── routes
    │   ├── home.route.js
    │   └── todo.route.js
    └── schemas
        └── todo.schema.js         ---> Zod Schema

```

## Run locally:
1. `touch .env`
2. add your *Mongodb connection string* to the `.env`
3. `npm install`
4. `npm run dev` ---> will run with `nodemon` or `npm start` ---> node index.js


## Flow of my implementation.
1. Started with installing dependencies
`npm install express mongoose dotenv zod `
2. Created the database schema and model in models/todo.model.js, but have not yet connected to the database. The database itself has been created.
3. created the zod todo schemas for input validation
4. connect Db on `db.js`
5. prepare the `index.js`.
6. Prepare the routes.
   1. Lot's of new learning
   2. how router works
   3. how api routes should look like in url
7. create, get, update, toggle status, change title, delete done as of now.
8. Next targets: implementing filters and sorting and searching.


## Dependencies

```
  "dependencies": {
    "dotenv": "^18.0.9",
    "express": "^5.3.0",
    "mongoose": "^9.12.0",
    "zod": "^4.6.7"
  },
  "devDependencies": {
    "nodemon": "^3.1.14"
  }
```





---


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
[ src/controllers/xyz.handlers.js ] <-- core logic of the operation
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