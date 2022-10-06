import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './components/layouts/Container';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import AboutUs from './components/pages/AboutUs';
import Home from './components/pages/Home';
import Products from './components/pages/Products';

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
