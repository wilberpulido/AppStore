class User {
    user_name;
    password;
    first_name;
    last_name;
    email;
    developer;

    constructor(user_name,password,first_name,last_name,email, developer){
        this.user_name = user_name;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.developer = developer;

    }
    setUserName(user_name){
        this.user_name = user_name;
    }
    setPassword(password){
        this.password= password;
    }
    setFirstName(first_name){
        this.first_name = first_name;
    }
    setLastName(last_name){
        this.last_name = last_name;
    }
    setEmail(email){
        this.email= email;
    }
    setDeveloper(boolean){
        this.developer = boolean;
    }
    getUserName(){
       return this.user_name;
    }
    getPassword(){
        return this.password;
    }
    getFirstName(){
        return this.first_name;
    }
    getLastName(){
        return this.last_name;
    }
    getEmail(){
        return this.email;
    }
    getDeveloper(){
        return this.developer;
    }

}

module.exports = User;