const { Thought, User } = require("../models");

const getAllThoughts = async (req, res) => {
  try {
    const allThoughts = await Thought.find();
    res.status(200).json(allThoughts);
  } catch (er) {
    res.status(500).json(er);
    console.log(er);
  }
};

const createThought = async (req, res) => {
  try {
    const newThought = await Thought.create(req.body);
    const userThought = await User.findOneAndUpdate(
      {
        _id: req.body.userId,
      },
      { $push: { thoughts: newThought._id } },
      { new: true }
    );

    res.status(200).json(userThought);
  } catch (er) {
    res.status(500).json(er);
    console.log(er);
  }
};

module.exports = { getAllThoughts, createThought };
