//login page
let userfirstName = document.querySelector("#firstName");
let userSecondName = document.querySelector("#lastName");
let userEmail = document.querySelector("#confirm-Email");
let loginbtn = document.querySelector("#login");
loginbtn.addEventListener("click", (e) => {
  e.preventDefault();
  let alldata = Object.entries(localStorage);
  let verify = alldata.find((c) => JSON.parse(c[1]).email == userEmail.value);
  if (verify == undefined) {
    msg.textContent = "email not matched";
    msg.style.color = "red";
  }
  console.log(verify);
  let userObj = JSON.parse(verify[1]);
  console.log(userObj);
  sessionStorage.setItem(verify[0], verify[1]);
  alert("successfully log-in");
  window.location.href = `./mainPage.html?id=${userObj.id}`;
});
