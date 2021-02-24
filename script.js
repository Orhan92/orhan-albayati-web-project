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

/*storing elements that will be used multiple times in a varaible*/
const jokeBtn = document.getElementById("joke-btn");
const logoutBtn = document.getElementById("logout");
const disclaimer = document.getElementById("psw-disclaimer");
const loginBtnContainer = document.getElementById("lgn-btn-container");
const welcomeMessage = document.getElementById("messageBox");
const meme = document.getElementById("meme");

/*Counter for thumbs up and thumbs down*/
const thumbsUp = document.getElementById("thumbs-up");
const counterUp = document.getElementById("counter-like");
const thumbsDown = document.getElementById("thumbs-down");
const counterDown = document.getElementById("counter-dislike");
let likeCounter = 0;
let dislikeCounter = 0;

//HIDING VOTING SECTION BEFORE THE USER HAS CLICKED ON CLICK ME
thumbsUp.style.display = "none";
thumbsDown.style.display = "none";
counterUp.style.display = "none";
counterDown.style.display = "none";

/*Button click function / GET/REQUEST API / JOKES Generator*/
jokeBtn.addEventListener("click", function () {
  //SEND API REQUEST AFTER USER HAS CLICKED ON CLICK ME BUTTON
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

  //GENERATE RANDOM JOKE THAT'S COLLECTED FROM THE API
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
      let myJSON = JSON.parse(this.responseText);

      //PRINT THE JOKE AT THE WEBSITE
      document.getElementById("jokes").innerHTML = myJSON.content;

      //GENERATE RANDOM IMAGES FROM MEMES FOLDER AFTER USER CLICKS ON CLICK ME BUTTON
      let lastIndex = 0;
      randomImage();
      function randomImage() {
        let memeDir = "Memes/";
        let memeArr = new Array( //Add image path here if you add more images
          "meme.jpg",
          "meme1.jpg",
          "meme2.jpg",
          "meme3.jpg",
          "meme4.jpg",
          "meme5.jpg",
          "meme6.jpg",
          "meme7.jpg"
        );

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

  //AFTER CLICK ME BUTTON, WE DISPLAY VOTING SECTION (THUMBS)
  thumbsUp.style.display = "inline-block";
  thumbsDown.style.display = "inline-block";
  counterUp.style.display = "inline-block";
  counterDown.style.display = "inline-block";

  //COUNTER FOR VOTING SECTION AFTER CLICK MED BUTTON
  dislikeCounter = 0;
  likeCounter = 0;
  counterDown.innerHTML = dislikeCounter;
  counterUp.innerHTML = likeCounter;
});

//Thumbs up / thumbs down

//Counter for thumbs up and thumbs down
likeCounter = 0;
dislikeCounter = 0;

//Function is preventing the user to do more than 1 like or 1 dislike per joke
thumbsUp.addEventListener("click", function () {
  if (likeCounter === 0 && dislikeCounter === 0) {
    counterUp.innerHTML = likeCounter += 1;
  } else {
    counterUp.innerHTML = likeCounter += 0;
  }
});

//Function is preventing the user to do more than 1 like or 1 dislike per joke
thumbsDown.addEventListener("click", function () {
  if (dislikeCounter === 0 && likeCounter === 0) {
    counterDown.innerHTML = dislikeCounter += 1;
  } else {
    counterDown.innerHTML = dislikeCounter += 0;
  }
});
/******************************************* */
