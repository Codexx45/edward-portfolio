import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-cyan-400 py-4 px-8 z-50 w-full shadow-lg font-mono border-b-2 border-cyan-500">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <a href="#home" className="flex items-center">
            <img src="image/ET.png" alt="Logo" className="h-10 w-auto border-2 border-cyan-400 rounded bg-gray-800 p-1" />
          </a>
          <span className="text-xl font-bold ml-2 tracking-wider select-none text-cyan-400 drop-shadow">{`Edward`}</span>
        </div>
        {/* Hamburger menu button */}
        <button
          className="md:hidden flex flex-col justify-center items-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8">
          <li><a href="#home" className="hover:text-cyan-200 transition-colors duration-200">{`Home`}</a></li>
          <li><a href="#about" className="hover:text-cyan-200 transition-colors duration-200">{`AboutMe`}</a></li>
          <li><a href="#certificates" className="hover:text-cyan-200 transition-colors duration-200">{`Certificates`}</a></li>
          <li><a href="#services" className="hover:text-cyan-200 transition-colors duration-200">{`Services`}</a></li>
          <li><a href="#projects" className="hover:text-cyan-200 transition-colors duration-200">{`Projects`}</a></li>
        </ul>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 mt-4 px-4 py-4 text-center rounded shadow font-mono">
          <li><a href="#home" className="hover:text-cyan-900" onClick={() => setMenuOpen(false)}>{`Home`}</a></li>
          <li><a href="#about" className="hover:text-cyan-900" onClick={() => setMenuOpen(false)}>{`AboutMe`}</a></li>
          <li><a href="#certificates" className="hover:text-cyan-900" onClick={() => setMenuOpen(false)}>{`Certificates`}</a></li>
          <li><a href="#services" className="hover:text-cyan-900" onClick={() => setMenuOpen(false)}>{`Services`}</a></li>
          <li><a href="#projects" className="hover:text-cyan-900" onClick={() => setMenuOpen(false)}>{`Projects`}</a></li>
        </ul>
      )}
    </nav>
  );
}
