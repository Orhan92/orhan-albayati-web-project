**2021-02-25** | **10:00**

- During my video blog I realized that the API I chose was under maintenance. So I had to change API provider. It wasn't hard. It also made me realize how easy it is to actually change provider which you can see in script.js (row 86-93). See comment on row 86.

---

**2021-02-25** | **10:00**

- The project is basically set and done.
- I've cleaned up code
- Commented necessary code in the project
- Made website responsive added media queries for every visible content on the website

  **_FINISHED_**

  - The project is now finished. I have completed all sections and functionality. Note that this is a first draft and is of course possible to improve in many ways. There have been alot of issues back and forth (check issues on github), but the website is functional and fulfills it purpose now.

  **_COMMENTS_**

  - **CSS-QUERIES**: I know that there is way to many media queries (660 rows with code). To my defence, I had to do it this way because I didn't necessary containers for each element that I need to attach media queries to. Therefore, I had to to a query for each visual element that has to be responsive. Due to lack of time for this project I will choose not to fix this to avoid bugs in my web application. I know how to solve this problem by gathering "same type" of elements inside a container and then put queries to that container. But as mentioned, I will skip this for now due to lack of time.

  - **JAVASCRIPT**: Also regarding the Script for GETTING API and showing it to the user only when the user clicks the "Click me!"-button, it might look abit messy reading that code. Therefore I have commented each section and what it belongs to. The reason to why the scripting code looks like that is because I could not find another way to actually make the application behave the way I wanted. So the only working option was to put the code together the way it is now. Unfortunately, I'm lacking time due to deadline for this first draft. If I had more time I would try to come up with a "cleaner" solution for that function. Anyways, I have commented every section of the code in script.js to make it easier to read and understand.

  - **HTML**: The structure of the HTML code is showing content exactly the way I want it with help of styles.css code. Also in the HTML structure there can be many improvements, for example: working more with containers. That way it would save us alot of code in CSS and media queries. But as it is structured now, it actually works perfect (the way I want it) and therefore it is fulfilling its purpose.

---

**2021-02-24** | **10:21**

- Now I'm going to wrap up the last parts (see projects/issues on GitHub for more info).
- Added upvote and downvote joke and a counter to them with a blue color just to not confuse red and green to colorblind people
- Added random image generator based on click. The images are randomized from dir: Memes/
- Added animation to the image on click, unfortunately this only works at the first click (NEED TO FIX THIS)
- Removed counter from voting.
- Added animation to meme images, voting thumbs and joke text.

  **_BRIEF_**

  - There have been quite a few changes in this project so far. It all started with a specifikation of making a first draft of a website where there should be a landing page, a navigation bar with: "Start", "About", and "Login" button. Once the user logs in, the user should be able to see an API call on the website. So far so good. I should also add that It wasnt any problem to have the Login / logout section in the navbar, but I chose to have those buttons outside of it.
  - I have done all these steps by now.
  - Going to make some changes regarding page theme, and also add a few more features to the website.
  - I Have already hosted this website on GitHub Pages, OKTA signin included. But there was alot of bugs there (like background image not being read), so I decided to keep my webpage local for now.

  **_LAST SESSION_**

  - Last session I managed to complete most of the tasks for this website.
  - There was alot of changes and edits made to the application
  - See 2021-02-23 log for more information.

---

**2021-02-23** | **09:00**

- REMOVED old signup/login section and replaced with OKTA.
- FIXED OKTA. OKTA now works properly and the user can sign in with OKTA.
- User email that signed in is shown once the user signs in
- Moved pictures out of folder because they couldn't be read on GitHub pages. It now works properly.
- Cleaned up css files and moved media queries into an separate css file (media-querys.css)
- Added customized css to okta login widget.
- Called an web API and I fixed formatting to only show content (the joke)
- Added a generate button for my API
- Made the generate (Click me!) button to actually generate a new joke every click!

  **_ISSUES/TO-DO_**

  - Once the user logs in I want the content to show user first- and lastname. I can only fix it to show user email.
  - I can't figure out why my background image doesn't show on GitHub Pages.

---

**2021-02-21** | **10:00**

