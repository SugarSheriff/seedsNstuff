// Imports
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

// Constants
const PORT = process.env.PORT || 3001;

// Create Express application
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Connect to the database and start the server
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
  });
});
