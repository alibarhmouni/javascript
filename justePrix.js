

var max =Number(80);
var min =Number(20);
var prix = Math.round((Math.random()*(max-min)+min));  // form random 
console.log(prix+"€");
var reponse;


var poseQuestion = function(){
	reponse = Number(prompt("Quel est le juste prix ?"));

	trouverPrix();
}


var trouverPrix = function(){
	
	if(reponse === prix){
		// console.debug("c'est le juste prix!");
		console.log('%c C est le juste prix! ', 'background: green; color: white');
	}
	else{
		if(reponse < prix){
			console.log("%c c'est plus!","background: red; color: white");
			poseQuestion();

		}
		else if(reponse > prix){
			console.log("%c c'est moins!","background: red; color: white");
			poseQuestion();
		}
	}

}

poseQuestion();

// console.log(console);