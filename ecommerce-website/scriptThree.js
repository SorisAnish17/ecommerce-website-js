let firstName = document.querySelector("#firstName");
let secondName = document.querySelector("#secondName");
let address = document.querySelector("#textArea");
let email = document.querySelector("#email");
let gender = document.querySelector("#gender");
let plan = document.querySelector("#plan");
let edit = document.querySelector("#edit");
//Data
let userSessionStorage = sessionStorage;
let key = userSessionStorage.key(1);
let userData = JSON.parse(sessionStorage.getItem(key));
console.log(userData);
firstName.value = userData.firstName;
secondName.value = userData.lastName;
address.value = userData.address;
email.value = userData.email;
gender.value = userData.gender;
plan.value = userData.plan;
//edit
let form = document.querySelector("#form");
let finalData;
edit.addEventListener("click", (e) => {
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
  localStorage.setItem(id, JSON.stringify(result));
  alert("successfully updated");
});
let back = document.querySelector("#back-btn");
back.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "./mainPage.html";
});
