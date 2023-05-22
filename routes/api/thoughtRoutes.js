const router = require('express').Router();
const {getAllThoughts, createThought} = require('../../controllers/thoughtController')

//This is http://localhost:3001/api/thoughts routing

router.route('/').get(getAllThoughts).post(createThought);

module.exports = router