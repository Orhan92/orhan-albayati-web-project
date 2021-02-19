"use strict";
// GOOGLE SCRIPT LOGIN START**********************
// function onSuccess(googleUser) {
//   console.log("Logged in as: " + googleUser.getBasicProfile().getName());
// }
// function onFailure(error) {
//   console.log(error);
// }
// function renderButton() {
//   gapi.signin2.render("my-signin2", {
//     scope: "profile email",
//     width: 240,
//     height: 50,
//     longtitle: true,
//     theme: "dark",
//     onsuccess: onSuccess,
//     onfailure: onFailure,
//   });
// }
//GOOGLE SCRIPT LOGIN END************************

//GLOBAL CONSTS
const registerClick = document.querySelector(".btn");
const loginClick = document.querySelector(".login-btn");

//REGISTER
//Skapa en array som tar emot object "member".  (Gör den global i skriptet)
//member objectet har 3 properties. username, email, password.
//Om samma email eller samma username redan existerar så pushar vi inte in inputen till member objectet.

registerClick.addEventListener("click", function () {
  //FUNCTION HERE
});

//LOGIN
//Vi loopar igenom arrayen som består av member object och ser om username matchar lösenordet till den usern.
//Om så är fallet så redirectar vi använderen på hemsidan till logged-in.html
//Om inte så skriver vi ut att vi inte hittar någon sådan användare i form av popup eller alert().

loginClick.addEventListener("click", function () {
  //FUNCTION HERE
  async function getText(file) {
    let myObject = await fetch(file);
    let myJson = await myObject.json();
    let text = JSON.stringify(myJson);
    console.log(text);
  }
  getText("users.json");
});
