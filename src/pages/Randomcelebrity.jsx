import {shittyStars} from "../utilis/celebrities-utilies";

function Randomcelebrity () {

    const randomIndex = (Math.random() * (shittyStars.length - 1)).toFixed(0);

    const randomCelebrity = shittyStars[randomIndex];


    return (
        <>
            <h2>My random celebrity</h2>
            <p>{randomCelebrity.name}</p>
        </>
    );
}
export default Randomcelebrity;