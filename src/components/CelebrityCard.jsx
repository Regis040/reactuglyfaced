
//  props placé en paramètre au sein de la function.
// Elle est appelé dans Homepage.jsx
function CelebrityCard ({celebrityToDisplay}) {
    return (
        <>
            <article>        
                <p>{celebrityToDisplay.name}</p>
            </article>
        </>
    );
}
export default CelebrityCard;