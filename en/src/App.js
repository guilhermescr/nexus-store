import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';
import Container from './components/layouts/Container';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import AboutUs from './components/pages/AboutUs';
import Home from './components/pages/Home';
import NewProduct from './components/pages/NewProduct';
import Products from './components/pages/Products';
import { productsDB, updateDatabase } from './components/products/productsDB';

function App() {
  useEffect(() => {
    if (productsDB.length > 0) {
      localStorage.setItem('productsDB', JSON.stringify(productsDB));
    }

    updateDatabase(JSON.parse(localStorage.getItem('productsDB')));
  }, [productsDB]);

  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
