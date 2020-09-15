const mysql = require('mysql');
// const { async } = require('regenerator-runtime');

    // Create connection
    let db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
    });

    // //connect
    let connection = new Promise((resolve)=>{

    db.connect((err)=>{

    let sqlDatabase = 'CREATE DATABASE IF NOT EXISTS testDataBase';
    let sqlTableUser = 'CREATE TABLE IF NOT EXISTS users(id INT AUTO_INCREMENT,user_name VARCHAR(50) UNIQUE, password VARCHAR(50),first_name VARCHAR(50),last_name VARCHAR(50),email VARCHAR(50) UNIQUE,developer BOOLEAN,PRIMARY KEY(id))';
    let sqlTableApps = 'CREATE TABLE IF NOT EXISTS apps(id INT AUTO_INCREMENT,id_creator_user INT,app_name VARCHAR(30) UNIQUE,category VARCHAR(20),price DOUBLE,application_details VARCHAR(255),img_logo MEDIUMBLOB,date_create TIMESTAMP,PRIMARY KEY(id),FOREIGN KEY (id_creator_user) REFERENCES users(id))';
    let sqlTablePurchased = 'CREATE TABLE IF NOT EXISTS purchased(id INT AUTO_INCREMENT,id_app_buyer INT,id_user_buyer INT,price DOUBLE,date_purchase TIMESTAMP,PRIMARY KEY(id),FOREIGN KEY (id_user_buyer) REFERENCES users(id),FOREIGN KEY (id_app_buyer) REFERENCES apps(id))';
    let sqlTableWishList = 'CREATE TABLE IF NOT EXISTS wishList(id INT AUTO_INCREMENT,id_app_wish INT,id_user_wish INT,PRIMARY KEY(id),FOREIGN KEY (id_user_wish) REFERENCES users(id),FOREIGN KEY (id_app_wish) REFERENCES apps(id))';

    if (err) throw err;

    //If not exists testDataBase, create database nodemysql!!
    db.query(sqlDatabase, (err,result) => {
        if (err) throw err;
        return true;
    });
    db.changeUser(
        {database: 'testDataBase'} , (err)=>{
        if(err) throw err;
    });
    //If not exist tableUser, create.
    db.query(sqlTableUser, (err,result) => {
        if(err) throw err;
        return true;

    });
    //If not exist tableApps, create.
    db.query(sqlTableApps, (err,result) => {
        if(err) throw err;
        return true;

    });
    //If not exist tablePurchase, create
    db.query(sqlTablePurchased, (err,result) => {
        if(err) throw err;
        return true;

    });
    //If not exist tableWish, create
    db.query(sqlTableWishList, (err,result) => {
        if(err) throw err;
        return true;
    });
})
resolve(db);
})

let dbTest = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testDataBase'
});

export {dbTest,connection};