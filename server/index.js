const mysql = require('mysql');
const express = require('express');
const router = require('./src/config/routers');

const app = express();

//body parser middleware

//Nota importante! el segmento de codigo app.post, sera reescrito y dividido en servicioUser, controlado y router.
//Solo los servicios tendran acceso a la base de datos, estos seran usados dentre de los controladores y estos ultimos 
//seran definidos dentro de los routers segun corresponda.

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', router);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));