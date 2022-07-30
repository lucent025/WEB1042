var tien = 10000

for (let i = 0; i < 2; i++) {
  tien += tien/2;
}
lamTron = Math.floor(tien);
document.getElementById("h1").innerHTML = lamTron.toLocaleString('en-US')