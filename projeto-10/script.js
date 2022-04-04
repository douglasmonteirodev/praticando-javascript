let numero = Math.round(Math.random() * 100);
let num = window.document.getElementById("nmr");
let res = window.document.getElementById("span-res");
let container = window.document.getElementById("container-form");

let valores = [];
function check() {
  valores.push(Number(num.value));
  if (numero > Number(num.value)) {
    conceito.value = "menor";
  } else if (numero < Number(num.value)) {
    conceito.value = "maior";
  } else {
    res.innerHTML = `<h1> Parabéns. Você acertou em ${valores.length} tentativas </h> <br>
      <h3> Pressione F5 para jogar novamente</h>`;
    container.innerHTML = "";
  }
  num.value = "";
  num.focus();
}
