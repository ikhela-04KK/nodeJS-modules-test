// typeNarrowing 

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird):pet is Fish {// Chaque fois que isFish est appelé avec une variable, TypeScript réduira cette variable à ce type spécifique si le type d’origine est compatible.
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird){
    if (isFish(pet)){
        pet
        return "Fish Food"

    }
    else{
        pet
        return"bird Food"   
        }
    }

// Exemple correct
let fishy: Fish = { swim: () => console.log("Fish is swimming") };
let birdy: Bird = { fly: () => console.log("Bird is flying") };

console.log(getFood(fishy)); // true
console.log(getFood(birdy)); // false
