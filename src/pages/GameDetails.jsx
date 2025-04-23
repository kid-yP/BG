import { useParams } from 'react-router-dom'
import { games } from '../data/games'

export default function GameDetails() {
  const { id } = useParams()
  const game = games.find(g => g.id === Number(id))

  if (!game) return <div>Game not found</div>

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{game.title}</h1>
      <img 
        src={game.thumbnail} 
        alt={game.title}
        className="w-full rounded-lg mb-4"
      />
      <p>{game.description}</p>
      <a 
        href="/" 
        className="mt-6 inline-block bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
      >
        ← Back to Games
      </a>
    </div>
  )
}