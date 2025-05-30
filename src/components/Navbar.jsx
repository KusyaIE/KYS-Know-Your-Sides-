import { Link } from "react-router-dom";

const Navbar = () => (
  <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-500 to-gray-350 text-white shadow-lg border-b border-gray-700/30 z-50 backdrop-blur-sm bg-opacity-100">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1">
      {/* Logo */}
      <Link to="/" className="flex flex-col leading-none group transition-transform duration-200 hover:scale-105 relative">
        <span className="text-4xl font-bold tracking-wider text-white group-hover:text-yellow-500 relative -mb-1 italic font-serif">KYS</span>
        <span className="text-m text-gray-200 relative z-10 italic">Know Your Sides</span>
      </Link>

      {/* Links */}
      <nav className="hidden gap-8 md:flex items-center">
        <a 
          href="https://github.com/ВАШ-ЛОГИН/left-right-puzzle" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-300 hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
        >
          GitHub
        </a>
        <a 
          href="#" 
          className="text-gray-300 hover:text-gray-1000 transition-colors duration-200 text-sm font-medium"
        >
          Sample Source
        </a>
        <a 
          href="#" 
          className="text-gray-300 hover:text-gray-1000 transition-colors duration-200 text-sm font-medium"
        >
          Extension (soon)
        </a>
      </nav>

      {/* Donate */}
      <a 
        href="https://ko-fi.com/ВАШ_КОФИ" 
        target="_blank" 
        rel="noopener noreferrer"
        className="rounded-full bg-yellow-500 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-400 transition-all duration-200 hover:shadow-lg hover:shadow-gray-500/20 transform hover:scale-130"
      >
        Support the author
      </a>
    </div>
  </header>
);

export default Navbar;
