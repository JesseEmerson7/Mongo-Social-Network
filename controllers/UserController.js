const User = require("../models/user");

const getUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (error) {
    res.status(500).json(error);
  }
};
// TODO: check back on populate thoughts when thoughts data is in there.
const getSingleUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.userId })
      .populate('friends')
    //   .populate('thoughts')
      .select("-__v");
    if (!user) {
      res.status(404).json({ message: "No user found with that ID" });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

const addUserFriend = async (req, res) => {
  try {
    const selectedUser = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    );
    if (!selectedUser) {
      res.status(404).json({
        message: "No User found. Please check to see if _id is correct.",
      });
    } else {
      res.status(200).json(selectedUser);
    }
  } catch (error) {}
};

const deleteUserFriend = async (req, res) => {
  try {
    const selectedUser = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    );
    if (!selectedUser) {
      res.status(404).json({
        message: "No User found. Please check to see if _id is correct.",
      });
    } else {
      res.status(200).json(selectedUser);
    }
  } catch (error) {}
};

const updateUser = async (req, res) => {
  try {
    const selectedUser = await User.findOneAndUpdate(
      { _id: req.params.userId },
      req.body,
      { new: true }
    );
    if (!selectedUser) {
      res.status(404).json({
        message: "No User found. Please check to see if _id is correct.",
      });
    } else {
      res.status(200).json(selectedUser);
    }
  } catch (error) {}
};

const deleteUser = async (req, res) => {
  try {
    const selectedUser = await User.findOneAndDelete({
      _id: req.params.userId,
    });
    if (!selectedUser) {
      res.status(404).json({
        message: "No User found. Please check to see if _id is correct.",
      });
    } else {
      res.status(200).json(selectedUser);
    }
  } catch (error) {}
};

module.exports = {
  getUsers,
  getSingleUser,
  createUser,
  addUserFriend,
  addUserFriend,
  updateUser,
  deleteUser,
  deleteUserFriend,
};
