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

const getSingleThought = async (req, res) => {
  try {
    const thought = await Thought.findOne({ _id: req.params.thoughtId }).select(
      "-__v"
    );
    if (!thought) {
      res.status(404).json({ message: "No thought found with that ID" });
    } else {
      res.status(200).json(thought);
    }
  } catch (er) {
    res.status(500).json(er);
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

const updateThought = async (req, res) => {
  try {
    const selectedThought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      req.body,
      { new: true }
    );
    if (!selectedThought) {
      res.status(404).json({
        message: "No thought found. Please check to see if _id is correct.",
      });
    } else {
      res.status(200).json(selectedThought);
    }
  } catch (er) {
    res.status(500);
    console.log(er);
  }
};

const deleteThought = async (req, res) => {
  try {
    const selectedThought = await Thought.findOneAndDelete({
      _id: req.params.thoughtId,
    });
    if (!selectedThought) {
      res.status(404).json({
        message: "No thought found. Please check to see if _id is correct.",
      });
    } else {
      res.status(200).json(selectedThought);
    }
  } catch (er) {
    res.status(500);
    console.log(er);
  }
};

const postReaction = async (req, res) => {
  try {
    const selectedThought = await Thought.findOneAndUpdate(
      {
        _id: req.params.thoughtId,
      },
      { $push: { reactions: req.body } },
      { new: true }
    );
    res.status(200).json(selectedThought);
  } catch (er) {
    res.status(500);
    console.log(er);
  }
};

const deleteReaction = async (req, res) => {
  try {
    const selectedThought = await Thought.findOne({
      _id: req.params.thoughtId,
    });
    selectedThought.reactions.push(req.body);
    const updatedReaction = await selectedThought.save();
    res.status(200).json(updatedReaction);
  } catch (er) {
    res.status(500);
    console.log(er);
  }
};

module.exports = {
  getAllThoughts,
  createThought,
  deleteThought,
  getSingleThought,
  updateThought,
  postReaction,
};
