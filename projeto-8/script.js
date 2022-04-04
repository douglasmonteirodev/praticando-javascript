var valorI = window.document.getElementById("valor");
var vFinal = window.document.getElementById("final");
var pagar = window.document.getElementById("pagar");
var sel = window.document.getElementById("sel");
function calc() {
  const valor = Number(valorI.value);
  const valorPar = Number(sel.value);
  const aVista = valor * 0.9;
  const cartao5 = valor * 0.95;
  const parc = valor * 1.1;

  if (valorPar == 1) {
    pagar.value = aVista;
  } else if (valorPar == 2) {
    pagar.value = cartao5;
  } else {
    pagar.value = parc;
  }

  vFinal.value = valor;
}
