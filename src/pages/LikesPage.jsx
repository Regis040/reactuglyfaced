import {useState} from 'react'
function LikesPage () {

    // je veux un compteur qui montre le nombre de "likes" déclenchés suite au clik sur un bouton
    // Je mets en place une fonction Hook, "useState"  qui va enregistrer le nombre de clic dans une variable d'état "likes"
    // et qui va relancer le composant "LikesPage" sans perdre la donnée des précédents clics. 
    // Au premier chargement, la variable "likes" prendra la valeur 0.
    // Au click la fonction eventListener "onClick" est activée et lance  handleLikeClick qui prends alors la valeur de setLikes
    // c'est à dire le nombre de likes "likes" + 1.
    const [likes, setLikes] = useState(0);

    // Je veux pouvoir ajouter un message "vous ne pouvez pas liker plus de 5 fois" qui apparait au 6ième clic et 
    // un bouton qui permet de fermer ce même message
    // Je mets donc en place une fonction hook "useState" qui prend comme valeur false et qui sera activée au 6ième clic.
    const[displayMessage, setDisplayMessage]  = useState (false);
    // au 6ième  clic la fonction setDisplayed est engagée par "true"
    // le message apparait ainsi que le bouton qui est attaché à un eventlistener qui 
    // au clic sur le message du bouton va envoyer dans la variable "displayMessage" un false et ainsi fermer le message
    // "vous ne pouvez pas liker plus de 5 fois" ainsi que le bouton.
    const handleLikeClick = () => {
        if (likes < 5) {
            setLikes(likes +1)
        } else {
            setDisplayMessage(true)
        };        
    };
    // J'ai ajouté setLikes(0) dans la fonction evenListner afin de mettre les likes à zéro
    const endClick = () => {
        setDisplayMessage(false)
        setLikes(0)
    }

    return (
            <main>
                {displayMessage && (
                    <div>
                        <p>Vous ne pouvez plus liker plus de 5 fois</p>
                        <button onClick={endClick}>Fermer le message</button>
                    </div>
                )}
                <button onClick={handleLikeClick}>Like</button>
                {/* Chaque clic sur le bouton sera ajouté dasn le paragraphe ci-dessous */}
                <p>vous avez liké {likes} fois</p>
                {/* {likes == 5 && (
                    <p>Tu ne peux pas liké plus de 5 fois ... roublard ... tu n'es pas chez cdiscount ! </p>
                )} */}
            </main>
    )
}
export default LikesPage;