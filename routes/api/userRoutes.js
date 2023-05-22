const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  addUserFriend,
  updateUser,
  deleteUser,
  deleteUserFriend,
} = require("../../controllers/UserController");

//This is http://localhost:3001/api/users routing

router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

router
  .route("/:userId/friends/:friendId")
  .post(addUserFriend)
  .delete(deleteUserFriend);

module.exports = router;
