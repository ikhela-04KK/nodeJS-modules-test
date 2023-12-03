import {useState} from "react"; 
export const useToggle = () =>{
    const  [status, setStatus] = useState(false); 
    const toggeStatus = () => setStatus(prevStatus =>!prevStatus)
    return  {status , toggeStatus}
}

// todo : le but c'est de creer un hook reutilisable de telle sorte à pouvoir l'importer dans d'autre composant plus facilement 

// todo: par exemple après avoir créer ce composant  dans le composant toggle nous pouvons voir ceci 
