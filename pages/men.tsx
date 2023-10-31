import Navigation from '../containers/Navigation';
import HeaderMen from '../containers/HeaderMen';
import ProductList from '../containers/ProductList';
import { mockProducts } from '../db/productsDB';

import { useEffect, useState } from 'react';
import { db } from '../firebase';

function Men() {

	const [products, setProducts] = useState([]);
	const [isDatabaseLoaded, setIsDatabaseLoaded] = useState(false);

	  useEffect(() => {
		db.collection('produits').onSnapshot(snapshot => {
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
      <h2>men</h2>
      <div>
        <HeaderMen />
		<ProductList products={isDatabaseLoaded ? products : mockProducts} />
      </div>
     </>
     
  );
}

export default Men;
