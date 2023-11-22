import Header from '../components/Header';
import { Link } from 'react-router-dom';
import {shittyStars} from "../utilis/celebrities-utilies";
// import "./Celebritiespage.scss"

function Celebritiespage () {

    return (
        <>
            <Header currentpage="celebrities" />
            <h2>Toutes les célébrités de merde</h2>
            {shittyStars.map((star) => {
                return (
                    <>
                        <article>        
                            <p className='imgStar'>{star.name}</p>
                            <p ><img src={star.img} /></p>
                            {/* Le Link créé un lien vers l'id de la presonalité et affchie les élements demandés
                            sur la page dont l'url est celebrities donc de la page celebritepage.jsx */}
                            <Link to={`/celebrities/${star.id}`}>
                                Afficher la célébrité
                            </Link>                           
                        </article>
                    </>
                )
            })}
        </>
    );
}
export default Celebritiespage;