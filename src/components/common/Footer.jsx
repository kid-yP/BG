import { FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Belak Games</h3>
            <p className="text-gray-400">© {new Date().getFullYear()} All rights reserved</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-2xl hover:text-primary transition"><FaGithub /></a>
            <a href="#" className="text-2xl hover:text-primary transition"><FaTwitter /></a>
            <a href="#" className="text-2xl hover:text-primary transition"><FaDiscord /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}