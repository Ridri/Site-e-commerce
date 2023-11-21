import Navigation from './../containers/Navigation';
import HeaderBags from '../containers/HeaderBags';
import ProductList from '../containers/ProductList';
import { mockProducts } from '../db/productsDB'; 

import Footer from '../containers/Footer';

import { useEffect, useState } from 'react';
import { db } from '../firebase';

function Bags() {

	const [products, setProducts] = useState([]);
	const [isDatabaseLoaded, setIsDatabaseLoaded] = useState(false);

	  useEffect(() => {
		db.collection('produits').where('categorie', '==', 'Sac').onSnapshot(snapshot => {
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
	
  return(
      <> 
        <div>
          <HeaderBags />
		  <ProductList products={isDatabaseLoaded ? products : mockProducts} />
          <Footer />
        </div>
      </>
  )
    
  
  
}

export default Bags;