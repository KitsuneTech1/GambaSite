// token check on load
const params = new URLSearchParams(window.location.search);
const token = params.get("token");
if (token) {
  localStorage.setItem("auth_token", token);
  window.history.replaceState({}, document.title, "/");
}

const authToken = localStorage.getItem("auth_token");
const loginButton = document.getElementById("login-btn");
const logoutButton = document.getElementById("logout-btn");
const headerRight = document.querySelector(".header-right");

if (authToken) {
  const payload = JSON.parse(atob(authToken.split(".")[1]));
  document.body.classList.add("logged-in");
  
  if (loginButton) {
    loginButton.style.display = "none";
  }
  if (logoutButton) {
    logoutButton.style.display = "block";
  }

  const userInfoDiv = document.createElement("div");
  userInfoDiv.classList.add("user-info");
  userInfoDiv.innerHTML = `
    <img src="${payload.avatar}" class="avatar" />
    <span class="username">${payload.displayName}</span>
  `;
  if (headerRight) {
    headerRight.insertBefore(userInfoDiv, logoutButton);
  }

} else {
  document.body.classList.remove("logged-in");
  if (loginButton) {
    loginButton.style.display = "block";
  }
  if (logoutButton) {
    logoutButton.style.display = "none";
  }
}

function logout() {
  localStorage.removeItem("auth_token");
  window.location.reload();
}
