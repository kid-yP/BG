import { Link } from 'react-router-dom';
import { FaGamepad, FaUser, FaSignInAlt } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section - Updated with image */}
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/images/BelakGameslogo.png" 
            alt="Belak Games Logo"
            className="h-20 w-auto" // Adjust size as needed
          />
          <span className="text-2xl font-bold text-white-400">BELAK GAMES</span>
        </Link>
        
        {/* Navigation */}
        <nav className="flex items-center gap-6">
          {/* Games Link */}
          <Link 
            to="/" 
            className="hover:text-primary transition duration-200"
          >
            Games
          </Link>
          
          {/* About Link - Already in the correct position */}
          <Link 
            to="/about" 
            className="hover:text-primary transition duration-200"
          >
            About
          </Link>

          {/* Contact Link - Already in the correct position */}
          <Link 
            to="/contact" 
            className="hover:text-primary transition duration-200"
          >
            Contact
          </Link>
          
          {/* Auth Buttons */}
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-primary px-4 py-2 rounded hover:bg-secondary transition duration-200">
              <FaUser /> Log In
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}