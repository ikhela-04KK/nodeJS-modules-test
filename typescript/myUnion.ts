
// first is how to declare a array methode 
// import { type } from "os";
// won't pass beacause there are not type of array like number[]
// const superHero : [] = []; 
// superHero.push(7);

const superHero : number[] = []; 
superHero.push(74);
superHero.push(174);
superHero.push(17478);
console.log(superHero);

// type array core message 

type core_message = {
    message : string, 
    date : Date , 
    user : string
}

const all_core_message : core_message[] = []
all_core_message.push({message: "sure you , i never like me", date:new Date(2023,4,4), user: "ikhela-04KK"})
all_core_message.push({message: "sure you , i never like me", date:new Date(2023,4,4), user: "ikhela-04KK"})
all_core_message.push({message: "sure you , i never like me", date:new Date(2023,4,4), user: "ikhela-04KK"})
all_core_message.push({message: "sure you , i never like me", date:new Date(2023,4,4), user: "ikhela-04KK"})
all_core_message.push({message: "sure you , i never like me", date:new Date(2023,4,4), user: "ikhela-04KK"})
all_core_message.push({message: "sure you , i never like me", date:new Date(2023,4,4), user: "ikhela-04KK"})
all_core_message.push({message: "sure you , i never like me", date:new Date(2023,4,4), user: "ikhela-04KK"})
all_core_message.push({message: "sure you , i never like me", date:new Date(2023,4,4), user: "ikhela-04KK"})
all_core_message.push({message: "sure you , i never like me", date:new Date(2023,4,4), user: "ikhela-04KK"})
all_core_message.push({message: "sure you , i never like me", date:new Date(2023,4,4), user: "ikhela-04KK"})
all_core_message.push({message: "sure you , i never like me", date:new Date(2023,4,4), user: "ikhela-04KK"})
all_core_message.push({message: "sure you , i never like me", date:new Date(2023,4,4), user: "ikhela-04KK"})
console.log(all_core_message)


// two type for same data 
type male = {
    weight: number
}
type female = {
    mensuration:string
}

// Two type for same data
const malick:male ={weight:7}
const sex: male | female =malick ;
console.log(sex);
const sex_special :(male | female)[] = [{weight:78},{mensuration:"women"}]; // pour utiliser type dans une autre propriété, il faut assigner des valeurs au contenu du type