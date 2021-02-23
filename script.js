"use strict";

/*OKTA LOGIN SCRIPT*/
const oktaSignIn = new OktaSignIn({
  baseUrl: "https://dev-30200724.okta.com",
  clientId: "0oa6a3hqxlrvFP4g55d6",
  authParams: {
    issuer: "https://dev-30200724.okta.com/oauth2/default",
  },
  redirectUri:
    "http://127.0.0.1:8080/index.html" /*https://orhan92.github.io/orhan-albayati-web-project/*/ /*Change to this for Pages login*/,
});

oktaSignIn.authClient.token.getUserInfo().then(
  function (user) {
    document.getElementById("messageBox").innerHTML = user.email;
    document.getElementById("logout").style.display = "block"; //Logout button
    document.getElementById("lgn-btn-container").style.display = "flex";
    document.getElementById("psw-disclaimer").style.display = "none";
  },
  function (error) {
    oktaSignIn
      .showSignInToGetTokens({
        el: "#okta-login-container",
      })
      .then(function (tokens) {
        oktaSignIn.authClient.tokenManager.setTokens(tokens);
        oktaSignIn.remove();

        const idToken = tokens.idToken;
        document.getElementById("messageBox").innerHTML = idToken.claims.email;
        document.getElementById("logout").style.display = "block";
        document.getElementById("lgn-btn-container").style.display = "flex";
        document.getElementById("psw-disclaimer").style.display = "none";
      })
      .catch(function (err) {
        console.error(err);
      });
  }
);

function logout() {
  document.getElementById("logout").style.display = "block";
  oktaSignIn.authClient.signOut();
  location.reload();
}
/*END OF OKTA LOGIN SCRIPT*/

/*JOKES*/
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
    let myJSON = JSON.parse(this.responseText);
    document.getElementById("jokes").innerHTML = myJSON.content; // myJSON.upvotes + " | " + myJSON.downvotes;
  }
});

xhr.open("GET", "https://joke3.p.rapidapi.com/v1/joke");
xhr.setRequestHeader(
  "x-rapidapi-key",
  "438ce6f496msh1291cc6153e5c5ap10502bjsn062ad0fe3176"
);
xhr.setRequestHeader("x-rapidapi-host", "joke3.p.rapidapi.com");

xhr.send(data);
/******************************************* */

// fetch("https://joke3.p.rapidapi.com/v1/joke", {
//   method: "GET",
//   headers: {
//     "x-rapidapi-key": "438ce6f496msh1291cc6153e5c5ap10502bjsn062ad0fe3176",
//     "x-rapidapi-host": "joke3.p.rapidapi.com",
//   },
// })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
//
