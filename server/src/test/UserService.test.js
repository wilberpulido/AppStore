
import {dbTest, connection} from './dbTest';

const mysql = require('mysql');
const UserService = require('../services/UserService');

const User = require('../models/User');
const newUser = new User('WilberPulido','password','Wilber','Pulido','pulidowilber@gmail.com',true);

beforeAll(async()=>{
await connection;

});

afterAll(async()=>{
  await dbTest.end();
  await connection.then(resolve=> resolve.end());
})

describe('Services for user tasks', () => {

  
  describe('Service createUser', () => {

    afterEach(async()=>{
      await new Promise((resolve)=>{
        dbTest.query('DELETE FROM users WHERE user_name = "WilberPulido"',(err,result)=>{
          resolve(result);
        });
      });
    })

    test('The user enters all the necessary data to create an account,user with no last name.', async() => {

      newUser.setLastName('');

      await expect(UserService.createUser(dbTest,newUser)).resolves.toBeFalsy();

      newUser.setLastName('Pulido');
      
      });

    test('The user enters all the necessary data to create an account, user with no password.', async() => {

      newUser.setPassword('');

      await expect(UserService.createUser(dbTest,newUser)).resolves.toBeFalsy();

      newUser.setPassword('password');

    });

    test('check if there is not a user in the database with the same username as the new user', async() => {
      //Create user in the database for check username

      await new Promise((resolve)=>{
        dbTest.query('INSERT INTO users SET?', newUser ,(err,result)=>{
          resolve(result);
        });
      });

      await expect(UserService.createUser(dbTest,newUser)).resolves.toBeFalsy();

    });

    test('check if there is not a user in the database with the same email as the new user', async() => {
      //Create user in the database for check email
      await new Promise((resolve)=>{
        dbTest.query('INSERT INTO users SET?', newUser ,(err,result)=>{
          resolve(result);
        });
      });
      //change user_name for test with email
      newUser.setUserName('OtherUser_name');

      await expect(UserService.createUser(dbTest,newUser)).resolves.toBeFalsy();
    
      newUser.setUserName('WilberPulido');

      });

      test('Create newUser in the database',async()=>{

        await UserService.createUser(dbTest,newUser);

        let result = await new Promise((resolve)=>{
          dbTest.query('SELECT * FROM users WHERE user_name =?',[newUser.user_name],(err,result)=>{
            resolve(result[0].user_name);
          })
        }).then(res=>{return res});

        await expect(result).toMatch(/WilberPulido/);

      });

    test('The user is created with a coded password',async()=>{

      await UserService.createUser(dbTest,newUser);

      let result = await new Promise((resolve)=>{
        dbTest.query('SELECT * FROM users WHERE user_name =?',[newUser.user_name],(err,result)=>{
          resolve(result[0].password);
        })
      }).then(res=>{return res});

      await expect(result).not.toMatch(/password/);

    });
  });

  describe('test for selectUserForUserName', () => {

    beforeAll(async()=>{
      await new Promise((resolve)=>{
        dbTest.query('INSERT INTO users SET?', newUser ,(err,result)=>{
          resolve(result);
        });
      });
    });
    afterAll(async()=>{
      await new Promise((resolve)=>{
        dbTest.query('DELETE FROM users WHERE user_name = "WilberPulido"',(err,result)=>{
          resolve(result);
        });
      });
    });

    test('the user exists by username in the database', async()=>{

      let result = UserService.selectUserForUserName(dbTest,newUser);
      await expect(result).resolves.toBeTruthy();

    });

    test('there is NO user by username in the database', async()=>{
      newUser.user_name = "OtherUser";

      let result = UserService.selectUserForUserName(dbTest,newUser);
      await expect(result).resolves.toBeFalsy();

      newUser.user_name = "WilberPulido";

    });
    


  })

})