var buttonElement = document.getElementById("submit-guess");

window.onload = start;
var colors=[], code=[], guess=[], feedback=[];
var turn=1;
colors = ["r","b","g","w","c","y"];
var thisTurn = [], turnRecords = [];
var alertString="";
var turn=1;

function start() {
    setup();
}

function setup() {
	var welcome="<h1>Welcome to Mastermind!</h1>\n<p>Here are instructions.</p>";
    var buttonElement = document.getElementById("submit-guess");
    buttonElement.innerHTML = "Start Game"; 
	var board = document.getElementById("board");
	board.innerHTML=welcome; 
    buttonElement.onclick = function () {
		startGame();
	}
}

function startGame() {
	code=setCode(colors);
	var startPlay="<h1>Code Is Set up!</h1>\n<p>Pick your four choices for your first guess.</p>"+code;
	var buttonElement = document.getElementById("submit-guess");
    buttonElement.innerHTML = "Submit color choices"; 
	var board = document.getElementById("board");
	board.innerHTML=startPlay;
	buttonElement.onclick = function () {
		newGetGuess(code);
	}
}



function newGetGuess(code) {
	var guess =[]; 
	var turn = 1;
	var alertString="<h1>Mastermind</h1><p>Guess "+turn+": ";
	for (i=0;i<4;i++) {
		g=document.getElementById(i);
		guess[i]=g.options[g.selectedIndex].value;
	}
  //	alertString=alertString.concat(guess.join(" "));
	//board.innerHTML=alertString;
	masterMain(code,guess);
}
function masterMain(code,guess){
  var alertString="<h1>Mastermind</h1><p>Guess "+turn+": ";
  alertString=alertString.concat(guess.join(" "));
  alertString=alertString.concat(" || ");
  var feedback=testGuess(code,guess);
  alertString=alertString.concar(feedback.join(" "));
	board.innerHTML=alertString;
}