"use strict";

/*OKTA LOGIN SCRIPT*/
const oktaSignIn = new OktaSignIn({
  baseUrl: "https://dev-30200724.okta.com",
  clientId: "0oa6a3hqxlrvFP4g55d6",
  authParams: {
    issuer: "https://dev-30200724.okta.com/oauth2/default",
  },
  redirectUri: "http://127.0.0.1:8080/index.html",
});

oktaSignIn.authClient.token.getUserInfo().then(
  function (user) {
    document.getElementById("messageBox").innerHTML =
      "Hello, " + user.email + "! You are *still* logged in! :)";
    document.getElementById("logout").style.display = "block"; //Logout button
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
        document.getElementById("messageBox").innerHTML =
          "Hello, " + idToken.claims.email + "! You just logged in! :)";
        document.getElementById("logout").style.display = "block";
      })
      .catch(function (err) {
        console.error(err);
      });
  }
);

function logout() {
  oktaSignIn.authClient.signOut();
  location.reload();
}
/*END OF OKTA LOGIN SCRIPT*/
