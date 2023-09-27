// ça ne sert à rien d'écrire un type d'inférence sur les variable assigé vu que javascript est conscient 
let greeting = "hello word"; 
//toFixed() sert à convertir un  nombre en une chaîne de caractère

console.log(greeting);

// simulate any case 
let hero: string ;  // add type inference string to avoid any case

function getHero(){
    return "thor"
}
hero = getHero();