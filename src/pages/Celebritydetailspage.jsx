import {useParams} from "react-router-dom";
import {shittyStars} from "../utilis/celebrities-utilies";

function Celebritydetailspage () {
        // Je veux récupérer l'id des personnalités
        const {id} = useParams();
        // Je récupère l'id en chaine de cracrtère et la transforme en chiffre
        const idInt = parseInt(id);
        // Je récupère l'id de chaque trouducs ;)
        const shittyStarsFound = shittyStars.find((star) => {
            return star.id===idInt;
        });

    return (
        <>
        {/* La page doit afficher une célébrité qui a été cliquée sur un lien au bas de chaque célébrité présente dans la page "celebritiespage.jsx" */}
             <h2>My page of a celebrity</h2>
             <main>     
                           {/* si la personnalité existe alors*/}
                    {shittyStarsFound ? (
                        <article>
                            <h3>Détail de la pire célébrité choisie</h3>
                            <p>{shittyStarsFound.name}</p>
                            <p>{shittyStarsFound.bio}</p>
                            <p><img src={shittyStarsFound.img} /></p>
                        </article>
                        // sinon ...
                    ) : (
                        <p>Le gars n'est pas là</p>
                )}
             </main>
        </>
    );
}
export default Celebritydetailspage;