import Header from '../components/Header';
import TvSpeakerCard from '../components/TvSpeakerCard';

function TvSpeakersPage () {
   
   const shittyTvSpeakers =[
    "Laurent Ruquier", "Pasacel Praud", "Hanouna", "Morandini"
   ];

    return (
            <>
                <Header />
                <main>
                    <h3>The worst Tvs speakers</h3>
                    {shittyTvSpeakers.map ((speaker) => {
                        return (                            
                                <TvSpeakerCard speakername={speaker} />                            
                        )
                    })}
                </main>

            </>
    )
}
export default TvSpeakersPage;