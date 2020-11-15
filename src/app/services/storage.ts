import { users } from '../interfaces/users';


export class storage {


 constructor() {

 }
 static getDataUsers(): Array<users> {
  return JSON.parse(window.localStorage.getItem("users"));
 }
 static getDataUser(identification: string): users {
  return (this.getDataUsers() ?? []).find((user) => user.identification === identification);
 }
 static createUser(newUser: users) {
  let dataUsers = (this.getDataUsers() ?? [])
  dataUsers.push(newUser);

  window.localStorage.setItem("users", JSON.stringify(dataUsers, null, 2))
 }
 static validateUserExists(identification: string): users {
  let dataUsers: Array<users> = this.getDataUsers() ?? [];
  return dataUsers.find((element) => element.identification === identification);
 }

 static editUser(dataUser: users) {
  let dataUsers: Array<users> = (this.getDataUsers() ?? []);
  dataUsers.forEach((user, index) => {
   if (user.identification === dataUser.identification) {
    console.log(user.identification);
    dataUsers[index] = dataUser;
    console.log(dataUsers);
   }
  });
  window.localStorage.setItem("users", JSON.stringify(dataUsers, null, 2))
 }
}