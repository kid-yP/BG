import { Link } from 'react-router-dom';
import { FaGamepad, FaUser, FaSignInAlt } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Home Link */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <FaGamepad className="text-primary" />
          <span>Belak Games</span>
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