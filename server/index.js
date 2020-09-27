const mysql = require('mysql');
const express = require('express');
const router = require('./src/config/routers');

const app = express();

//body parser middleware

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', router);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));