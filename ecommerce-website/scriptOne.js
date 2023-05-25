let form = document.querySelector("#form");
let firstName = document.forms[0][0];
let lastName = document.forms[0][1];
let address = document.forms[0][2];
let email = document.forms[0][3];
let plan = document.forms[0][6];
let terms = document.forms[0][7];
let radio = document.querySelector(".radio");
let submit = document.querySelector("#submit");
let formArea = document.querySelector(".form-area");
//submit action
//valid email
let message = document.querySelector("#email-small");
let result;
email.addEventListener("change", (e) => {
  let value = e.target.value;
  result = value.includes("@gmail");
  if (result) {
    console.log(result);
    message.textContent = "Valid";
    message.style.color = "green";
  } else {
    message.textContent = "Invalid";
    message.style.color = "red";
  }
});
submit.addEventListener("click", (e) => {
  e.preventDefault();
  for (let childrens of form) {
    if (childrens.value) {
      let smallEle = childrens.nextElementSibling;
      if (smallEle?.tagName === "SMALL") {
        smallEle.className = "success";
        smallEle.textContent = childrens.value;
      }
    } else {
      let smallEle = childrens.nextElementSibling;
      if (smallEle?.tagName === "SMALL") {
        smallEle.className = "error";
        smallEle.textContent = "error";
      }
    }
    //gender
    let genders = document.querySelectorAll("[type='radio']");
    let para = document.querySelector("#para");
    let selectedOption;
    for (let selectedGenders of genders) {
      if (selectedGenders.checked) {
        selectedOption = selectedGenders.value;
      }
    }
    if (selectedOption == null) {
      para.textContent = "select something";
      para.style.color = "red";
    } else {
      para.textContent = selectedOption;
      para.style.color = "green";
    }
  }
  //select plan
  let paraTwo = document.querySelector("#paraTwo");
  let planDetail = plan.options;
  let detailsValue;
  for (let details of planDetail) {
    if (details.selected) {
      detailsValue = details.value;
    }
  }
  if (detailsValue) {
    paraTwo.textContent = detailsValue;
    paraTwo.style.color = "green";
  } else {
    paraTwo.textContent = "You have to select a plan";
    paraTwo.style.color = "red";
  }
  //register page
  let genders = document.querySelectorAll("[type='radio']");
  let selectedOption;
  for (let selectedGenders of genders) {
    if (selectedGenders.checked) {
      selectedOption = selectedGenders.value;
    }
  }
  let userDetail = {
    id: Math.floor(Math.random() * 1000),
    firstName: firstName.value,
    lastName: lastName.value,
    address: address.value,
    email: email.value,
    gender: selectedOption,
    plan: detailsValue,
  };
  console.log(userDetail);
  localStorage.setItem(userDetail.id, JSON.stringify(userDetail));
  alert("User created successfully");
  window.location.href = "./login.html";
});
terms.addEventListener("change", (e) => {
  if (e.target.checked) {
    formArea.style.backgroundColor = "lightYellow";
  } else {
    formArea.style.backgroundColor = "";
  }
});
let inputText = document.querySelectorAll("[type='text']");
let textArea = document.querySelector("#textArea");
for (let data of inputText)
  data.addEventListener("focus", (e) => {
    data.style.borderColor = "lightGreen";
  });
textArea.addEventListener("focus", (e) => {
  textArea.style.borderColor = "lightGreen";
});
let emailInput = document.querySelector("#email");
emailInput.addEventListener("focus", (e) => {
  emailInput.style.borderColor = "lightGreen";
});
