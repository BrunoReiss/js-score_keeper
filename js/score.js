var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");

var p1Score = 1;

var h1 = document.querySelector("h1");

var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");

p1Button.addEventListener("click", function(){
	h1.textContent = p1Score++
});

p2Button.addEventListener("click", function(){
	alert("CLICKED!!!")
});

resetButton.addEventListener("click", function(){
	alert("CLICKED!!!")
})

