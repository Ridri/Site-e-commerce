import Footer from '../containers/Footer';

const Nouveaute: React.FC = () => {
  return (
    <div>
    <div className="nouveaute-container">
      <img
        src="https://media.discordapp.net/attachments/1165910637772283954/1169580209289318452/image3.jpg?ex=6555eb73&is=65437673&hm=72127eb685ddea2a63ef8b88aa53e5b9b4324246df5a22c74c5ac38b1fcaf61a&=&width=978&height=652" // Remplacez par l'URL de votre image
        alt="Nouveauté"
        className="nouveaute-image"
      />
      <p className="nouveaute-text">
        Découvrez notre toute dernière nouveauté ! Le Matching Upcycling via une IA, CoutureReborn. 
        <br/>
        Créez vos propres vêtements grâce à l'IA CoutureReborn.
        <br/>
        <br/>
        <br/>
        Arrive prochainement !
      </p>
    </div>
    <div>
      <Footer />
    </div>
    </div>
  );
}

export default Nouveaute;