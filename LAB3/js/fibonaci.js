var f0 = prompt("F0 = ");
var f1 = prompt("F1 = ");

for (var i = 0; i<10;i++) {
    var f = Number(f0)+Number(f1);
    f0 = f1;
    f1 = f;
    document.write(f + "</br>");
}