const { Thought, User } = require("../models");
//Get all thoughts controller
const getAllThoughts = async (req, res) => {
  try {
    const allThoughts = await Thought.find();
    res.status(200).json(allThoughts);
  } catch (er) {
    res.status(500).json(er);
    console.log(er);
  }
};
//get single thought by id
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
// create thought
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

    res.status(200).json(newThought);
  } catch (er) {
    res.status(500).json(er);
    console.log(er);
  }
};
// update thought by id
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
//delete thought  by id
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
//post reaction to thought
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
//delete reaction by id
const deleteReaction = async (req, res) => {
  try {
    const selectedReaction = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.body.reactionId } } },
      { new: true }
    );
    if (!selectedReaction) {
      res.status(404).json({
        message:
          "No reaction found. Please check to see if reactionId and thought _id is correct .",
      });
    } else {
      res.status(200).json(selectedReaction);
    }
  } catch (er) {
    res.status(500).json(er);
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
  deleteReaction,
};
