// create User type 
type User ={
    name:string, 
    email:string,
    isActive:boolean,
    // cardnumber? :number optionnal type
}

function createUser(user:User){
    // user.name = "koffi",
    // user.email = 'kankoffi36@gmail.com', 
    // user.isActive = true,
    console.log(`${user.name} -> ${user.email} -> ${user.isActive}`)
}
const userInfo = {name :"koffi", email:"kankoffi36@gmail.com", isActive: true}
const userInfo01 = {name :"mathias", email:"mathiasYao@gmail.com", isActive: true}

// create a cardNumber type 
type cardnumber = {
    cardNumber :string
}
// creat a carDate type
type carddate ={
    cardDate : string
}
// create a mixed type card 
type cardDetails = cardnumber & carddate & {
    cvv :number 
}


createUser(userInfo)
createUser(userInfo01)