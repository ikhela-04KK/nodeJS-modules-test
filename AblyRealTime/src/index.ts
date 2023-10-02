// const Ably = require("ably");

import Ably from "ably";
// Create the client
const ably = new Ably.Realtime.Promise({
  authUrl: "https://ably.com/ably-auth/token/docs",
});

// wrapper for async functions
const ablyRealtimePromiseExample = async () => {
  // Connect to Ably
  await ably.connection.once( "connected" );
  console.log("Connected to Ably!");

  // get the channel to subscribe to
  const channel = ably.channels.get("quickstart");

  /* 
    Subscribe to a channel. 
    The promise resolves when the channel is attached 
    (and resolves synchronously if the channel is already attached).
  */
  await channel.subscribe("greeting", (message) => {
    console.log("Message is ==> " + message.data);
  });

  // Publish a message or two
  await channel.publish("greeting", "hello!");
  await channel.publish("greeting", "hello!");
  await channel.publish("greeting", "hello!");

  // wait 2s to receive all messages and then shut down
  setTimeout(() => {
    console.log("Closing connection...");
    ably.close();
    console.log("Closed the connection to Ably.");
  }, 2000);
};

// call wrapper
ablyRealtimePromiseExample();

// use class of ts 
const city = "Bonoua"
class Users {
  // email:string  // if we don't have property email:string , error does not exist property email is raised
  // name:string  supprimer pour que les variables instancier dans le construteur fonctionne
  readonly city:string =city // à partir de la 3eme valeur , il faut specifier la valeur du type
  
  constructor (public email: string, private name: string){  // mettre toujours les types des constructors ..  même si ils ont été déclaré plus haut 
    this.email = email
    this.name = name // pas besoin d'instancier avec les this vu qu'il fait le job avec le public/private, this est utilisé pour accéder au propriété actuelle de la class ou de l'instance
    -
  }
}


const hish = new Users("h@gmail.com","hisht")
// hish.city = "ikeha"  city est sous forme de readonly
console.log(hish.email = "ik@gmail.com")
// console.log(hish.name = "ieo")  // property name is private

// console.log(hish.city = "788e"); it's a readonly
