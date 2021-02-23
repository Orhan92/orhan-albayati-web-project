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
    document.getElementById("messageBox").innerHTML = "Welcome: " + user.email;
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
        document.getElementById("messageBox").innerHTML =
          "Welcome: " + idToken.claims.email;
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
