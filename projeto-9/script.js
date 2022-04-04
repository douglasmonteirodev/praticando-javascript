var nmr = window.document.getElementById("nmr");
var res = window.document.getElementById("res");

function calc() {
  let n = Number(nmr.value);
  let fat = 1;
  for (let i = 1; i <= n; i++) {
    fat = fat * i;
  }
  res.value = fat;
}
