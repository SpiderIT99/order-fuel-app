const express = require('express');
const Fuel = require('../models/fuel.model');
const router = express.Router();

router.get('/', ( req , res ) =>{
    Fuel.find({},(err,data) =>{
        res.json(data);
    });
});

module.exports = router;
