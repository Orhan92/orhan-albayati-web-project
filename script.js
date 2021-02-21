"use strict";

//LOGIN SECTION **************************************************
//Starting members
const account1 = {
  username: "warchief",
  password: "hejsan",
};

const account2 = {
  username: "orhan",
  password: "svejsan",
};

const account3 = {
  username: "mofasa",
  password: "truckförare",
};

const account4 = {
  username: "jafar",
  password: "villhajasmine",
};

let accounts = [account1, account2, account3, account4];

const loginButton = document.querySelector(".login-btn");

const inputLoginUser = document.querySelector(".login__input--user");
const inputLoginPsw = document.querySelector(".login__input--psw");

const labelWelcome = document.querySelector(".welcome");

let currentAccount;

//LOGIN FUNCTION
loginButton.addEventListener("click", function (e) {
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUser.value
  );
  //Optional chaining (?.)
  if (currentAccount?.password === inputLoginPsw.value) {
    console.log(currentAccount);
    labelWelcome.textContent = `Welcome back, ${currentAccount.username}`;
  } else {
    //Prevent form from submitting
    e.preventDefault();
    alert("Wrong Username or Password.");
  }
});
//*****************************************************************************/

//REGISTER A USER*******************************
const registerButton = document.querySelector(".btn");
const inputRegUser = document.querySelector(".input-field-user");
const inputRegPsw = document.querySelector(".input-field-psw");

let newActivity = {};
registerButton.addEventListener("click", function (event) {
  event.preventDefault();
  newActivity = {};
  var inputs = document.querySelectorAll(".reg__form input");
  for (var i = 0; i < inputs.length; i++) {
    newActivity[inputs[i].name] = inputs[i].value;
  }
  if (inputRegPsw.value.length >= 6 && inputRegUser.value.length >= 3) {
    accounts.push(newActivity);
    console.log(accounts);
  } else {
    alert(
      "Your Username or Password doesn't match the critera.\n(min username length: 3) AND (min password length: 6)"
    );
    event.preventDefault();
  }
});
console.log(accounts);
//************************************************************************************************* */

//Force username inputs to be lowercase on registration AND login
function forceLower(strInput) {
  strInput.value = strInput.value.toLowerCase();
}
//******************************************************************** */
