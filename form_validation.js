//variaveis
let _name = document.querySelectorAll(".name");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let passTip = document.querySelector(".password-tip");

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
password.addEventListener("keyup", passwordInput);

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

function passwordInput() {
  let passRegex = /([\w+][\W]+)/;

  if(password.value === "") {
    password.classList.add("wrong");
    password.classList.remove("correct");

    passTip.textContent = "A senha deve conter uma letra maiuscula, uma letra minuscula, um numero e um caractere especial";

  }

  else if(passRegex.test(password.value) == true){
    password.classList.add("correct");
    password.classList.remove("wrong");

    passTip.textContent = "";
  }
  
  else if(passRegex.test(password.value) == false){
    let passTip = document.querySelector(".password-tip")

    password.classList.add("wrong");
    password.classList.remove("correct");

    passTip.textContent = "A senha deve conter uma letra maiuscula, uma letra minuscula, um numero e um caractere especial";
    


  }

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
