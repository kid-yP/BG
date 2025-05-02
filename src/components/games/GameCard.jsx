import { Link } from 'react-router-dom';

export default function GameCard({ game }) {
  return (
    <Link 
      to={`/game/${game.id}`}
      className="block bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition max-w-lg"
    >
      <img 
        src={game.thumbnail} 
        alt={game.title}
        className="w-full h-64 object-cover rounded"
      />
      <h2 className="text-2xl font-bold mt-4 text-white">{game.title}</h2>
    </Link>
  );
}
