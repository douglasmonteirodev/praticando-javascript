let alt = window.document.getElementById("alt");
let peso = window.document.getElementById("peso");
let sexo = window.document.getElementById("sel");

let conceito = window.document.getElementById("conc");
let caixaImc = window.document.getElementById("imc");

function calc() {
  const p = Number(peso.value);
  const a = Number(alt.value);
  var s = Number(sexo.value);
  let valorImc = (p / (a * a)).toFixed(2);
  caixaImc.value = valorImc;

  if (s == 1) {
    if (valorImc < 20.7) {
      conceito.value = "Abaixo do peso";
    } else if (valorImc < 26.4) {
      conceito.value = "No peso normal";
    } else if (valorImc < 27.8) {
      conceito.value = "Acima do normal";
    } else if (valorImc < 31.1) {
      conceito.value = "Acima do peso ideal";
    } else {
      conceito.value = "Obeso";
    }
  }

  if (s == 2) {
    if (valorImc < 19.7) {
      conceito.value = "Abaixo do peso";
    } else if (valorImc < 25.8) {
      conceito.value = "No peso normal";
    } else if (valorImc < 27.8) {
      conceito.value = "Acima do normal";
    } else if (valorImc < 32.3) {
      conceito.value = "Acima do peso ideal";
    } else {
      conceito.value = "Obesa";
    }
  }
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
