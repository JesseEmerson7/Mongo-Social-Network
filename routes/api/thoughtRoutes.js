const router = require("express").Router();
const {
  getAllThoughts,
  createThought,
  deleteThought,
  getSingleThought,
  updateThought,
  postReaction,
  deleteReaction
} = require("../../controllers/thoughtController");

//This is http://localhost:3001/api/thoughts routing

router.route("/").get(getAllThoughts).post(createThought);

router
  .route("/:thoughtId")
  .get(getSingleThought)
  .delete(deleteThought)
  .put(updateThought);

router.route("/:thoughtId/reactions").post(postReaction).delete(deleteReaction);

module.exports = router;
