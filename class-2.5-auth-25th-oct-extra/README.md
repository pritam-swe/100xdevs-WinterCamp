Install Bun.

Bun is a runtime + package manager.
You can use Bun for your existing node.js projects as well.

// We are simulating a course selling application

## Folder Structure
```
.
├── src
│   ├── app.js                          ---> "create and export express app. loads routes, middlewares"
│   ├── index.js                        ---> `import app, db, envs and starts server`
│   ├── db.js                           ---> loads mongoose and write the connection logic
│   ├── controllers                     ---> for all main logic handlers
│   │   └── auth.js
│   ├── middlewares                     ---> middleware fns
│   │   └── validate.schema.js
│   ├── models                          ---> db schema and model exports
│   │   └── user.model.js
│   ├── routes                          ---> all routes management
│   │   └── auth.route.js
│   ├── types                           ---> input validation logics
│   │   └── userShape.js
│   └── utils
├── bun.lock                            ---> stores the versions of all dependencies similar to package.lock of nodejs
├── package.json                        ---> configuration of the project
├── README.md
└── tsconfig.json

```