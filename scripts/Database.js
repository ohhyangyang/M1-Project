"use strict";

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

class Database {
  constructor() {
    _defineProperty(this, "getAllUsers", () => {
      const usersStr = localStorage.getItem("users");
      const usersArr = JSON.parse(usersStr);

      if (usersStr === null) {
        return [];
      } else {
        return usersArr;
      }
    });

    _defineProperty(this, "saveNewUser", (newUser) => {
      const usersArr = this.getAllUsers();
      const updatedUserArr = [...usersArr, newUser];
      const updatedUserStr = JSON.stringify(updatedUserArr);
      localStorage.setItem("users", updatedUserStr);
    });
  }
}

const db = new Database();
