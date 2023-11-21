import Header from '../containers/Header';
//import ProductList from '../containers/ProductList';
import Footer from '../containers/Footer';
import Categorie from '../containers/Categorie';
import Upcycling from '../containers/Upcycling';


function Home() {
  return (
    <>
      <div className="relief">
        <Header />
        <Categorie />
        <Upcycling />
        <br />
      </div>
      <Footer />

    </>
  );
}
export default Home;