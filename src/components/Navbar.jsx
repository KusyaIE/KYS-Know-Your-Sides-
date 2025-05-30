const Navbar = () => (
  <header className="fixed top-0 left-0 w-full bg-red-900 text-white shadow-md border-b border-gray-700 z-50">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
      {/* Logo */}
      <Link to="/" className="flex flex-col leading-none">
        <span className="text-xl font-bold tracking-wider">KYS</span>
        <span className="text-xs">Know Your Sides</span>
      </Link>

      {/* Links */}
      <nav className="hidden gap-8 md:flex">
        <a href="https://github.com/ВАШ-ЛОГИН/left-right-puzzle" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300">
          GitHub
        </a>
        <a href="#" className="hover:text-teal-300">Sample Source</a>
        <a href="#" className="hover:text-teal-300">Extension&nbsp;(soon)</a>
      </nav>

      {/* Donate */}
      <a href="https://ko-fi.com/ВАШ_КОФИ" target="_blank" rel="noopener noreferrer"
        className="rounded bg-teal-500 px-3 py-1.5 text-sm font-semibold text-white hover:bg-teal-400">
        Support&nbsp;the&nbsp;author
      </a>
    </div>
  </header>
);

export default Navbar;


import { Link } from "react-router-dom";