- Made login AND register section work. It requires alot of fixes and there are a few bugs (see issues log below).
- Removed users.json file as I chose to work with arrays instead for this project.
- Removed old out-commented google login script from JavaScript

  **_ISSUES_**

  - There are bugs regarding the register section. The user can register a new username and password with requirements. psw length >= 6, usr length >= 3. The major issue is that the user can only registrate during one session. Once the page refreshes, the user information that was registered will dissappear and we will only be left with the "hardcoded" members that exists in javascript code. (See account1, account2, account3, account4 and accounts array which contains all the other accounts).

  - So a user can register a member which will then be pushed into the accounts array based on the inputs inside the registration form. But the object (member) that is being pushed into the accounts array will dissappear once the page is reloaded/refreshed. I'm leaving this section for improvements!

  - I also need to fix another problem with the register section where the user should not be allowed to register a username that already exists.

  - And the last problem is that I cannot get my h2 element inside of logged-in.html section to change the textContent to the members username.

  **_COMMENTS_**

  - We have a problem regarding the refresh state of the page. As JavaScript does not remember what happened before the page got refreshed we cannot solve this problem with plain javascript. Because JavaScript will read during "launch". In other word everytime we refresh the page, JavaScript will run its code. Therefore we cannot permanently store "newly pushed" values by the user inputs into the accounts array as they will dissappear once the page is reloaded and JavaScript re-reads the entire script.

  **_SOLUTION_**

  - A solution to the comments section above is to actually work with some kind of database. I would then store the user input during registration inside a database. And in there I would check for already existing usernames. If it already exists I would not be able to push the registration. But if the username is unique in this database I would push it. So, when we work with databases we could then tell JavaScript to read from it. This way we would have a solution to our problem and all the new registered members would permanently be there even if we refres or close/re-open the page again. SO FOR THIS PROJECT I MIGTH SKIP THIS PART WITH THE KNOWLEDGE OF HOW TO ACTUALLY FIND A SOLUTION TO THIS PROBLEM.

---

**2021-02-19** | **10:57**

- Trying to solve register / login section
- Added test data for login section
- Made async fetch work on my users.json file. I can now print it in the console.
- Also made it work to print out the username of a chosen object index (username, password, email).

  **_ISSUES_**

  - Need to fix some kind of recognization on which member who logs in.
  - POST on register | GET on login
  - I have to figure out a way to print users.json in a txt friendly way.

---

- **2021-02-18** | **11:50**

- Added Media Querys to the box-content p-elements
- Removed test-index.html
- Removed google login from the page and replaced it with my own former login / register section.
- Created new issue to make login / register section work with a different kind of solution.
- Linked nav buttons to correct .html file
- Added Media Querys to About page.
- Added Author image and some layout structure to About page.
- Finished About Me section
- Every content is now responsive

  **_FIXES_**

  - Every element on the web application is now responsive

  **_ISSUES_**

  - Make functions to login / register section.

---

**2021-02-17** | **09:30**

- Completed the landing page
- Added a registration section (form)
- Added a login section
- FIXED navigation bar bug. Nav works excellent now.
- Added Media Querys to make the website responsive
- Looks okay on all devices. It is possible to enhance responsitivity of the website, but for now I will leave it like it is.
- Added normalize.css to reset build-in presets of different web browsers.
- Removed my previous setup because it caused alot of problems with Oauth. Ill keep it basic and try to work this out in a simpler way.
- Made google login work!

  **_FIXES_**

  - Fixed the navigation bar bug, it is now responsive.

  **_ISSUES_**

  - Need to get the signout button once I've logged into google.
  - Need to fix some kind of login page after the user logged in. In other words, redirect the user on the web application when authentication succeeds.
  - Also have to add some more different login authenticators like facebook, OKTA or something else.
  - Need to fix a "register section" (OPTIONAL)

---

**2021-02-16** | **09:47**

- Grid system added in grid.css file
- Added a header at landing page
- Added navigation bar inside of landing page (floating right)
- Added logotype inside header (floating left)
- Added som css to landing page
- Added som content inside the landing page
- Heading almost done (bug with ul list responsitivity)

  **_ISSUES_**

  - Make the navigation bar responsive.

---

**2021-02-11** | **13:15**

- Added necessary files (script, index and styles)
- Structured folder and files in repository
- Added HTML structure and linked my html to script(js) and styles(css)
- Added "use strict"; to JavaScript file
- Configured setup for coding
