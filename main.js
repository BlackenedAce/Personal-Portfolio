import './style.css'

let pointer = 0;
const button = document.querySelector("#button");

const one = document.querySelector("#one");

const two = document.querySelector("#two");

const three = document.querySelector("#three");

const four = document.querySelector("#four");

const five = document.querySelector("#five");

function showAndHide () {
  if (pointer == 0) {
    pointer= 1;
   button.innerText = "Show Less";
  one.style.display= "inherit"
  two.style.display= "inherit"
  three.style.display= "inherit"
    four.style.display= "inherit"
    five.style.display= "inherit"
  }
  else if (pointer == 1) {
    pointer = 0;
    button.innerText = "Show All";
  one.style.display= "none"
  two.style.display= "none"
  three.style.display= "none"
    four.style.display= "none"
    five.style.display= "none"
  }
}
button.addEventListener("click",showAndHide);

