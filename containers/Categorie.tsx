function Categorie({products}) {

  const Categorie = [
    { id: 1, 
     image: 'https://media.discordapp.net/attachments/1165910637772283954/1168574551328821299/Z.png', 
     nom: 'Homme', lien: "/men" },
    
    { id: 2, 
     image: 'https://media.discordapp.net/attachments/1165910637772283954/1168575793669095464/DreamShaper_v7_collection_pantalon_jacquemus_x_kombini_upcycli_1.jpg', 
     nom: 'Femme', 
     lien: "/women" },
    
    { id: 3,     image:"https://media.discordapp.net/attachments/1165910637772283954/1168583919168389363/Leonardo_Diffusion_XL_Take_inspiration_from_the_French_country_0_1.jpg?ex=65524b95&is=653fd695&hm=d665e36da67d9cb54ee2829ec2177a9b6ce3ebd2494f7b597d3d48ec99c8e069&=&width=977&height=652",
     nom: 'Sacs', 
     lien: "/bags"},
    ];

  return (

    <div className= "categorie-css grid grid-cols-3 gap-4 ">
    <ul className= "flex items-stretch">
      {Categorie.map((Categorie) =>
        <li key={Categorie.id}>
          <a href={Categorie.lien}><img src={Categorie.image} alt={Categorie.nom} /></a>
          <h2>{Categorie.nom}</h2>
        </li>
      )}
    </ul>
    </div>
  )
}

export default Categorie;