// Imports
const { User, Thought, Reaction } = require("../models");
const mongoose = require("mongoose");

// Connection to the database
const connection = require("../config/connection");

// Seed data
const usersData = [
  {
    username: "Ryan",
    email: "ryan@gmail.com",
    thoughts: [],
  },
];

// Connect to the database server
mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true });

// Event listener for when the connection is open
mongoose.connection.once("open", async () => {
  console.log("Connected to the database");

  try {
    // Drop existing users
    await User.deleteMany({});

    // Insert seed data into the User collection
    const users = await User.collection.insertMany(usersData);

    console.table(usersData);
    console.info("Seed data added to the User collection.");
  } catch (error) {
    console.error("Error seeding data:", error.message);
  } finally {
    // Close the connection
    mongoose.connection.close();
    console.log("Database connection closed.");
  }
});
