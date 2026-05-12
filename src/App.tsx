import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Services from './pages/Services';
import AutoDetailing from './pages/AutoDetailing';
import BoatDetailing from './pages/BoatDetailing';
import CeramicCoating from './pages/CeramicCoating';
import PaintCorrection from './pages/PaintCorrection';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/auto-detailing" element={<AutoDetailing />} />
          <Route path="/boat-detailing" element={<BoatDetailing />} />
          <Route path="/ceramic-coating" element={<CeramicCoating />} />
          <Route path="/paint-correction" element={<PaintCorrection />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
