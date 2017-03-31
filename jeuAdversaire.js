let character = {
	name : "kakashi",
	level : "11",
	life : "200",
	weapon : {

    name : "kunai",
    damage : "2"

	},

	attack: function(){},
	receivedDamage : function(){}

}

let opponentCharacter = Object.create(character);
opponentCharacter.name = "obito";
opponentCharacter.level = 10;
opponentCharacter.damage = 3;

let mainCharacter = Object.create(character);



var combat = function(){
	console.log(mainCharacter.name+" attaque "+opponentCharacter.name+" avec son "+mainCharacter.weapon.name);
	let degats = mainCharacter.level * mainCharacter.weapon.damage;
	// let degats = Number(Math.round(Math.random(opponentCharacter.level - opponentCharacter.damage)+opponentCharacter.dammage));
	console.log("il lui inflige "+degats+" points de dégats");
	opponentCharacter.life = opponentCharacter.life - degats;
	console.log(opponentCharacter.name+" n'a plus que "+opponentCharacter.life+" points de vie ");
}
combat();