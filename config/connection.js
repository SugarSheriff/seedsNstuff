// Imports
const mongoose = require("mongoose");

// Creates database connection
const connectionString =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/studentsDB";

// Connects Mongoose and MongoDB
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const dbConnection = mongoose.connection;

// Handle connection events
dbConnection.on("connected", () => {
  console.log("Connected to MongoDB");
});

dbConnection.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

dbConnection.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});

// Exports the database connection
module.exports = dbConnection;
