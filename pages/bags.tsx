import Navigation from './../containers/Navigation';
import HeaderBags from '../containers/HeaderBags';
import ProductList from '../containers/ProductList';
import { mockProducts } from '../db/productsDB'; 

function Bags() {
  return(
      <> 
        <h2> sac </h2>
        <div>
          <HeaderBags />
          <ProductList products={mockProducts} />
        </div>
      </>
  )
    
  
  
}

export default Bags;