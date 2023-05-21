const router = require("express").Router();
const { getUsers, getSingleUser, createUser, addUserFriend } = require('../../controllers/UserController')

//This is http://localhost:3001/api/users routing

router.route("/").get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser);

router.route('/:userId/friends/:friendId').post(addUserFriend)

module.exports = router;
