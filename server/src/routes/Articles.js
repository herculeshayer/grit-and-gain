const express = require('express');
const router = express.Router();



//GetOne
router.get('/:id', ( req , res ) => {
    const name = req.params.id;
    res.json({message: name});
})

//Get All


//Create One

//Update One



module.exports = router;

