import { FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 border-t border-gray-700">
      <div className="w-full px-8 flex items-center justify-between mx-auto">
          <div className="flex flex-col items-start gap-1">
            <h3 className="text-xl font-bold whitespace-nowrap">Belak Games</h3>
            <p className="text-gray-400">© {new Date().getFullYear()} All rights reserved</p>
          </div>
          <div className="flex items-center gap-6 ml-auto">
            <a href="#" className="text-2xl hover:text-primary transition"><FaGithub /></a>
            <a href="#" className="text-2xl hover:text-primary transition"><FaTwitter /></a>
            <a href="#" className="text-2xl hover:text-primary transition"><FaDiscord /></a>
          </div>
      </div>
    </footer>
  );
}