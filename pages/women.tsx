import Navigation from '../containers/Navigation';
import HeaderWomen from '../containers/HeaderWomen';
import ProductList from '../containers/ProductList';
import { mockProducts } from '../db/productsDB';
function women() {
  return (
    <>
      <h2>women</h2>
      <h3>Bonjour</h3>
      <div>
        <HeaderWomen />
        <ProductList products={mockProducts}/>
      </div>
     </>
  );
}

export default women;