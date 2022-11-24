import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Cart from './components/pages/Cart';
import Container from './components/layouts/Container';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Home from './components/pages/Home';
import NewProduct from './components/pages/NewProduct';
import Products from './components/pages/Products';
import AboutUs from './components/pages/AboutUs';
import ExpandedProduct from './components/pages/ExpandedProduct';
import NotFound from './components/NotFound';

function App() {
  const [products, setProducts] = useState([]);
  const [productsInCart, setProductsInCart] = useState([]);

  useEffect(() => {
    const productsData = localStorage.getItem('products');
    const productsInCartData = localStorage.getItem('productsInCart');

    if (productsData !== null) {
      setProducts(JSON.parse(productsData));
    }

    if (productsInCartData !== null) {
      setProductsInCart(JSON.parse(productsInCartData));
    }
  }, [setProducts, setProductsInCart]);

  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem('products', JSON.stringify(products));
    } else {
      localStorage.removeItem('products');
    }

    if (productsInCart.length > 0) {
      localStorage.setItem('productsInCart', JSON.stringify(productsInCart));
    } else {
      localStorage.removeItem('productsInCart');
    }
  }, [products, productsInCart]);

  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                productsState={products}
                setProductsState={setProducts}
                productsInCart={productsInCart}
                setProductsInCart={setProductsInCart}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
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
                productsInCart={productsInCart}
                setProductsInCart={setProductsInCart}
              />
            }
          />
          <Route
            path="/product/:productId"
            element={
              <ExpandedProduct
                products={products}
                productsInCart={productsInCart}
                setProductsInCart={setProductsInCart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                productsInCart={productsInCart}
                setProductsInCart={setProductsInCart}
              />
            }
          />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
