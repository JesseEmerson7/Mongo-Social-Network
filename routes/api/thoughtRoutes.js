const router = require('express').Router();


router.route('/').get( (req,res)=>{
    res.send('this is the thought route.. waiting for controllers')
})

module.exports = router