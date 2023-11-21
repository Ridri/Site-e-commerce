function Categorie({ products }) {

	return (
		<div className="categorie ">
			<div className="grid grid-flow-col justify-stretch ...">
				<div>
					<a href="/men"><img src="https://media.discordapp.net/attachments/1165910637772283954/1168574551328821299/Z.png" alt="image" />
					</a>
					<h1>Homme</h1>
				</div>

				<div>
					<a href="/women"><img src="https://media.discordapp.net/attachments/1165910637772283954/1168575793669095464/DreamShaper_v7_collection_pantalon_jacquemus_x_kombini_upcycli_1.jpg" alt="image" />
					</a>
					<h1>Femme</h1>
				</div>

				<div>
					<a href="/bags"><img src="https://media.discordapp.net/attachments/1165910637772283954/1168583919168389363/Leonardo_Diffusion_XL_Take_inspiration_from_the_French_country_0_1.jpg" alt="image" />
					</a>
					<h1>Sac</h1>
				</div>
			</div>
		</div>

	)
}

export default Categorie;














