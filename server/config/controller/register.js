const express = require('express');
const router = express.Router();
const UserService = require('../services/UserService');

router.post('/', async(req,res)=>{

    const result = await UserService.createUser(db,req.body);

    if (result) {
        res.status(200).redirect('../../');
    }

});
  // "babel-jest": "^26.3.0"
  //    "mysql-server-5.7-osx-x64": "^100.0.8"