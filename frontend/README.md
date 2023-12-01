## Note about proxy in package.json
 The "proxy" field allows you to specify that any requests that the frontend makes to a specific endpoint (e.g., /api) should be redirected to another server, like http://localhost:8000. This way, you can use the same port for both the frontend and backend servers.

 It's important to note that this setting only applies during development. When the app is built for production, this proxy configuration is not used, and the frontend communicates directly with the specified endpoints.