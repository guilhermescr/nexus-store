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

import { v4 as uuidv4 } from 'uuid';

import Kit1_Ryzen from './img/what_we_recommend_computers/ryzen_kit1.png';

function App() {
  const [products, setProducts] = useState([
    {
      productName:
        'PC Gamer - Ryzen 5 5600G, B450M Aorus Gigabyte, x2 8GB RAM Memory, RGB Cabinet with one fan',
      id: uuidv4(),
      description:
        "This Ryzen kit was designed for people who strive to play amazing games with no low memory or lags. The Ryzen 5 5600G is one of the best processors for friendly games, as well as it's good for homework and video editing.",
      old_price: 2455.49,
      inCash_price: 2210.99,
      discount: 15,
      creditCard_price: 2350.99,
      creditCard_installment: 10,
      creditCard_installment_price: 235.33,
      creditCard_fees: 0,
      imgSrc: Kit1_Ryzen,
      imgAltText: 'Kit 1 - Ryzen'
    }
  ]);

  useEffect(() => {
    const data = localStorage.getItem('products');

    if (data !== null) {
      setProducts(JSON.parse(data));
    }
  }, [setProducts]);

  useEffect(() => {
    console.log(products);
    if (products.length > 1) {
      localStorage.setItem('products', JSON.stringify(products));
    }
  }, [products]);

  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home productsState={products} />} />
          <Route
            path="/newproduct"
            element={
              <NewProduct setProducts={setProducts} products={products} />
            }
          />
          <Route
            path="/products"
            element={<Products productsState={products} />}
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
