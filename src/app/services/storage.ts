import { users } from '../interfaces/users';
import {Component, OnInit} from '@angular/core';
import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable({
 providedIn: 'root'
})

export class storage {

 
 
 constructor() {  }
 static getDataUsers(): Array<users> {
  return JSON.parse(window.localStorage.getItem("users"));
 }
 /*static getDataUser(identification: string): users {
  return (this.getDataUsers() ?? []).find((user) => user.identification === identification);
 }*/
  static async createUser(newUser: users) {

   await fetch('https://shrouded-thicket-66753.herokuapp.com/createUser',{
    method: 'POST', 
    headers: {
     'Content-Type': 'application/json'
    },
   body: JSON.stringify(newUser)
   })
 }
 static async getDataUser(identification: string): Promise<users> {
  const response= await fetch(`https://shrouded-thicket-66753.herokuapp.com/findUser/${identification}`);  
  const data:users = await response.json();  
  return  Object.keys(data).length ? data : undefined;
  /*
  let dataUsers: Array<users> = this.getDataUsers() ?? [];
  return dataUsers.find((element) => element.identification === identification);*/
 }

 static async editUser(dataUser: users) {
  await fetch('https://shrouded-thicket-66753.herokuapp.com/editUser',{
    method: 'PUT', 
    headers: {
     'Content-Type': 'application/json'
    },
   body: JSON.stringify(dataUser)
   })
 }
}