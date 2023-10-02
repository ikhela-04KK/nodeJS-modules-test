// import { create } from "domain";

function addTwo(num: number){
    return num +2;
}
addTwo(5);

// create function 
function signUpUser(name:string, email:string,isPaid:boolean){}

// use type in arrrow function 
let loginUser = (s:string) : string =>{
    return ""
}
const heros = ["thor", "spiderman",  "ironman"]; 
heros.map((hero) =>{
    return `it's an ${hero}`  // don't do that return 2
})

// use never for a function which doesn't return a function / and a function that stop the program and raise the error 
function fail(msg: string): never {
  throw new Error(msg);
}
signUpUser('ikhela',"kankoffi36@gmail.com",true);

// create an object with typescript 
let userName = {
    name :"nathan", // this way is never accept in ts 
    age: 10, 
}

console.log(userName);

function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {}

createUser({ name: "hitest", isPaid: false }); // Argument email n'a pas été assigné auparavant, donc il ne passera pas

// createUser({ name: "hitesh", isPaid; }); // Cette ligne contient une erreur de syntaxe, remplacez ';' par ':'

function createCourse(): { name: string; price: number } {
    return { name: "reactjs", price: 399 };
}
