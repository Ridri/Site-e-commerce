import Navigation from '../containers/Navigation';
import HeaderCol from '../containers/HeaderCol';
import ProductList from '../containers/ProductList';
import { mockProducts } from '../db/productsDB';
function collection() {
  return (
    <>
      <h2>collect</h2>
      <div>
        <HeaderCol />
        <ProductList products={mockProducts}/>
      </div>
     </>

  );
}

export default collection;