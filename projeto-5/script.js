let ir = document.querySelector("#span-res");

function checar() {
  let salarioValor = Number(document.querySelector("#txt-input").value);

  const aliquota_7_5 = (salarioValor * 0.075).toFixed(2);
  const aliquota_15 = (salarioValor * 0.15).toFixed(2);
  const aliquota_22_5 = (salarioValor * 0.225).toFixed(2);
  const aliquota_27_5 = (salarioValor * 0.275).toFixed(2);

  if (salarioValor < 1434) {
    ir.innerHTML = "0% (isento)";
  } else if (salarioValor < 2150) {
    ir.innerHTML = `${aliquota_7_5} R$`;
  } else if (salarioValor < 2866) {
    ir.innerHTML = `${aliquota_15} R$`;
  } else if (salarioValor < 3582) {
    ir.innerHTML = `${aliquota_22_5}R$`;
  } else {
    ir.innerHTML = `${aliquota_27_5} R$`;
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
