const router = require('express').Router();

//This is http://localhost:3001/api/thoughts routing

router.route('/').get( (req,res)=>{
    res.send('this is the thought route.. waiting for controllers')
})

module.exports = router