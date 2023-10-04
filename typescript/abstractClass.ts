// how to use abstract 
// les classes abstraites sont utilisés lorsque'on ne sait ce que l'utlisateur final fera de la class 
// pas de création de nouveaux utilisateurs sur les class abstracts 
// pas de nouvelles 

abstract class takePhoto {
    constructor(
        public camera:string, 
        public full:boolean,
        public burst:number 
        ){}// sans '{}' il affiche constructor implement is missing
}

// const hisht =new takePhoto() doesn't work because cannot create a instance with abstact class

class Instagram extends takePhoto {
    constructor(
        // public camera:number,  en mettant number il reflète une erreur en disant que ce type n'est pas assigné car dans takephoto il string
        public camera:string,
        public full:boolean,
        public burst: number,
        public numberOFriendToSendPhoto :number,
    ){super(camera,full,burst)}// le construtor doit contenir le super pour pouvoir être réellement une extension de class abstraite takePhoto... N'oublie pas aussi d'ajouter les variables du super dans le constructor
}                               

const hish = new Instagram("Iphone 12Pro", true, 7,70);
console.log(hish);