// Imports
const router = require("express").Router();
const apiRoutes = require("./api");

// Middleware
router.use("/api", apiRoutes);

// Catch-all route for wrong routes
router.use((req, res) => res.status(404).send("Wrong route!"));

// Export the router
module.exports = router;
