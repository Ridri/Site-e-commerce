import Link from 'next/link';
import { products } from '../db/productsDB';

function Produits() {

  return (
    <div>
      <h1>Liste des Produits</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link href={`/produit/${product.id}`}>
               {product.nom}
            </Link>
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default Produits;