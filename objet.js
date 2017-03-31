

// var Character = {
// 	// name : "ali",
// 	age : 25,
// 	itemsToGive : ["argent","épée","bouclier"]
// }



// var random = Math.round(Math.random()*(2-0)+0);
// Character.name = "ali";
// console.log(Character.name);
// console.log(Character.age);
// console.log(Character.itemsToGive[random]);


let objVente = [{title:"excalibur",
				physic:15,
				magic:3,
				minLvl:35,
				available:true},

				{title:"superHache",
				physic:20,
				magic:0,
				minLvl:28,
				available:false},

 				{title:"septre",
 				physic:2,
 				magic:20,
 				minLvl:2,
 				available:true}];



	let afficherObj = function(){
		for (var i = 0; i < objVente.length ; i++) {
			
			console.log(objVente[i]);

		}
	}


	let availableObj = function(){
		for (var i = 0; i < objVente.length; i++) {
			// for(prop in objVente[i]){
				// let propObj = objVente[i][prop];
				console.log(objVente[i]);
				if(objVente[i].available == true){
					console.log(objVente[i].title+" est disponible!");
					
				}
				else if(objVente[i].available == false){
					console.log(objVente[i].title+" est indisponible!");
					
				}
				
				
			// }
			
		}
	}


let minLevel = function(){
	for (var i = 0; i < objVente.length; i++) {

				if(objVente[i].minLvl <=10 ){

					console.log(objVente[i].title+" est de niveau "+objVente[i].minLvl);

				}
				else{

				}
		}
}


// afficherObj();
// availableObj();
minLevel();


