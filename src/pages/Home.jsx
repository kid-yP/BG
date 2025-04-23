import { games } from '../data/games'
import GameCard from '../components/games/GameCard'

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Belak Games</h1>
      <div className="grid gap-4">
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  )
}