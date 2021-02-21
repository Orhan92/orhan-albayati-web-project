**2021-02-21** | **10:00**

- Made login AND register section work. It requires alot of fixes and there are a few bugs (see issues log below).
- Removed users.json file as I chose to work with arrays instead for this project.
- Removed old out-commented google login script from JavaScript

  **_Issues_**

  - There are bugs regarding the register section. The user can register a new username and password with requirements. psw length >= 6, usr length >= 3. The major issue is that the user can only registrate during one session. Once the page refreshes, the user information that was registered will dissappear and we will only be left with the "hardcoded" members that exists in javascript code. (See account1, account2, account3, account4 and accounts array which contains all the other accounts).

  - So a user can register a member which will then be pushed into the accounts array based on the inputs inside the registration form. But the object (member) that is being pushed into the accounts array will dissappear once the page is reloaded/refreshed. I'm leaving this section for improvements!

  - I also need to fix another problem with the register section where the user should not be allowed to register a username that already exists.

  - And the last problem is that I cannot get my h2 element inside of logged-in.html section to change the textContent to the members username.

  **_COMMENTS_**

  - We have a problem regarding the refresh state of the page. As JavaScript does not remember what happened before the page got refreshed we cannot solve this problem with plain javascript. Because JavaScript will read during "launch". In other word everytime we refresh the page, JavaScript will run its code. Therefore we cannot permanently store "newly pushed" values by the user inputs into the accounts array as they will dissappear once the page is reloaded and JavaScript re-reads the entire script.

  **_SOLUTION_**

  - A solution to the comments section above is to actually work with some kind of database. I would then store the user input during registration inside a database. And in there I would check for already existing usernames. If it already exists I would not be able to push the registration. But if the username is unique in this database I would push it. So, when we work with databases we could then tell JavaScript to read from it. This way we would have a solution to our problem and all the new registered members would permanently be there even if we refres or close/re-open the page again. SO FOR THIS PROJECT I MIGTH SKIP THIS PART WITH THE KNOWLEDGE OF HOW TO ACTUALLY FIND A SOLUTION TO THIS PROBLEM.

**2021-02-19** | **10:57**

- Trying to solve register / login section
- Added test data for login section
- Made async fetch work on my users.json file. I can now print it in the console.
- Also made it work to print out the username of a chosen object index (username, password, email).

  **_Issues_**

  - Need to fix some kind of recognization on which member who logs in.
  - POST on register | GET on login
  - I have to figure out a way to print users.json in a txt friendly way.

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

  **_Fixes_**

  - Every element on the web application is now responsive

  **_Issues_**

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

  **_Fixes_**

  - Fixed the navigation bar bug, it is now responsive.

  **_Issues_**

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

  **_Issues_**

  - Make the navigation bar responsive.

---

**2021-02-11** | **13:15**

- Added necessary files (script, index and styles)
- Structured folder and files in repository
- Added HTML structure and linked my html to script(js) and styles(css)
- Added "use strict"; to JavaScript file
- Configured setup for coding
