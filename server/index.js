const mysql = require('mysql');
const express = require('express');
let db = require('./config/db/db');

const app = express();

//body parser middleware

//Nota importante! el segmento de codigo app.post, sera reescrito y dividido en servicioUser, controlado y router.
//Solo los servicios tendran acceso a la base de datos, estos seran usados dentre de los controladores y estos ultimos 
//seran definidos dentro de los routers segun corresponda.

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post('/register/user',(req,res)=>{
    console.log(req.body);

    //check that all data has been sub-ministered
    if (!req.body.user_name || !req.body.password || !req.body.first_name || !req.body.last_name || !req.body.email || !req.body.developer){
    return res.status(400).json({ msg: 'Please include all value'});
    }
    //check that the user does not repeat himself
    db.query('SELECT * FROM users WHERE user_name=?' , [req.body.user_name] , (err,result) => {
        if (err) {
            throw err;
        }
        if(typeof result[0] !== 'undefined'){
            return res.status(400).json({msg: 'registered User Name'});
        } else {
    //check that the email does not repeat himself
            db.query('SELECT * FROM users WHERE email=?' , [req.body.email] , (err,result) => {
                if (err) {
                    throw err;
                }
                if(typeof result[0] !== 'undefined'){
                    return res.status(400).json({msg: 'registered email'});

                } else{
    //register a user
                    db.query('INSERT INTO users SET?' , req.body , (err) =>{
                        if(err) throw err;

                        console.log('User registered');
                        return res.status(200).json({msg: 'registered user'});

                    });
                }
            });
        };
    });
});



const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));