//  use interface
// permet d'assurer de la cohérence des valeurs 
//  approfindie les interface

// 
interface cardDetails {
    cardNumber :string
    cardDat : Date
    cvv :number 
}

interface UserIns { // il identife la similiarité avec les variable qui sont dans un autre fichier 
    readonly dbId:number, 
    email:string,  
    userId:number, 
    googleId?:string,  // est utilsé // googleId is optionnal
    creditCard: (card:cardDetails, askCard:boolean, prenium:boolean) =>cardDetails|string // créer un interface pour cet objet ou function pour qu'il concorde au donnée
}
// add another property 
interface UserIns{
    githubToken :string,
}
// Interface Admin contient les propriétés de UserIns + ces propres propriétés 
interface Admin extends UserIns{
    role: "admin"|"learner"|"client"
}
// creer un interface de creditCard avec du contenu 
// interface creditCard{
//     cardNumber:string, 
//     carDate:Date,
//     cvv:string
// }
const hishty :Admin = 
    {
        dbId:7841, 
        email: "hs@gmail.com", 
        userId: 147822, 
        // une fonction qui retourne ça carte de crédit s'il il a demandé et verifie s'il est un aboonée prenium
        creditCard :(card,askCard,prenium) =>{  //'cardDetails' only refers to a type, but is being used as a value here
            // cardNumber :"1478 7841 5632 4789",
            // cardDate: new Date(2023,4,8),
            // cvv: 147
            if (askCard == true){
                if (prenium == true){
                     return card;
                }
                else {
                    return "you cannot access at your credit card"
                }
            }
            return "you don't ask your credit card"
        },
        githubToken : "github",
        role : "admin"
    }   


    // assigner une valeur card 
    const card:cardDetails ={
        cardNumber :"1478 7841 5632 4789",
        cardDat: new Date(2023,4,8),
        cvv: 147
    }
    const hishtyInfo = hishty;
    const hishtyCard = hishty.creditCard(card, true, true)
    console.log(hishtyCard);
 