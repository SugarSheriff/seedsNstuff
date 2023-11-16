// Imports
const router = require("express").Router();

// Import functions from thoughtController.js
const {
  getThoughts,
  getThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// Routes
router.route("/")
  .get(getThoughts)
  .post(createThought);

router.route("/:thoughtId")
  .get(getThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions")
  .post(addReaction);

router.route("/:thoughtId/reactions/:reactionId")
  .delete(deleteReaction);

// Export the router
module.exports = router;
