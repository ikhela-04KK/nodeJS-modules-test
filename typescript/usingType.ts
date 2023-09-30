// create User type 
type User ={
    readonly _id: number,
    name:string, 
    email:string,
    isActive:boolean,
    // cardnumber? :number optionnal type
}
// create a mixed type card 
// // create a cardNumber type 
// type cardnumber = {
//     cardNumber :string
// }
// // creat a carDate type
// type carddate ={
//     cardDate : string
// }
// type cardDetails = cardnumber & carddate & {
//     cvv:number,
// }

interface cardDetails {
    cardNumber :string
    cardDate : string
    cvv :number 
}
// create 

function createUser(user:User){
    // user.name = "koffi",
    // user.email = 'kankoffi36@gmail.com', 
    // user.isActive = true,
    // user._id = 4177411477  // don't pass because it's readonly methodes 
    return `${user.name} -> ${user.email} -> ${user.isActive}`; 
}
const userInfo = {_id: 17745454778, name :"koffi", email:"kankoffi36@gmail.com", isActive: true}
const userInfo01 = {_id: 87817781778,name :"mathias", email:"mathiasYao@gmail.com", isActive: true}



//create a function which will allow yiu ti add info card user 
function infoCardUser (card : cardDetails){
    console.log(`${card.cardDate}:${card.cardNumber}:${card.cvv}`)
}

const cardUserInfo = {cardNumber:"1478 7841 5632 4789",cardDate:"2023-04-17", cvv: 147} // dans ce cas ici présent typescript m'oblige à fournir les arguments des types qui sont dans les types

infoCardUser(cardUserInfo);
const user01 = createUser(userInfo)
console.log(user01);
createUser(userInfo01)