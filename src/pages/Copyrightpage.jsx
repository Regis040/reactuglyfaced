import {useState} from "react";

function CopyrightPage () {
    // on utilise useState auquel on ajoute un paramètre et une fonction. Une valeur par défaut est donnée à ce paramètre:
    // ici, ce sera le boléen "true"
    // Lors du chargement de la page la première fois, useState va charger la page avec le texte puisque c'est "true"
    // Au click, la valeur de setDisplayText change pour devenir "false", useState va entrainer le rechargement de la page.
    // useState va alors vérifier la valeur du paramètre displayText du chargement précédent de la page qui sera donc "false".    
    // Le texte va alors ne pas être affiché
    const [displayText, setDisplayText] = useState (true);

    const handleButtonClick =() => {
            setDisplayText(!displayText);
    };
    return (
       <main>
            {displayText && <p>balblanlih oioqnsc gre.</p>}
            <button onClick={handleButtonClick}>click ici</button>
       </main>
    )
}
export default CopyrightPage;