var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");

var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");

var p1Score = 1;
var p2Score = 1;

p1Button.addEventListener("click", function(){
	p1Display.textContent = p1Score++
});

p2Button.addEventListener("click", function(){
	p2Display.textContent = p2Score++
});

resetButton.addEventListener("click", function(){
	alert("CLICKED!!!")
})

