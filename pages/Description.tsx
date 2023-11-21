// import Description from '../containers/Description';
import Footer from '../containers/Footer';

const Description: React.FC = () => {
	return (
		<div className="description-css">
			<h1>Konbini et le Upcycling</h1>
			<div className="image-container">

				<div>
					<img src="https://media.discordapp.net/attachments/1165910637772283954/1169374146396958810/U25XAARLUZEO3K5UGJEJEMIN2M.jpg" alt="Image 1" className="image" />
				</div>

				<div>
					<div>
						<p>En 2021, Konbini a lancé son "studio d'upcycling", réinventant la mode en recyclant des vieux vêtements pour créer une collection unique tous les 6 mois. Pour sa première collection, intitulée "Upcycling", Konbini a collaboré avec le talentueux Jacquemus.</p>
						<br />



						<p>Les bénéfices générés par cette collection sont reversés à des associations, marquant ainsi un engagement en faveur de causes environnementales.</p>
						<br />



						<p>L'upcycling, une méthode de création durable, transforme des matériaux en fin de vie en produits de qualité supérieure, contribuant ainsi à la réduction des déchets et à la préservation de nos ressources naturelles.</p>



						<br />
            {/*<p>Cette tendance gagne en popularité grâce à son impact environnemental positif. De nombreux sites de commerce électronique proposent des produits upcyclés, de la mode à la décoration, offrant ainsi des produits uniques et respectueux de l'environnement aux consommateurs.</p>*/}


						<br />

						<br />


					</div>
				</div>

				<div>
					<img src="https://media.discordapp.net/attachments/1165910637772283954/1169377509138239488/Capture_decran_2023-11-01_214807.png" alt="Image 2" className="image"  />
				</div>
			</div>
      <br/>
			<Footer />
      
		</div>
	);
};

export default Description;




