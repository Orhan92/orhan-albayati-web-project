"use strict";

/*OKTA LOGIN SCRIPT*/
/*storing elements that will be used multiple times in a varaible*/
const jokeBtn = document.getElementById("joke-btn");
const logoutBtn = document.getElementById("logout");
const disclaimer = document.getElementById("psw-disclaimer");
const loginBtnContainer = document.getElementById("lgn-btn-container");
const welcomeMessage = document.getElementById("messageBox");
const meme = document.getElementById("meme");

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
    welcomeMessage.innerHTML = user.userData.profile.name; //shows the users name when logged in.
    logoutBtn.style.display = "block"; //Logout button
    loginBtnContainer.style.display = "flex";
    disclaimer.style.display = "none";
    jokeBtn.style.display = "block";
    meme.style.display = "none";
  },
  function (error) {
    oktaSignIn
      .showSignInToGetTokens({
        el: "#okta-login-container",
      })

      //
      .then(function (tokens) {
        oktaSignIn.authClient.tokenManager.setTokens(tokens);
        oktaSignIn.remove();

        welcomeMessage.innerHTML = "Welcome!";
        logoutBtn.style.display = "block";
        loginBtnContainer.style.display = "flex";
        disclaimer.style.display = "none";
        jokeBtn.style.display = "block";
        meme.style.display = "none";
      })
      .catch(function (err) {
        console.error(err);
      });
  }
);

function logout() {
  logoutBtn.style.display = "block";
  oktaSignIn.authClient.signOut();
  location.reload();
}
/*END OF OKTA LOGIN SCRIPT*/

/*Button click function / GET/REQUEST API / JOKES Generator*/
jokeBtn.addEventListener("click", function () {
  const data = null;
  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.open("GET", "https://joke3.p.rapidapi.com/v1/joke");
  xhr.setRequestHeader(
    "x-rapidapi-key",
    "438ce6f496msh1291cc6153e5c5ap10502bjsn062ad0fe3176"
  );
  xhr.setRequestHeader("x-rapidapi-host", "joke3.p.rapidapi.com");

  xhr.send(data);

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
      let myJSON = JSON.parse(this.responseText);

      /* This is the element that will print the generated joke*/
      document.getElementById("jokes").innerHTML = myJSON.content;

      /*Generate random image from Memes folder on-click!*/
      let lastIndex = 0;
      randomImage();
      function randomImage() {
        let memeDir = "Memes/";
        let memeArr = new Array("meme1.jpg", "meme2.jpg", "meme4.jpg"); //Add image path here if you add more images
        let memeIndex = 0;

        if (memeArr.length > 1) {
          while (memeIndex === lastIndex) {
            memeIndex = Math.floor(Math.random() * memeArr.length);
          }
          lastIndex = memeIndex;
        }
        let memePath = memeDir + memeArr[memeIndex];
        meme.src = memePath;
        meme.alt = memeArr[memeIndex];
        meme.style.display = "block";
      }
    }
  });
});
/******************************************* */
