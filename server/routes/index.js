router = require('express').Router()

router.get('/', (req, res)=>{
    res.json("Welcome to fund management system")
})

module.exports = router