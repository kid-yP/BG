import { FaGamepad, FaCode, FaPalette } from 'react-icons/fa';

export default function About() {
  const team = [
    {
      name: "Kaleb Samson",
      role: "Ceo & Game Designer",
      bio: "Creates immersive game worlds with 5+ years experience",
      icon: <FaGamepad className="text-3xl text-purple-500" />
    },
    {
      name: "Sam",
      role: "Lead Developer",
      bio: "Specializes in Unity and mobile game optimization",
      icon: <FaCode className="text-3xl text-purple-500" />
    },
    {
      name: "Jordan",
      role: "UI/UX Artist",
      bio: "Makes games beautiful and intuitive to play",
      icon: <FaPalette className="text-3xl text-purple-500" />
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 py-12 text-white">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      
      <div className="mb-12">
        <p className="text-xl mb-6">
        BELAK GAMES has been dedicated to creating innovative and captivating gaming experiences for players of all ages.
        </p>
        <p>
          Founded in 2023, we specialize in mobile games with unique mechanics.
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-8">Meet The Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gray-900 p-3 rounded-full">
                {member.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            </div>
            <p className="text-gray-300">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
