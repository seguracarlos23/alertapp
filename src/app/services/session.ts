export class session {

 constructor() { }
 static setSesion() {
  window.sessionStorage.setItem("session", "true");
 }
 static getSesion() {
  return window.sessionStorage.getItem("session") === "false" ? false : (window.sessionStorage.getItem("session") === "true") ? true : false;
 }
}