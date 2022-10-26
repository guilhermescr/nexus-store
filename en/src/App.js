import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Cart from './components/cart/Cart';
import Container from './components/layouts/Container';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Home from './components/pages/Home';
import NewProduct from './components/pages/NewProduct';
import Products from './components/pages/Products';
import AboutUs from './components/pages/AboutUs';
import { updateDatabase } from './components/products/productsDB';

function App() {
  
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('productsDB'));

    if (!(data === null)) {
      updateDatabase(data);
    }
  }, []);
  

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
