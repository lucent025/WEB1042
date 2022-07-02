function randomNumberGenerator() {
  var secret = 10 + Math.round(5 * Math.random());
  return secret;
}

function play() {
  var input = document.getElementById("so").value;
  secret = randomNumberGenerator();
  if (isNaN(input) == true) {
    document.getElementById("so").value = "";
    alert("Xin hãy nhập số");
  } else {
    if (input == secret) {
      document.getElementById("OutputKetQua").innerHTML =
        "Chúc mừng bạn đã đoán đúng";
    } else if (input < secret) {
      document.getElementById("OutputKetQua").innerHTML =
        "Giá trị của bạn nhỏ hơn số bí mật";
    } else if (input > secret) {
      document.getElementById("OutputKetQua").innerHTML =
        "Giá trị của bạn lớn hơn số bí mật";
    }
  }
}
