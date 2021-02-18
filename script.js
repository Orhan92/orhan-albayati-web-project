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

/*ADD REGISTER FIELD INTO A JSON FILE*/
// $(document).ready(function () {
//   $(".btn").click(function (e) {
//     var jsonData = {};

//     var formData = $("#myform").serializeArray();
//     // console.log(formData);

//     $.each(formData, function () {
//       if (jsonData[this.name]) {
//         if (!jsonData[this.name].push) {
//           jsonData[this.name] = [jsonData[this.name]];
//         }
//         jsonData[this.name].push(this.value || "");
//       } else {
//         jsonData[this.name] = this.value || "";
//       }
//     });
//     console.log(jsonData);
//     $.ajax({
//       url: "action.php",
//       type: "POST",
//       data: jsonData,
//     });
//     e.preventDefault();
//   });
// });
