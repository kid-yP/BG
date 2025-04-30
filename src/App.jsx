import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import GameDetails from './pages/GameDetails';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-900">
        <Header />
        
        {/* Main content area with proper padding */}
        <main className="flex-grow p-4 md:p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game/:id" element={<GameDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}