//variaveis
let _name = document.querySelectorAll(".name");
let email = document.querySelector(".email");
let password = document.querySelector(".password");

//eventos
for(var i = 0; i < _name.length; i++) {
  _name[i].addEventListener("keyup", function(event) {
    let input = event.target;

    if(input.value === "") {

      input.classList.remove("correct");
      input.classList.add("wrong");

    }

    else {

      input.classList.remove("wrong");
      input.classList.add("correct");

    }
  });
}

email.addEventListener("keyup", checkEmail);
password.addEventListener("keyup", passwordStrength);

//funcoes
function checkEmail() {
  let regex =  /(^[a-zA-Z0-9_.-]+@[a-zA-Z0-9\.-]+\.[a-zA-Z]{3,4}$)/;

  if(email.value === "") {

    email.classList.remove("correct")
    email.classList.add("wrong");

  }

  else if(email.value.match(regex)) {

    email.classList.remove("wrong");
    email.classList.add("correct");

  }

  else {

    email.classList.remove("correct");
    email.classList.add("wrong");

  }
}

function passwordStrength() {
  //code here

}

function showHide() {
  let btn = document.querySelector(".showHide");

  btn.addEventListener("click", function(event) {
    btn.classList.toggle("show");

    if(btn.classList.contains("show")) {
      password.setAttribute("type", "text");
    }

    else if(!btn.classList.contains("show")) {
      password.setAttribute("type", "password");
    }

  });
}

showHide();
