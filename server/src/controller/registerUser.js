const express = require('express');
const router = express.Router();
const UserService = require('../services/UserService');
const db = require('./../db/db');

router.post('/user', async(req,res)=>{

    const result = await UserService.createUser(db,req.body.user);

    if (result) {
        res.status(200).send("se creo usuario");

    } else {
        res.status(400).send("No se creo el usuario");

    }
});

router.post('/user_name', async(req,res)=>{
    const result = await UserService.selectUserForUserName(db,req.body);
    if(result){
        res.status(400).send(true);
    } else {
        res.status(200).send(false);
    }

})
router.post('/email', async(req,res)=>{
    const result = await UserService.selectUserForEmail(db,req.body);
    if(result){
        res.status(400).send(true);
    } else {
        res.status(200).send(false);
    }

})

module.exports = router;