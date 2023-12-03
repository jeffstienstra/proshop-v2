## Note about "proxy" in FE package.json
 The "proxy" field allows you to specify that any requests that the frontend makes to a specific endpoint (e.g., /api) should be redirected to another server, like http://localhost:8001. This way, you can use the same port for both the frontend and backend servers.

 It's important to note that this setting only applies during development. When the app is built for production, this proxy configuration is not used, and the frontend communicates directly with the specified endpoints.

 ## PORTS in dev
 The ports have been configured to avoid conflicts with other local projects:
    -FE:3001 (React)
    -BE:8001 (Node/Express)

## DB Info - MongoDB Atlas (cloud version of MongoDB)
To view ProShop db online:
    -https://cloud.mongodb.com/v2/65688bd9c67dc6127ef40ac1#/overview
    -or open MongoDB Compass app

## Error Handling
Making use of Express's built-in Error Handling:
    -https://expressjs.com/en/guide/error-handling.html