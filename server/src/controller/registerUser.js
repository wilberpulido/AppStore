const express = require('express');
const router = express.Router();
const UserService = require('../services/UserService');
const db = require('./../db/db');

router.post('/user', async(req,res)=>{

    const result = await UserService.createUser(db,req.body);

    if (result) {
        res.status(200).send('user created with success');

    } else {
        res.status(400).json({msg:'error in user creation'});

    }
});


module.exports = router;