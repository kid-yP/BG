import { games } from '../data/games';
import GameCard from '../components/games/GameCard';

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-white">Welcome to Belak Games!</h1>
      <p className="text-2xl text-gray-400 mb-4 text-white">Your destination for the latest and most exciting game releases.</p>
      
      {/* Updated: Grid Layout with Proper Spacing */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
