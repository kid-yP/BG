import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          Belak Games
        </Link>
        <nav className="flex gap-4">
          <Link to="/" className="text-white hover:text-blue-400">Home</Link>
          <Link to="/about" className="text-white hover:text-blue-400">About</Link>
        </nav>
      </div>
    </header>
  );
}