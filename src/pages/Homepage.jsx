import CelebrityCard from '../components/CelebrityCard';
import Header from '../components/Header';
import {shittyStars} from "../utilis/celebrities-utilies";

function Homepage () {
 
//  afficher les 5 célébrités les plus recemment publiées
// Faire un tri dans le tableau "shittyStars" afin de récupérer "les récemment publiés"
const shittyStarsSortByDate = shittyStars.sort((star1, star2) => new Date(star1.publishedAt) - new Date(star2.publishedAt))
// Puis récupérer de ces données précdentes, les 5 derniers de "ces récemment publiés"
const theFiveShittyStars = shittyStarsSortByDate.slice(-5);

const pikedStars = shittyStars.filter(star => star.isPickedByTeam);
const pikedStars3 = pikedStars.slice(-3)

    return (
        <>
            <Header currentpage="home"/>
            <h2>Les 5 stars les plus détestées recemment publiées</h2>
            {theFiveShittyStars.map((star) => {
                return (
                    <>
                    {/* La fonction CelebrityCard ci-dessous a une props déclarée en paramètre "celebrityToDisplay" qui elle-même prend 
                    le paramètre "star" dans la fonction de la page présente
                    Ainsi, le texte peut être remplacé pas seulement sur une page comme ici mais sur plusieurs pages*/}
                        <CelebrityCard celebrityToDisplay ={star} />
                        {/* <article>        
                            <p>{star5.name}</p>
                        </article> */}
                    </>
                )
            })}

            <h2>Les 3 célébrités les plus hais choisies par la team de journalopes</h2>

            {pikedStars3.map((teampiked) => {
                return (
                    <>
                        <article>        
                            <p>{teampiked.name}</p>
                        </article>
                    </>
                )
            })}
        </>
    );
}
export default Homepage;