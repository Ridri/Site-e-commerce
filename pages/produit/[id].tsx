import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { db } from '../../firebase'; 
import { mockProducts } from '../../db/productsDB';

function findProductById(id) {
  return mockProducts.find(product => product.id === parseInt(id, 10));
}

function ProduitDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(null);
  const [isFirebaseLoaded, setIsFirebaseLoaded] = useState(false);

  useEffect(() => {
    if (id) {
      db.collection('produits').doc(id).get().then(doc => {
        if (doc.exists) {
          setProduct(doc.data());
          console.log("doc ***", doc.data());
          setIsFirebaseLoaded(true);
        }else{
          console.log("NOPE");
        }
      });
    }
  }, [id]);

  const displayProduct = isFirebaseLoaded ? product : findProductById(id);

  if (!displayProduct) {
    return <div>Produit non trouvé</div>;
  }
  
  return (
    <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
      {displayProduct && (
        <>
          <h1 className="text-2xl font-bold mb-4 w-full text-center">{displayProduct.name}</h1>
          <div className="w-full mb-4 overflow-hidden rounded-md flex justify-center items-center">
            <img src={displayProduct.imageSrc} className="object-cover object-center" />
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="text-lg font-semibold">
				Prix: <span className="text-xl text-blue-600">{displayProduct.price}</span>
			</div>
          </div>
        </>
      )}
    </div>
  )
}

export default ProduitDetail;