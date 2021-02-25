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
    welcomeMessage.innerHTML = user.userData.profile.name; //SHOWS THE LOGGED IN USERNAME.
    logoutBtn.style.display = "block"; //Logout button
    jokeBtn.style.display = "block";
    disclaimer.style.display = "none";
    meme.style.display = "none";
    loginBtnContainer.style.display = "flex";
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
//**************************
/*END OF OKTA LOGIN SCRIPT*/
//**************************

//STORING ELEMENTS INSIDE VARIABLES THAT WILL BE USED MULTIPLE TIMES
const jokeBtn = document.getElementById("joke-btn"); //Click me button
const logoutBtn = document.getElementById("logout"); //Logout button (okta)
const disclaimer = document.getElementById("psw-disclaimer"); //Password Disclaimer
const loginBtnContainer = document.getElementById("lgn-btn-container"); //Login button
const welcomeMessage = document.getElementById("messageBox"); //Display Username

//VARIABLES TO SELECT ELEMENTS FOR VOTING SECTION (THUMBS)
const thumbsUp = document.getElementById("thumbs-up"); //Thumbs up symbol
const thumbsDown = document.getElementById("thumbs-down"); //Thumbs down symbol

//VARIABLES TO SELECT API JOKE, MEME IMG, VOTiNG BUTTON ELEMENTS (FOR ANIMATION)
const meme = document.querySelector(".meme"); //Meme image
const APIJokes = document.querySelector(".jokes-class"); //Jokes <p>
const upVote = document.querySelector(".animation-btn1"); //Thumbs up animation
const downVote = document.querySelector(".animation-btn2"); //Thumbs down animation

//HIDING VOTING SECTION BEFORE THE USER HAS CLICKED ON CLICK ME
thumbsUp.style.display = "none";
thumbsDown.style.display = "none";

//*****************************
/*FUNCTION FOR CLICK ME BUTTON*/
//*****************************
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
      //*****************************

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
    //*****************************

    //We toggle animation on meme image AND jokes paragraph from API
    meme.classList.toggle("change");
    APIJokes.classList.toggle("change");
    upVote.classList.toggle("change");
    downVote.classList.toggle("change");

    //SHOWS VOTING BUTTONS AFTER USER GENERATES A NEW JOKE ("CLICK ME!")
    thumbsDown.style.visibility = "visible";
    thumbsUp.style.visibility = "visible";
    thumbsUp.style.display = "inline-block";
    thumbsDown.style.display = "inline-block";
  });
  //We remove the animation at the end of function in order to toggle it again when the user generates a new joke ("CLICK ME!")-btn
  meme.classList.remove("change");
  APIJokes.classList.remove("change");
  upVote.classList.remove("change");
  downVote.classList.remove("change");
});
/*********************************************************************/

//Thumbs up / thumbs down function
//Function is preventing the user to do more than 1 like or 1 dislike per joke
thumbsUp.addEventListener("click", function () {
  thumbsDown.style.visibility = "hidden";
  thumbsUp.style.visibility = "hidden";
});

//Function is preventing the user to do more than 1 like or 1 dislike per joke
thumbsDown.addEventListener("click", function () {
  thumbsDown.style.visibility = "hidden";
  thumbsUp.style.visibility = "hidden";
});
