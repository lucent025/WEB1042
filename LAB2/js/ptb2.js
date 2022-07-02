function io() {
  var a = document.getElementById("heSoA").value;
  var b = document.getElementById("heSoB").value;
  var c = document.getElementById("heSoC").value;

  if (isNaN(a) == true) {
    document.getElementById("heSoA").value = "";
    alert("Xin hãy nhập số");
  } else if (isNaN(b) == true) {
    document.getElementById("heSoB").value = "";
    alert("Xin hãy nhập số");
  } else if (isNaN(c) == true) {
    document.getElementById("heSoC").value = "";
    alert("Xin hãy nhập số");
  } else {
    var delta = Math.pow(b, 2) - 4 * a * c;

    if (delta < 0) {
      document.getElementById("Output").innerHTML = "phương trình vô nghiệm";
    } else if (delta == 0) {
      document.getElementById("Output").innerHTML =
        "phương trình co nghiệm kép";
      var x0 = -b / (2 * a);
      document.getElementById("result").innerHTML = "ket qua: x0 = " + x0;
    } else {
      document.getElementById("Output").innerHTML =
        "phương trình co 2 nghiệm phân biệt";
      var x1 = (-b + Math.sqrt(delta)) / (2 * a);
      var x2 = (-b - Math.sqrt(delta)) / (2 * a);
      document.getElementById("result").innerHTML =
        "ket qua: x1 = " + x1 + " x2 = " + x2;
    }
  }
}
