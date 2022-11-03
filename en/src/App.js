import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Cart from './components/cart/Cart';
import Container from './components/layouts/Container';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Home from './components/pages/Home';
import NewProduct from './components/pages/NewProduct';
import Products from './components/pages/Products';
import AboutUs from './components/pages/AboutUs';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('products');

    if (data !== null) {
      setProducts(JSON.parse(data));
    }
  }, [setProducts]);

  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem('products', JSON.stringify(products));
    }
  }, [products]);

  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <Home productsState={products} setProductsState={setProducts} />
            }
          />
          <Route
            path="/newproduct"
            element={
              <NewProduct setProducts={setProducts} products={products} />
            }
          />
          <Route
            path="/products"
            element={
              <Products
                productsState={products}
                setProductsState={setProducts}
              />
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
