

function CocktailsPage () {
// La fonction fetch va récupèrer les données présents sur l'API
     fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    //  lorsque les données sont prètes (télécharger), elles sont placées dans la variable "response"
            .then((response) => {
                // et retourner sous forme de ficher json plus lisible sous javascript et donc présentées sous forme d'un tableau
        return response.json();        
     }) 
    //  enfin, j'affiche dans la console le rendu du tableau
     .then((json) => {
        console.log(json);
     });
    //  affichage sur la page le texte "test" pour vérifier la bon exécution de mon composant
    return <p>test</p>   
};
export default CocktailsPage;