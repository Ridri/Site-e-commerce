import { useEffect, useState } from 'react';
import { db } from '../firebase';

import Header from '../containers/Header';
//import ProductList from '../containers/ProductList';
import Footer from '../containers/Footer';
import { mockProducts } from '../db/productsDB';
import Categorie from '../containers/Categorie';
import Upcycling from '../containers/Upcycling';


function Home() {

  const [products, setProducts] = useState([]);
  const [isDatabaseLoaded, setIsDatabaseLoaded] = useState(false);

  useEffect(() => {
    db.collection('products').onSnapshot(snapshot => {
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
      <div className="relief">
        <Header />
        <Categorie />
        {/*<ProductList products={isDatabaseLoaded ? products : mockProducts} />*/}
        <Upcycling />
        <br />
      </div>
      <Footer />

    </>
  );
}
export default Home;