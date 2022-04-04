let txtInput = document.querySelector("#txt-input");
let res = document.querySelector("#span-res");

function checar() {
  let inputValue = Number(txtInput.value);

  if (inputValue % 3 == 0 && inputValue % 5 == 0 && inputValue != 0) {
    inputValue = "FizzBuzz";
  }
  if (inputValue % 3 == 0 && inputValue != 0) {
    inputValue = "Fizz";
  }
  if (inputValue % 5 == 0 && inputValue != 0) {
    inputValue = "Buzz";
  }
  res.innerHTML = inputValue;
}

let showMenu = document.querySelector(".fa-bars");
let hideMenu = document.querySelector(".fa-xmark");
let containerMenu = document.querySelector(".navbar");

showMenu.addEventListener("click", () => {
  showMenu.style.display = "none";
  containerMenu.style.display = "inline";
});

hideMenu.addEventListener("click", () => {
  containerMenu.style.display = "none";
  showMenu.style.display = "inline";
});
