var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");

var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");

var scoreDisplay = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var winningScore;

var input = document.querySelector("input");

//Player1 and Player2 buttons and logic:

p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			gameOver = true;
			p1Display.classList.add("winner");
			p2Display.classList.add("loser");
		}
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			gameOver = true;
			p2Display.classList.add("winner");
			p1Display.classList.add("loser");
		}
		p2Display.textContent = p2Score;
	}
});

//RESET button and logic:

resetButton.addEventListener("click", function(){
	reset();
})

function reset(){
	p1Score = 0;
	p2Score = 0;

	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;

	p1Display.classList.remove("winner", "loser");
	p2Display.classList.remove("winner", "loser");

	gameOver = false;
	input.value = "";
	scoreDisplay = "";
}


//Number Input logic:

input.addEventListener("change", function(){
	scoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
})

