import { Link } from 'react-router-dom'

export default function GameCard({ game }) {
  return (
    <Link 
      to={`/game/${game.id}`}
      className="block bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition"
    >
      <img 
        src={game.thumbnail} 
        alt={game.title}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-xl font-bold mt-2 text-white">{game.title}</h2>
    </Link>
  )
}