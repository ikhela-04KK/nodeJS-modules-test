// stimulate the using of tuple 

var country :[number, string, boolean] = [225,"ci", true]
// country.push([1, "USA", false]) // it's to specified that you cannot add a new array in tuple 

//  using of the destructuring type with tuple ""

// create a type country

function allCountry():[number,string,boolean][]{
    return [
                [225, "Côte d'ivoire",true], // ici, je peux spécifier plus d'un tableau 
                [225, "Senegal",false],
                [1, "canada",false],
                
           ]
}

let [ci, sn, ca] = allCountry() //there are succes using destructuring element 
console.log(ci);

// 
function allCountries(): [string[], string[], string[]] {
    return [
        ["Côte d'Ivoire", "Senegal", "Canada"], // 
        ["Abidjan", "Dakar", "Ottawa"],
        ["Yamoussoukro", "Thiès", "Toronto"],
        // ["Yamoussoukro", "Thiès", "Toronto"] not more than tree value but i can specify more than one value in array 
    ];
}

let [countries, cities, capitals] = allCountries();

console.log(countries); // Affiche : ["Côte d'Ivoire", "Senegal", "Canada"]
console.log(cities);    // Affiche : ["Abidjan", "Dakar", "Ottawa"]
console.log(capitals);  // Affiche : ["Yamoussoukro", "Thiès", "Toronto"]
