var maSv = document.getElementById("id");
var hoTen = document.getElementById("name");
var email = document.getElementById("email");
var sex = document.getElementById("sex");
var nam = document.getElementById("nam");
var nu = document.getElementById("nu");
var favor = document.getElementById("favor");
var country = document.getElementById("country");
var note = document.getElementById("note");
var book = document.getElementById("book");
var travel = document.getElementById("travel");
var music = document.getElementById("music");
var food = document.getElementById("food");
var etc = document.getElementById("etc");

const emailPattern =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function containsNumber(str) {
  return /\d/.test(str);
}

function validEmail(str) {
    return emailPattern.test(str)
}

function submit() {
  //ma sinh vien
  if (maSv.value == "") {
    maSv.style.backgroundColor = "yellow";
    alert("Hãy nhập mã sinh viên");
  } else {
    maSv.style.backgroundColor = "white";
  }
  //ho ten
  if (hoTen.value == "") {
    hoTen.style.backgroundColor = "yellow";
    alert("Hãy nhập họ tên");
  } else if (containsNumber(hoTen.value)) {
    hoTen.style.backgroundColor = "yellow";
    alert("Họ tên không dược chứa số");
  } else {
    hoTen.style.backgroundColor = "white";
  }
  //email
  if (email.value == "") {
    email.style.backgroundColor = "yellow";
    alert("Hãy nhập email");
  } else if (!validEmail(email.value)) {
    email.style.backgroundColor = "yellow";
    alert("Email không hợp lệ");
  } else {
    email.style.backgroundColor = "white";
  }
  //sex
  if (nam.checked == false && nu.checked == false) {
    sex.style.backgroundColor = "yellow";
    alert("Hãy chọn giới tính");
  } else if (
    (nam.checked == false && nu.checked == true) ||
    (nam.checked == true && nu.checked == false)
  ) {
    sex.style.backgroundColor = "white";
  }
  //favor
  if (
    book.checked == false &&
    travel.checked == false &&
    music.checked == false &&
    food.checked == false &&
    etc.checked == false
  ) {
    favor.style.backgroundColor = "yellow";
    alert("Hãy chọn ít nhất 1 lựa chọn");
  } else {
    favor.style.backgroundColor = "white";
  }
  //country
  if (country.selectedIndex == 0) {
    country.style.backgroundColor = "yellow";
    alert("Hãy chọn quốc tịch");
  } else {
    country.style.backgroundColor = "white";
  }
}
