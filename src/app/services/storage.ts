import { users } from '../interfaces/users';


export class storage {

 constructor() {

 }
 getDataUsers() {
  return window.localStorage.getItem("users");
 }

 validateUserExists(identification: number): users {
  let dataUsers: Array<users> = JSON.parse(window.localStorage.getItem("users"));
  return dataUsers.find((element) => element.identification === identification);
 }


}