"use strict";

class Database {
    getAllUsers = () =>{

        const usersStr = localStorage.getItem('users');
        const usersArr = JSON.parse(usersStr);

        if(usersStr === null){
            return [];
        }else {
            return usersArr
        }
    };

    saveNewUser = (newUser) => {

        const usersArr = this.getAllUsers();

        const updatedUserArr = [...usersArr,newUser];

        const updatedUserStr = JSON.stringify(updatedUserArr);
        localStorage.setItem('users',updatedUserStr);

    }
}
const db = new Database()