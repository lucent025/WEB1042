var sinhVien = new Object();

sinhVien.hoTen = prompt("Ho va ten: ");
sinhVien.diem = prompt("Nhap diem: ");

sinhVien.hienThi = function () {
  this.diem >= 5 ? (this.hocLuc = "Dau") : (this.hocLuc = "Rot");
  document.write("<h3>Họ và tên: " + this.hoTen + "</h3>");
  document.write("<h3>Điểm TB: " + this.diem + "</h3>");
  document.write("<h3>Học lực: " + this.hocLuc + "</h3>");
};
