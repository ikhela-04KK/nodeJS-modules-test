// create the function with return any type that user entry 
function identity<type>(val:type):type{
    return val
}
let output = identity<string>("My string");
let output02 = identity<number>(78);
console.log(output02);

// try any with return any 

function errorFunction(val:any):any{
    return val
}

let output03 = "ikhela";
console.log(errorFunction(output03)); // c'est passer mais à quelle moment cette methode est inéficace. Je crois que c'est pour grande type de donnée 

// create your own type to integrate to generic 

function setGenerics(val:any):any{
    return val
}

let output04 = "ikhela";
console.log(setGenerics(output04))
interface recycle{
    obj : string, 
    date: number
}

function setGeneric<type>(val:type):type{
    return val
}
const displayResultOfGenerics = setGeneric<recycle>({obj:"camera", date:21})
console.log(displayResultOfGenerics);


// how to use arr.length on property to see how many element generics object have ? 
function logId<Type>(arg:Type[]):Type[] {
    return arg
}

function logId02<T>(arg:T[]):T {
    const my_index=7
    return arg[0]
}

const recypeArray = logId<recycle>([{obj:"camera", date:21}, {obj:"iphone12", date:74}]);
const recypeArray02 = logId<recycle>([{obj:"cam", date:71}, {obj:"iphone12", date:74}]);

console.log(recypeArray02);

// console.log(logId);
for (const item of recypeArray){
    console.log(item);
}
// console.log(logId.length);

// Instanceof: Vous pouvez utiliser l'opérateur instanceof pour vérifier si une variable est une instance d'une classe ou d'un constructeur particulier.


