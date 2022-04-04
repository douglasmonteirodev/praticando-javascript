let res = document.querySelector(".res");

function somar() {
  let valueInput = document.querySelector("#value-input").value;
  let soma = 0;
  for (let i = 1; i <= valueInput; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      soma += i;
    }
  }
  res.innerHTML = soma;
  valueInput.innerHTML = "";
  console.log(valueInput);
}
