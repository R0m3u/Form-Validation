var termsPopup = document.querySelector(".terms");
var overlay = document.querySelector(".overlay");
var popup = document.querySelector(".popup");
var closePopup = document.querySelector(".close-popup");
var trialBtn = document.querySelector(".trial-btn");
var sec = document.querySelector(".typewriter");
var charging = document.querySelector(".charging-popup");

termsPopup.addEventListener("click", function(event) {
    overlay.classList.remove("none");
    popup.classList.remove("none");
  
})

overlay.addEventListener("click", function() {

    overlay.classList.add("none");
    popup.classList.add("none");
})

closePopup.addEventListener("click", function() {

    overlay.classList.add("none");
    popup.classList.add("none");
})

trialBtn.addEventListener("click", function() {
    charging.classList.remove("none");
    charging.classList.add("align-center");
})

var periodo = 1;

// switch(periodo) {
//     case  1:
//         console.log("bom dia!")
//         break
    
//     case "tarde" || 2:
//         console.log("boa tarde!");
//         break

//     case "noite" || 3:
//         console.log("boa noite");
//         break

//     default:
//         console.log("otimo dia!");
//         break
// }

if (periodo == "dia" || 1) {
    console.log("bom dia!");
}

else if (periodo == "tarde" || 2) {
    console.log("boa tarde!");
}

else if (periodo == "noite" || 3) {
    console.log("boa noite!");
}



/////////////////////////////////////////////////////

var i = [1,2,3,4,5,6];

for(var j in i) {
    console.log(i[j])
}




//voltar na pagina 115 object and invocation expressions
 //voltar no minuto 52 da primeira do curso de ciencia da computacao do cs50