import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/src/assets/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-secondary px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex items-center justify-between shadow-sm relative">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="w-12 sm:w-14 md:w-16 h-auto" />
      </div>

      {/* Menu Desktop */}
      <ul className="hidden md:flex gap-6 lg:gap-10 text-dark font-medium tracking-[0.05em]">
        <li className="cursor-pointer hover:text-primary transition text-sm lg:text-base">
          <Link to="/">Início</Link>
        </li>
        <li className="cursor-pointer hover:text-primary transition text-sm lg:text-base">
          <Link to="/catalogo">Catálogo</Link>
        </li>
        <li className="cursor-pointer hover:text-primary transition text-sm lg:text-base">
          <Link to="/sobre">Quem Somos</Link>
        </li>
      </ul>

      {/* Botão Hamburger Mobile */}
      <button
        className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`w-6 h-0.5 bg-dark transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-dark transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-dark transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-secondary shadow-lg md:hidden flex flex-col gap-4 p-4 mt-2">
          <li className="cursor-pointer hover:text-primary transition text-sm list-none">
            <Link to="/">Início</Link>
          </li>
          <li className="cursor-pointer hover:text-primary transition text-sm list-none">
            <Link to="/catalogo">Materiais</Link>
          </li>
          <li className="cursor-pointer hover:text-primary transition text-sm list-none">
            <Link to="/sobre">Quem Somos</Link>
          </li>
        </div>
      )}
    </nav>
  );
};

export default Navbar;