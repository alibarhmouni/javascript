let onDomReady = function (event){

let tap = function(event){
		console.log(event.target.id);
	}

let squares = document.getElementsByClassName('square');
let btnStartGame = document.getElementById('start');
	
let Square = function(element,id,temps){
	this.element = element;
	this.id = id;
	this.time = time;
}
Square.prototype.appear(){}
Square.prototype.progress(){}
Square.prototype.disapear(){}
	
	let launchGame = function(){
		for (let i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click",tap,false);
		squares[i].classList.add("hide");
	}
		setTimeout(showSquare,1000); 
	}

	let showSquare = function(){
		console.log("perfect");
		randomInt = Math.floor(Math.random()*squares.length);
		let selectedSquare = squares[randomInt];
		selectedSquare.classList.remove("hide");
		setTimeout(changeColor,500);
		 													// on a mis le random dans le tableau de squares
																					// ainsi, un carré au hasard va être repris
	}
	btnStartGame.addEventListener("click",launchGame);  // 2 arguments (qu'est ce que je fais apres avoir attendu, temps)
	  
}

window.addEventListener("DOMContentLoaded",onDomReady);
// window.removeEventListener("DOMContentLoaded",onDomReady);