import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { FaStar, FaGooglePlay, FaAppStore } from 'react-icons/fa';
import { games } from '../data/games';

export default function GameDetails() {
  const { id } = useParams();
  const game = games.find(g => g.id === Number(id));

  const [reviews, setReviews] = useState(game?.reviews || []);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });

  const handleAddReview = () => {
    if (newReview.comment.trim()) {
      const review = {
        id: reviews.length + 1,
        user: "Player",
        rating: newReview.rating,
        comment: newReview.comment,
        date: new Date().toLocaleDateString()
      };
      setReviews([...reviews, review]);
      setNewReview({ rating: 5, comment: '' });
    }
  };

  if (!game) {
    return (
      <div className="text-white text-center py-20">
        <h1 className="text-2xl">Game not found</h1>
        <Link to="/" className="text-blue-400 hover:underline mt-4 inline-block">
          Back to all games
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 text-white">
      {/* Game Header Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">{game.title}</h1>
          <div className="flex items-center mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar 
                key={star} 
                className={`${star <= game.rating ? 'text-yellow-400' : 'text-gray-500'} mr-1`} 
              />
            ))}
            <span className="text-gray-400 ml-2">({reviews.length} reviews)</span>
          </div>
          <p className="text-lg mb-6">{game.description}</p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            {game.playStoreUrl && (
              <a 
                href={game.playStoreUrl} 
                className="flex items-center bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGooglePlay className="mr-2" /> Google Play
              </a>
            )}
            {game.appStoreUrl && (
              <a 
                href={game.appStoreUrl} 
                className="flex items-center bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaAppStore className="mr-2" /> App Store
              </a>
            )}
          </div>
        </div>
        
        <div className="md:w-1/3">
          <img 
            src={game.thumbnail} 
            alt={game.title} 
            className="w-full h-auto rounded-lg shadow-lg object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Video Trailer Section */}
      {game.trailer && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Game Trailer</h2>
          <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden shadow-xl">
            <video
              src={game.trailer}
              controls
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-contain"
              poster={game.thumbnail}
            >
              Your browser doesn't support HTML5 video.
            </video>
          </div>
        </section>
      )}

      {/* Screenshots Gallery */}
      {game.screenshots?.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {game.screenshots.map((screenshot, index) => (
              <div key={index} className="relative group">
                <img
                  src={screenshot}
                  alt={`${game.title} screenshot ${index + 1}`}
                  className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-white font-bold text-lg">View</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Reviews Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Player Reviews</h2>
        
        <div className="bg-gray-800 p-6 rounded-lg mb-8 shadow-md">
          <h3 className="text-xl font-bold mb-4">Write a Review</h3>
          <div className="flex items-center mb-4">
            <span className="mr-3 text-gray-300">Rating:</span>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setNewReview({...newReview, rating: star})}
                className={`text-2xl mx-1 transition-colors ${star <= newReview.rating ? 'text-yellow-400 hover:text-yellow-500' : 'text-gray-500 hover:text-gray-400'}`}
                aria-label={`${star} star`}
              >
                ★
              </button>
            ))}
          </div>
          <textarea
            value={newReview.comment}
            onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
            placeholder="Share your experience with this game..."
            className="w-full p-4 bg-gray-700 rounded-lg mb-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            rows="4"
          />
          <button
            onClick={handleAddReview}
            disabled={!newReview.comment.trim()}
            className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${newReview.comment.trim() ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 cursor-not-allowed'}`}
          >
            Submit Review
          </button>
        </div>

        <div className="space-y-6">
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <div key={review.id} className="bg-gray-800 p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-lg text-white">{review.user}</h4>
                    <div className="flex items-center mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                          key={star}
                          className={`${star <= review.rating ? 'text-yellow-400' : 'text-gray-500'} mr-1`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-gray-400 text-sm">{review.date}</span>
                </div>
                <p className="mt-3 text-gray-300">{review.comment}</p>
              </div>
            ))
          ) : (
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <p className="text-gray-400">No reviews yet. Be the first to review!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}