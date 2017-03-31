var tabMot = ["bonjour","ali","jeudi","histoire","anticonstitutionnellement"];
var motRandom = tabMot[Math.floor(Math.random() *tabMot.length)];
var tabVide = [];
var lettre;

for (var i = 0; i < motRandom.length; i++) {
	tabVide.push("_");
	proposition();
}


console.log(tabVide);
console.log(motRandom);




var proposition = function(){
	lettre = prompt("choisissez une lettre");
	VerifLettre();
}

var VerifLettre = function(){

	for (var i = 0; i < motRandom; i++) {
		
	}
}