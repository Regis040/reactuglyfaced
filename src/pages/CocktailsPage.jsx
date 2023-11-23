import {useState} from 'react'

function CocktailsPage () {

    // Je veux afficher les données lorsqu'elle seront prètes mais si elles ne le sont pas, je veux pouvoir le visualiser par un message.
    // Je met en place une fonction hook useState qui va me récupérer les cocktails.
    // au chargement du composant, les données sont abscentes quelques micro secondes. 
    // Cette information est traitée dans le paragraphe p "cocktails en préparation"    
    const [cocktails, setCocktails] = useState(null);

    // Afin d'éviter que la fonction tourne en boucle, on impose un "s'il n'y a pas de données, alors on execute le fetch"   
    if (!cocktails) {
// La fonction fetch va récupèrer les données présents sur l'API
     fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    //  lorsque les données sont prètes (télécharger), elles sont placées dans la variable "response"
            .then((response) => {
                // et retournées sous forme de javascript et donc présentées sous forme d'un tableau
        return response.json();        
     }) 

     .then((json) => {
                //   j'affiche dans la console le rendu du tableau
        console.log(json);
                //   j'entre les données recueillies au sein de la fonction useState
        setCocktails(json);
     });
    }
    //  Les données recueillies dasn la fonction "useState" sont traitées dans le "if ... si les données sont reçues et 
    // transformer en javascript alors "Les cocktails sont prêts"".
    return (
        <main>
            {cocktails ? (<article>Les cocktails sont préts</article>
            ) : (
                <p>Cocktails en cours de préparation</p>
            )}
        </main>
    )
};
export default CocktailsPage;