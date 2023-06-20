// input, button 가져오기
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
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

function handleLinkClick(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  //  loginForm 에 hidden class 부여
  // greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello ${username}`;
  geeeting.classList.remove(HIDDEN_CLASSNAME);
}
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
