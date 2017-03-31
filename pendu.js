let TabPendu = ["B","O","N","J","O","U","R"];

let TabDeviner = ["","","","","","",""];
console.log(TabPendu);
var compteurMatch = 0;
var guessLetter = function(){


	for (var i = 0; i < 10; i++) {


			let proposition = prompt("veuillez proposer une lettre");

			for (var j = 0; j <= TabPendu.length; j++) {
				if(proposition === TabPendu[j]){

					for (var k = 0; k <=(TabDeviner.length); k++) {
					
						   TabDeviner[j] = proposition;
						   if(TabDeviner[k] === TabPendu[j]){

						   		compteurMatch = compteurMatch +1;
						   		
						   }
						 
					}
					
						console.log(TabDeviner);

				}

			}
			if(compteurMatch == (TabDeviner.length+1)){
	   			alert(" Felicitation! Tu as gagné!");
	   			i =11;


				}
	
	
}

	console.log("c'est Fini!");
		

}
	


guessLetter();
