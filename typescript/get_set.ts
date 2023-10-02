// utilisation des getters et des setters 

class UserAge {
    private _age = 0

    // initialize getter 
    get age(): number{
        return this._age
    }

    // inialize setter
    set age(value:number){
        if (value >= 0 && value <= 120) { // Exemple de validation
            this._age = value;
          } else {
            throw new Error("L'âge doit être compris entre 0 et 120.");
          }
          
        
    }
}

const person01= new UserAge()

person01.age = -2; 
console.log(person01.age)