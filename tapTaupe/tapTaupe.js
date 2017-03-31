

onReadyDom = function(){


	// GENERER LE DOM
	var gameDiv = document.createElement('div');
	cartes = document.getElementsByClassName('divCartes');
	var body = document.getElementsByTagName('body');
	body[0].appendChild(gameDiv);
	gameDiv.classList.add('divJEu');

	for (var i = 0; i <12; i++) {
		let divCartes = document.createElement("div");
		gameDiv.appendChild(divCartes);
		divCartes.classList.add('divCartes');
	}

	var boutonStart = document.createElement("input");
	gameDiv.appendChild(boutonStart);
	boutonStart.setAttribute("value","start");
	boutonStart.setAttribute("type","submit");
	boutonStart.classList.add('boutonStart');

//  CREATION DU JEU 
	var points = 0;
	var game = true;
	var tabCouleur = ["green","orange","red"];
	var CardObj = function(element,id){
		this.element = element;
		this.id = id;
		let _self = this;
		this.element.addEventListener("click",function(event){
			if(event.target.style.backgroundColor === 'green'){
				console.log('Bien joué');
				points +=1;

			}
			else if(event.target.style.backgroundColor === 'orange'){
				console.log('Bien');
				points +=2;

			}
			else if(event.target.style.backgroundColor === 'red'){
				console.log('OUFFF!!!');
				points +=3;

			}
			else{
				_self.gameOver();

			}
			event.target.style.backgroundColor ="black";
		})


	}


	CardObj.prototype.gameOver = function(){
		for (var i = 0; i < cartes.length; i++) {
			cartes[i].style.backgroundColor = "black";
			
		}
		
		alert('Vous avez perdu! Votre score est de '+points+' points');
		console.log('Vous avez perdu! Votre score est de '+points+' points');
		stop();


	};



	for (var i =0; i < cartes.length; i++) {
		let card = new CardObj(cartes[i],i);
	}


	var cartesRandom = function(){
		let randomCardNumber = Math.floor(Math.random()*12);
		let timeRandom = Math.floor(Math.random()*(3000 - 700) + 700);

		
		if(timeRandom < 1000){
			cartes[randomCardNumber].style.backgroundColor = tabCouleur[2];
		}
		else if(timeRandom > 1000 && timeRandom < 2000){
			cartes[randomCardNumber].style.backgroundColor = tabCouleur[1];
		}
		else{
			cartes[randomCardNumber].style.backgroundColor = tabCouleur[0];
		}
		
		setTimeout(function(){
			cartes[randomCardNumber].style.backgroundColor = "black";
		}, timeRandom);
		startGame();
	}

	var startGame = function(){
	
		setTimeout(cartesRandom, 1000);
	

	};
	
	boutonStart.addEventListener('click',startGame)
	
	
}

window.addEventListener('DOMContentLoaded',onReadyDom);