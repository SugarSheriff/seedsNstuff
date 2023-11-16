// Imports
const router = require("express").Router();

// Import functions from userController.js
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

// Routes
router.route("/")
  .get(getUsers)
  .post(createUser);

router.route("/:userId")
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

router.route("/:userId/friends/:friendId")
  .post(addFriend)
  .delete(deleteFriend);

// Export the router
module.exports = router;
