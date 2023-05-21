const router = require("express").Router();
const { getUsers, getSingleUser, createUser, addUserFriend, updateUser } = require('../../controllers/UserController')

//This is http://localhost:3001/api/users routing

router.route("/").get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser);

router.route('/:userId/friends/:friendId').post(addUserFriend)

module.exports = router;
