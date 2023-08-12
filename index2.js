// var generateName = require("sillyname"); 
import generateName from "sillyname" // mettre ça toujours entre griff le vrai nom du module 
import heroesName from "superheroes"

var sillyname = generateName();
console.log(`my name is ${sillyname}.`);

var superheroes = heroesName.random();
console.log(`mon nom de superHero est ${superheroes} !`);

