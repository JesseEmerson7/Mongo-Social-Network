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
    const userThought = await User.findByIdAndUpdate(
      {
        _id: newThought.userId,
      },
      { $addToSet: { thoughts: userThought._id } }
    );

    res.status(200).json(newThought);
  } catch (er) {
    res.status(500).json(er);
    console.log(er);
  }
};

module.exports = { getAllThoughts, createThought };
