

function Footer() {
  const Mentions = [
  { id: 1, nom: 'Mentions légales', lien: '#' },
  { id: 2, nom: 'Conditions de vente', lien: '#' },
  { id: 3, nom: 'Politique de confidentialité', lien: '#' },
];
const Faq = [
  { id: 1, nom: 'Compte', lien: '#' },
  { id: 2, nom: 'Informations de livraison', lien: '#' },
  { id: 3, nom: 'Commandes', lien: '#' },
  { id: 4, nom: 'Paiements', lien: '#' },
  { id: 5, nom: 'Retours & échanges', lien: '#' },
  { id: 6, nom: 'Guide des tailles', lien: '#' },
];
const Entreprise = [
  { id: 1, nom: 'Nous contacter', lien: '#' },
  { id: 2, nom: 'Nos boutiques', lien: '#' },
  { id: 3, nom: 'Carrière', lien: '#' },
];
const NousSuivre = [
  { id: 1, nom: 'Instagram', lien: '#' },
  { id: 2, nom: 'Facebook', lien: '#' },
  { id: 3, nom: 'Tiktok', lien: '#' },
];

  return (
    <main>

      <div className="footer-css grid grid-cols-4 gap-4 place-content-center h-48 ...">
        <div>
          <h1>Mentions légales et cookies</h1>
          <ul>
            {Mentions.map((mention) => <li key={mention.id}><a href={mention.lien}>{mention.nom}</a></li>)}
          </ul>
        </div>

        <div>
          <h1>Faq</h1>
          <ul>
            {Faq.map((mention) => <li key={mention.id}><a href={mention.lien}>{mention.nom}</a></li>)}
          </ul>
        </div>

        <div>
          <h1>Entreprise</h1>
          <ul>
            {Entreprise.map((mention) => <li key={mention.id}><a href={mention.lien}>{mention.nom}</a></li>)}
          </ul>
        </div>

        <div>
          <h1>Nous suivre</h1>
          <ul>
            {NousSuivre.map((mention) => <li key={mention.id}><a href={mention.lien}>{mention.nom}</a></li>)}
          </ul>
        </div>

      </div>
    </main>

  ); 
}

export default Footer;