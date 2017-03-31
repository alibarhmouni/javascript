let Personnage= function(name,level,weapon){
	this.name = name;
	this.age = 25;
	this.level =level ;
	this.weapon = "épée" ;
	this.life = 200;
	this.attaque = 2;
	// this.receiveDamage = receiveDamage;
	this.weapon = weapon;
}

let Arme = function(name,physic,magic,minLvl,available){
	this.title = name;
	this.physic = physic;
	this.magic = magic;
	this.minLvl = minLvl;
	this.available = available;

}


Personnage.prototype.attaquer = function(name,victime,weapon,level,damage){

	console.log(this.name +" qui est de niveau "+level+", attaque "+victime+
		" avec 1 "+weapon+ " qui a une attaque de "+this.attaque+"et lui inflige"+(level*damage)+" de dégat");
}



let Ennemi = function(name,niveauOlivier){
	Personnage.call(this, name);

}

Ennemi.prototype = Object.create(Personnage.prototype);
Ennemi.prototype.constructor = Ennemi;

let epee = new Arme("excalibur",25,6,10,true);
let hache = new Arme("hache",35,0,15,false);
let septre = new Arme("septre",5,40,15,true);
let perso = new  Personnage("ali",22);
let ennemi = new Ennemi("Olivier",22);

// console.log(ennemi);
// console.log(perso1);


perso.attaquer(perso,ennemi.name,epee.title,55);
ennemi.attaquer(ennemi,perso.name,hache.title,25,hache.physic);



// console.log(epee);
// console.log(hache);
// console.log(septre);

