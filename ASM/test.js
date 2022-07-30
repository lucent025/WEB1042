var pointerX = -1;
var pointerY = -1;
document.onmousemove = function(event) {
	pointerX = event.pageX;
	pointerY = event.pageY;
}
setInterval(pointerCheck, 1000);
function pointerCheck() {
	console.log('Cursor at: '+pointerX+', '+pointerY);
}