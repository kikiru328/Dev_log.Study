// Check if the user is already logged in
if (localStorage.getItem("loggedInUser")) {
  showMainPage();
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const savedUser = localStorage.getItem(username);

  if (savedUser) {
    const user = JSON.parse(savedUser);
    if (user.password === password) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      showMainPage();
      return;
    }
  }

  document.getElementById("loginError").textContent =
    "Invalid username or password.";
}

function signup() {
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;

  if (localStorage.getItem(username)) {
    document.getElementById("signupSuccess").textContent =
      "Username already exists.";
    return;
  }

  const user = {
    username: username,
    password: password,
  };

  localStorage.setItem(username, JSON.stringify(user));
  document.getElementById("signupSuccess").textContent =
    "Sign up successful. Please login.";
}

function retrievePassword() {
  const username = document.getElementById("forgotUsername").value;
  const savedUser = localStorage.getItem(username);

  if (savedUser) {
    const user = JSON.parse(savedUser);
    document.getElementById("forgotPasswordResult").textContent =
      "Your password is: " + user.password;
  } else {
    document.getElementById("forgotPasswordResult").textContent =
      "Username not found.";
  }
}

function showSignup() {
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("signupPage").style.display = "block";
  document.getElementById("forgotPasswordPage").style.display = "none";
}

function showForgotPassword() {
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("signupPage").style.display = "none";
  document.getElementById("forgotPasswordPage").style.display = "block";
}

function showLogin() {
  document.getElementById("loginPage").style.display = "block";
  document.getElementById("signupPage").style.display = "none";
  document.getElementById("forgotPasswordPage").style.display = "none";
}

function showMainPage() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  document.getElementById("loggedInUsername").textContent = user.username;
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("signupPage").style.display = "none";
  document.getElementById("forgotPasswordPage").style.display = "none";
  document.getElementById("mainPage").style.display = "block";

  showClock();
  setInterval(showClock, 1000);
}

function logout() {
  localStorage.removeItem("loggedInUser");
  document.getElementById("mainPage").style.display = "none";
  document.getElementById("loginPage").style.display = "block";
}

// Function to add a todo task
function addTodo() {
  const todoInput = document.getElementById("todoInput");
  const task = todoInput.value.trim();

  if (task !== "") {
    const todoList = document.getElementById("todoList");

    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const label = document.createElement("label");
    label.innerText = task;

    checkbox.addEventListener("change", function () {
      label.style.textDecoration = this.checked ? "line-through" : "none";
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    todoList.appendChild(listItem);

    todoInput.value = "";
  }
}

function showClock() {
  const now = new Date();
  const year = now.getFullYear();
  const month = ("0" + (now.getMonth() + 1)).slice(-2);
  const day = ("0" + now.getDate()).slice(-2);
  const hours = ("0" + now.getHours()).slice(-2);
  const minutes = ("0" + now.getMinutes()).slice(-2);
  const seconds = ("0" + now.getSeconds()).slice(-2);

  const currentTime =
    "Now : " +
    year +
    "/" +
    month +
    "/" +
    day +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;
  document.getElementById("currentTime").textContent = currentTime;

  setTimeout(showClock, 1000);
}

function padZero(num) {
  return (num < 10 ? "0" : "") + num;
}

function getWeatherAndLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(geoLocationAndWeather);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}
// Function to get weather and location information
function geoLocationAndWeather(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(lat, lon);
  const apiKey = "568dcf485c5517d96c9a7892dece6039";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weatherInfo");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

getWeatherAndLocation();
// Array of background images
const backgroundImages = ["src/image1.jpg", "src/image2.jpg", "src/image3.jpg"];

// Function to set a random background image
function setRandomBackground() {
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  const randomImage = backgroundImages[randomIndex];
  document.body.style.backgroundImage = `url(${randomImage})`;
}

// Call the function to set a random background image
setRandomBackground();
