const mysql = require('mysql');
const bcrypt = require('bcrypt');
// const { async } = require('regenerator-runtime');

class UserService {
    user;

    createUser(db,user){

        let userPromise = new Promise((resolve,reject)=>{

            if (!user.user_name || !user.password || !user.first_name || !user.last_name || !user.email || !user.developer){
                resolve(false);
            }


            let sqlSelectUser = 'SELECT * FROM users WHERE user_name=?';
            let sqlSelectEmail = 'SELECT * FROM users WHERE email = ?';
            let sqlCreateUser = 'INSERT INTO users (user_name,password,first_name,last_name,email,developer) VALUES (?,?,?,?,?,?)';

            //SelectUser for userName

            db.query(sqlSelectUser , user.user_name , (err,result) => {
                if (err) {
                    return reject(err);
                }
                if (typeof result[0] !== 'undefined') {
                    return resolve(false);
                }
            });

            //Select user for email.
            db.query(sqlSelectEmail , user.email , (err,result) => {
                if (err) {
                    return reject(err);
                }
                if (typeof result[0] !== 'undefined') {
                    return resolve(false);
                }
            });

            // Store hash in your password DB.
            bcrypt.hash(user.password, 10 ,  function(err, hash) {
                // Create user in the database
                if (err) {
                    reject(err);
                }

                db.query(sqlCreateUser , [user.user_name, hash , user.first_name, user.last_name, user.email, user.developer] , (error,result) => {
                    if (err) {
                    return reject(error);
                    }
                    return resolve(true);
                });
            });
        })
                return userPromise;
    }

    selectUser(db,user){
        return true;
    }
    updateUser(db,user){
        return true;
    }
    deleteUser(db,user){
        return true;
    }

    getUser(user){
        this.user = user;
    }

}



  module.exports = new UserService;