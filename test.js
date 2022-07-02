function chao() {
  var td = document.getElementById("chuoih2").innerHTML;
  var ch = document.getElementById("ten").value;

  if (ch.length == 0) {
    alert("Xin hay nhap ten");
  } else {
    alert(td + " " + ch.toUpperCase());
  }
}
