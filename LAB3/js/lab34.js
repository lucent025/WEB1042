const numbers = document.getElementsByClassName("butt");
const textBox = document.getElementById("textBox");

for (let number of numbers) {
  number.addEventListener('click', setStr);
}

function setStr() {
  textBox.innerHTML += this.value;
}

function thuc_hien() {
  let input = textBox.innerHTML;
  let kq = eval(input);
  textBox.innerHTML = kq;
}

function lam_lai() {
  textBox.innerHTML = "";
}
