function calculo() {
  let valorCompra = window.document.getElementById("compra");
  let valorCalc = Number(compra.value);
  let parcelas = window.document.getElementById("sel");
  let valorPar = Number(parcelas.value);
  let juros3 = valorCalc * 1.03;
  let juros7 = valorCalc * 1.07;
  let res = window.document.getElementById("span-res");

  if (valorPar === 1) {
    res.innerHTML = `À vista = ${valorCalc}`;
  }
  if (valorPar === 2) {
    res.innerHTML = `${valorCalc} + 3% = ${juros3}; parcelado em 2x = ${
      juros3 / 2
    }`;
  }

  if (valorPar === 4) {
    res.innerHTML = `${valorCalc} + 7% = ${juros7}; parcelado em 4x = ${
      juros7 / 4
    }`;
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
