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

function App() {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';

  let pageContent = <Home />;

  if (pathname === '/services') {
    pageContent = <Services />;
  } else if (pathname === '/auto-detailing') {
    pageContent = <AutoDetailing />;
  } else if (pathname === '/boat-detailing') {
    pageContent = <BoatDetailing />;
  } else if (pathname === '/ceramic-coating') {
    pageContent = <CeramicCoating />;
  } else if (pathname === '/paint-correction') {
    pageContent = <PaintCorrection />;
  } else if (pathname === '/gallery') {
    pageContent = <Gallery />;
  } else if (pathname === '/contact') {
    pageContent = <Contact />;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      {pageContent}
      <Footer />
    </div>
  );
}

export default App;
