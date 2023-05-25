let firstName = document.querySelector("#firstName");
let secondName = document.querySelector("#secondName");
let address = document.querySelector("#textArea");
let email = document.querySelector("#email");
let gender = document.querySelector("#gender");
let plan = document.querySelector("#plan");
let input = document.querySelectorAll("[type='text']");
let textArea = document.querySelector("#textArea");
let emailBorder = document.querySelector("#email");
for (let data of input) {
  data.style.border = "none";
  textArea.style.border = "none";
  emailBorder.style.border = "none";
}
let form = document.querySelector("#profile-form");
for (let element of form) {
  element.readOnly = true;
}
//Data
let userSessionStorage = sessionStorage;
let key = userSessionStorage.key(0);
let userData = JSON.parse(sessionStorage.getItem(key));
console.log(userData);
firstName.value = userData.firstName;
secondName.value = userData.lastName;
address.value = userData.address;
email.value = userData.email;
gender.value = userData.gender;
plan.value = userData.plan;
//edit
let edit = document.querySelector("#edit");
edit.addEventListener("click", (e) => {
  e.preventDefault();
  for (let element of form) {
    element.readOnly = false;
  }
  for (let data of input) {
    data.style.border = "3px solid";
    textArea.style.border = "3px solid";
    emailBorder.style.border = "3px solid";
  }
});
//ok
let finalData;
let ok = document.querySelector("#ok");
ok.addEventListener("click", (e) => {
  e.preventDefault();
  let url = new URLSearchParams(location.search);
  let [id] = url.values();
  let result = {
    id: id,
    firstName: firstName.value,
    lastName: secondName.value,
    address: address.value,
    email: email.value,
    gender: gender.value,
    plan: plan.value,
  };
  console.log(result);
  setTimeout(() => {
    localStorage.setItem(id, JSON.stringify(result));
  }, 1000);
  for (let data of input) {
    data.style.border = "none";
    textArea.style.border = "none";
    emailBorder.style.border = "none";
  }
  alert("successfully updated\n please logout and log in");
});
let back = document.querySelector("#back-btn");
back.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "./mainPage.html";
});
