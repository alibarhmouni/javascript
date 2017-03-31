 let onReadyDom = function (){

 	let body = document.getElementsByTagName('body');
	let divJeu = document.createElement("div");
	divJeu.classList.add("contentGame");	
	document.body.appendChild(divJeu);
	let CardObj = function(element, color,id){
		this.id =id;
		this.element = element;
		this.color = color;
		var _self = this;
		this.element.addEventListener("click",function(){
			// console.log(this.id);

			this.style.backgroundColor = _self.color;
			_self.melanger();
			},false);
		}
 /************************GENERER LE JEU*************************************************/
		
		for (let i = 1; i <= 12; i++) {
			let divCarte = document.createElement("div");
			divJeu.appendChild(divCarte);
			divCarte.classList.add("carte");
			
			

			switch(i){
				case 1:
				case 2:
					color = "green";
				break;
				case 3:
				case 4:
					color = "blue";
				break;
				case 5:
				case 6:
					color = "grey";
				break;
				case 7:
				case 8:
					color = "yellow";
				break;	
				case 9:
				case 10:
					color = "pink";
				break;	
				case 11:
				case 12:
					color = "orange";
				break;	


			}
			// console.log(divCarte);
			let carte = new CardObj(divCarte,color,i);

			
		}



	
		
	
		var button = document.createElement("input");
		divJeu.appendChild(button);
		button.classList.add("button");
		button.setAttribute("type", "submit");
		button.setAttribute("value", "Melanger");

		CardObj.prototype.melanger = function(){
			let couleurId = Math.floor(Math.random()*6);
			button.addEventListener("click",function(){
				
			} )
			console.log(couleurId);
		}


/*****************************************************************************************/
	


		let carte = document.getElementsByClassName("carte");
		// let maCarte = new CardObj(carte,blue);

	








}



window.addEventListener("DOMContentLoaded",onReadyDom);



