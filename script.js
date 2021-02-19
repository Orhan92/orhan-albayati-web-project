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

//REGISTER
//Skapa en array som tar emot object "member".  (Gör den global i skriptet)
//member objectet har 3 properties. username, email, password.
//Om samma email eller samma username redan existerar så pushar vi inte in inputen till member objectet.

// registerClick.addEventListener("click", function () {
//   //FUNCTION HERE
// });

//LOGIN
//Vi loopar igenom arrayen som består av member object och ser om username matchar lösenordet till den usern.
//Om så är fallet så redirectar vi använderen på hemsidan till logged-in.html
//Om inte så skriver vi ut att vi inte hittar någon sådan användare i form av popup eller alert().
// const loginClick = document.querySelector(".login-btn");
// loginClick.addEventListener("click", function () {
//   //FUNCTION HERE
//   getText("users.json");
//   async function getText(file) {
//     let myObject = await fetch(file);
//     let myJson = await myObject.json();
//     document.getElementById("users").innerHTML = JSON.stringify(myJson);
//   }
// });

// getText("users.json");
// async function getText(file) {
//   let myObject = await fetch(file);
//   let myJson = await myObject.json();
//   document.getElementById("users").innerHTML = JSON.stringify(myJson);
// }

async function loadJSON(url) {
  const res = await fetch(url);
  return await res.json();
}
loadJSON("users.json").then((data) => {
  for (let i = 0; i < data.length; i++) {
    let user = [];
    user.push(data[i].username, data[i].password, data[i].email);
    console.log(data[i].username + " | " + data[i].password);
    console.log(user);
    document.getElementById("users").textContent = JSON.stringify(
      "Welcome" + " " + data[0].username
    );
  }
});
