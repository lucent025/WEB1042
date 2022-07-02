
//kiem tra ten co so hay khong
function stringContainsNumber(_string) {
    return /\d/.test(_string);
}
//thuc hien xep loai
function xepLoai(diem) {
    Number(diem);
    if (diem < 5) {
        return "Rớt"
    } else return "Đậu"
}
//lay du lieu tu input
function getInfo() {
    var hoTen = document.getElementById("hoTen").value;
    var diemTb = document.getElementById("diemTb").value;
    if (stringContainsNumber(hoTen)) {
        document.getElementById("hoTen").value = "";
        alert("Họ tên không được chứa số")
    } else {
        Number(diemTb)
        if (isNaN(diemTb) == true) {
            document.getElementById("diemTb").value = "";
            alert("Xin hãy nhập số")
        } else {
            document.getElementById("OutputHoTen").innerHTML = "Họ và Tên: " + hoTen.toUpperCase()
            document.getElementById("OutputDiemTb").innerHTML = "Điểm trung bình: " + diemTb
            document.getElementById("OutputXepLoai").innerHTML = "Đánh giá: " + xepLoai(diemTb)
        }
    }
}