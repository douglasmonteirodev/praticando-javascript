let mediaValue = document.querySelector("#span-media");
let res = document.querySelector("#span-res");

function checar() {
  let nota1 = Number(document.querySelector("#nota1").value);
  let nota2 = Number(document.querySelector("#nota2").value);
  let nota3 = Number(document.querySelector("#nota3").value);

  const media = calcMedia(nota1, nota2, nota3);

  if (media <= 5.9) {
    mediaValue.innerHTML = media;
    res.innerHTML = "nota F";
  } else if (media <= 6.9) {
    mediaValue.innerHTML = media;
    res.innerHTML = "nota D";
  } else if (media <= 7.9) {
    mediaValue.innerHTML = media;
    res.innerHTML = "nota C";
  } else if (media <= 8.9) {
    mediaValue.innerHTML = media;
    res.innerHTML = "nota B";
  } else if (media <= 10) {
    mediaValue.innerHTML = media;
    res.innerHTML = "nota A";
  }
}
function calcMedia(n1, n2, n3) {
  return ((n1 + n2 + n3) / 3).toFixed(2);
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
