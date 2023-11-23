import {useState} from 'react'

function FormMessagePage () {
// la fonction hook useState a pour paramètre une chaine de caractére placé dans la variable "message".
// la fonction "setMessage"a 2 rôles:d'abord de récupèrer le paramètre "message"et de la garder en mémoire  et ensuite de 
// rafraichir la page à chaque ajout d'un caractère.
// A l'ouverture de la page, celle-ci charge une page sans message.
// Lorsqu'un caractère est entré dans le input, la fonction onChange renvoie celui-ci dans message par l'intermédaire
// de setMessage. useState garde la caractère tapé, rafraichi la page et affiche ce caractère.
// variable d'état, stocker une valeur en dehors du composant, fonction d'evenListener

    const [message, setMessage] = useState("");
    const handleMessageChange = (event)=> {
        setMessage(event.target.value);
    };

    return (
        <form>
            <label>
                Message : 
                <input onChange={handleMessageChange} type="text" name="message" />
            </label>
            <p>Vous avez envoyé : "{message}"</p>
        </form>
    );
}
export default FormMessagePage;