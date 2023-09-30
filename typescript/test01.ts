function createPerson({ firstName, lastName, age }: { firstName: string; lastName: string; age: number }) {// it's a binding element {élément destructurés}
    if (age !== undefined) {
        return age;
    } 
    else if(age>=10) {
        return `Nom: ${firstName} ${lastName}`;
    }
    else{
        return true;
    }
}


// apk to send a email to multiple person 
function core_message({message , date , user}:{message:string , date:Date, user:string }){ //{élément destructurés}
    message = message, 
    date = date , 
    user = user
    return `${message}\ndate : ${date}\nuser : ${user}`
}

// put the objet in the function 

// person data 01
const personData1 = { firstName: "John", lastName: "Doe", age: 30 }; 
const personInfo1 = createPerson(personData1);
console.log(personInfo1); //Affiche : "Nom: John Doe, Âge: 30"

// person data 02
const personData2 = { firstName: "Jane", lastName: "Smith", age: 18};
const personInfo2= createPerson(personData2);
console.log(personInfo2); //Affiche : "Nom: Jane Smith"


// for my core message 

// core_message 01 for testing binding function
const core01 = {message :" What will we do today ? ", date: new Date(2023,8,26), user : "ikhela-04KK"}
const core_message01 = core_message(core01); 
console.log(core_message01);
