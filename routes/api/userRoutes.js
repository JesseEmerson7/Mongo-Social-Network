const router = require("express").Router();

router.route("/").get((req, res) => {
  res.send("this is the user route.. waiting for controllers");
});

module.exports = router;
