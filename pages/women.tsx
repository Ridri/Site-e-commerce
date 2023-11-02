import Navigation from '../containers/Navigation';
import HeaderWomen from '../containers/HeaderWomen';
import ProductList from '../containers/ProductList';
import { mockProducts } from '../db/productsDB';

import { useEffect, useState } from 'react';
import { db } from '../firebase';

function women() {

	const [products, setProducts] = useState([]);
	const [isDatabaseLoaded, setIsDatabaseLoaded] = useState(false);

	  useEffect(() => {
		db.collection('produits').where('categorie', '==', 'Femme').onSnapshot(snapshot => {
		  //const fetchedProducts = snapshot.docs.map(doc => doc.data());
		  const fetchedProducts = snapshot.docs.map(doc => ({
			id: doc.id,
			...doc.data()
		  }));
		  console.log("Fetched products:", fetchedProducts);  // Log pour vérifier les produits
		  setProducts(fetchedProducts);
		  setIsDatabaseLoaded(true);
		});
	  });
	
  return (
    <>
      <div>
        <HeaderWomen />
	    <ProductList products={isDatabaseLoaded ? products : mockProducts} />
      </div>
     </>
  );
}

export default women;