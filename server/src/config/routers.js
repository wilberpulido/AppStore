const register = require('../controller/registerUser');

const express = require('express');
const router = express.Router();

router.use('/register',register);


module.exports = router;