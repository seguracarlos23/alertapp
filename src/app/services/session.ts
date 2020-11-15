export class session {

 constructor() { }
 static setSesion(identification: string) {
  window.sessionStorage.setItem("session", "true");
  window.sessionStorage.setItem("user", identification);
 }
 static getSesion() {
  return window.sessionStorage.getItem("session") === "false" ? false : (window.sessionStorage.getItem("session") === "true") ? true : false;
 }
 static getUserSesion() {
  return window.sessionStorage.getItem("user");
 }
 static logout() {
  window.sessionStorage.removeItem("user");
  window.sessionStorage.removeItem("session");
 }
}