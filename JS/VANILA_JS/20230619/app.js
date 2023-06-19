// input, button 가져오기
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

// click Event
function onLoginSubmit(event) {
  // same as button

  // Arguments
  event.preventDefault();

  // input data == loginInput.value
  const username = loginInput.value;

  //   if (username === "") {
  //     alert("Please write your name");
  //   } else if (username.length > 15) {
  //     alert("Your name is too long.");
  //   }

  //  Just for check
  console.log(username);
}
loginForm.addEventListener("submit", onLoginSubmit);
