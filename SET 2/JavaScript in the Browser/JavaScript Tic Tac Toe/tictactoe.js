let playerTurn = true;
let computerMoveTimeout = 0;
const gameStatus = {
	MORE_MOVES_LEFT: 1,
	HUMAN_WINS: 2,
	COMPUTER_WINS: 3,
	DRAW_GAME: 4
};

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
	// Setup the click event for the "New game" button
	const newBtn = document.getElementById("newGameButton");
	newBtn.addEventListener("click", newGame);

	// Create click-event handlers for each game board button
	const buttons = getGameBoardButtons();
	for (let button of buttons) {
		button.addEventListener("click", function () { boardButtonClicked(button); });
	}

	// Clear the board
	newGame();
}

// Returns an array of 9 <button> elements that make up the game board. The first 3 
// elements are the top row, the next 3 the middle row, and the last 3 the 
// bottom row. 
function getGameBoardButtons() {
	return document.querySelectorAll("#gameBoard > button");
}

function checkForWinner() {
	
	const buttons = getGameBoardButtons();

	// Ways to win
	const possibilities = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
		[0, 4, 8], [2, 4, 6] // diagonals
	];

	// Check for a winner first
	for (let indices of possibilities) {
		if (buttons[indices[0]].innerHTML !== "" &&
			buttons[indices[0]].innerHTML === buttons[indices[1]].innerHTML &&
			buttons[indices[1]].innerHTML === buttons[indices[2]].innerHTML) {
			
			// Found a winner
			if (buttons[indices[0]].innerHTML === "X") {
				return gameStatus.HUMAN_WINS;
			}
			else {
				return gameStatus.COMPUTER_WINS;
			}
		}
	}

	// See if any more moves are left
	let foundEmpty = false;
	for (let button of buttons) {
		if (button.innerHTML !== "X" && button.innerHTML !== "O") {
			return gameStatus.MORE_MOVES_LEFT;
		}
	}

	// If no winner and no moves left, then it's a draw
	return gameStatus.DRAW_GAME;
}

function newGame() {
	clearTimeout(computerMoveTimeout);
	computerMoveTimeout = 0;
	buttons = getGameBoardButtons()
	for(let i = 0; i < buttons.length; i++){
		buttons[i].innerHTML = ``;
		buttons[i].className = ``;
		buttons[i].disabled = false;
	}
	playerTurn = true;
	document.getElementById('turnInfo').innerHTML = `Your turn`
}

function boardButtonClicked(button) {
	if(playerTurn){
		turnInfo.innerHTML = `Your turn`
		button.innerHTML = `X`;
		button.className += 'x';
		button.disabled = true;
	}
	switchTurn();
}

function switchTurn() {
	let status = checkForWinner();
	console.log(status === gameStatus.HUMAN_WINS)
	if(status === gameStatus.DRAW_GAME){
		playerTurn = false;
		document.getElementById('turnInfo').innerHTML = `Draw game`
		return;
	}
	if(status === gameStatus.HUMAN_WINS){
		playerTurn = false;
		document.getElementById('turnInfo').innerHTML = `You win!`
		return;
	}
	if(status === gameStatus.COMPUTER_WINS){
		playerTurn = false;
		document.getElementById('turnInfo').innerHTML = `Computer wins!`
		return;
	}


	if(playerTurn){//if true, then it is computer's turn next
		playerTurn = false;
		computerMoveTimeout = setTimeout(makeComputerMove, 1000);
		document.getElementById('turnInfo').innerHTML = `Computer's turn`
	}else{
		document.getElementById('turnInfo').innerHTML = `Your turn`
		playerTurn = true;
	}


	
}

function makeComputerMove() {
	let randomArray = new Array
	let buttons = getGameBoardButtons();
	for(let i = 0; i < buttons.length; i++){
		if(!buttons[i].disabled){
			randomArray.push(i);
		}
	}
	var cell = Math.floor(Math.random() * randomArray.length)
	console.log(randomArray[cell])
	buttons[randomArray[cell]].className += "o";
	buttons[randomArray[cell]].disabled = true;
	buttons[randomArray[cell]].innerHTML = `O`;
	switchTurn();
}