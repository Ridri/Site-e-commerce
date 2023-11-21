import Navigation from '../containers/Navigation';
import HeaderCol from '../containers/HeaderCol';
import ProductList from '../containers/ProductList';
import { mockProducts } from '../db/productsDB';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import Footer from '../containers/Footer';



function collection() {
	const [products, setProducts] = useState([]);
	const [isDatabaseLoaded, setIsDatabaseLoaded] = useState(false);

	useEffect(() => {
		db.collection('produits').where('categorie', '==', 'collection').onSnapshot(snapshot => {
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
			<h1 className="titre-categorie">Jacquemus X Konbini</h1>
			<div>
				<ProductList products={isDatabaseLoaded ? products : mockProducts} />
				<Footer />
			</div>
		</>

	);
}

export default collection;