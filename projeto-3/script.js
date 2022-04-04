let res = document.querySelector("#span-res");
let checagem = null;

function checar() {
  let velocidade = document.querySelector("#txt-input").value;
  const velMax = 70;
  const kmPorPonto = 5;

  if (velocidade > velMax) {
    let pts = Math.floor((velocidade - velMax) / kmPorPonto);

    if (pts < 12) {
      checagem = `Perdeu : ${pts} Pontos`;
    } else {
      checagem = "Carteira Suspensa";
    }
  } else {
    checagem = "OK";
  }
  res.innerHTML = checagem;
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
