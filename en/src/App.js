import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element="" />
        <Route path="/products" element="" />
        <Route path="/checkout" element="" />
        <Route path="/faq" element="" />
        <Route path="/about" element="" />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
