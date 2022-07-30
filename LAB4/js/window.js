let myWindow;

function openNewWindow() {
  myWindow = window.open("", "myWindow", "width=200, height=100");
}

function closeNewWindow() {
  myWindow.close();
}

function checking() {
  !myWindow.closed ? alert("Cua so chua dong") : alert("Cua so da dong");
}
