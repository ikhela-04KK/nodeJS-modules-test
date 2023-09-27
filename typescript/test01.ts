function createPerson({ firstName, lastName, age }: { firstName: string; lastName: string; age: number }) {// it's a binding element {élément destructurés}
    if (age !== undefined) {
        return age;
    } else if(age>=10) {
        return `Nom: ${firstName} ${lastName}`;
    }
    else {
        return true;
    }
}

const personData1 = { firstName: "John", lastName: "Doe", age: 30 };
const personInfo1 = createPerson(personData1);
console.log(personInfo1); // Affiche : "Nom: John Doe, Âge: 30"

const personData2 = { firstName: "Jane", lastName: "Smith" };
const personInfo2= createPerson(personData2);
console.log(personInfo2); // Affiche : "Nom: Jane Smith"
