import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary text-dark mt-16 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* Marca */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Pausa Ateliê</h2>
          <p className="text-sm text-gray-600 max-w-xs">
            Criado com tempo, moldado com intenção.
          </p>
        </div>

        {/* Navegação */}
        <div>
          <h3 className="font-semibold mb-2">Navegação</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li className="hover:text-primary cursor-pointer"><Link to="/">Home</Link></li>
            <li className="hover:text-primary cursor-pointer"><Link to="/catalogo">Catálogo</Link></li>
            <li className="hover:text-primary cursor-pointer"><Link to="/sobre">Sobre</Link></li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="font-semibold mb-2">Contato</h3>
          <div className="flex flex-col gap-2 text-sm">
            
            <a
              href="https://wa.me/5511972753087?"
              target="_blank"
              className="hover:text-green-400"
            >
              WhatsApp
            </a>

            <a
              href="https://www.instagram.com/teste.pausa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              className="hover:text-pink-400"
            >
              Instagram
            </a>

          </div>
        </div>
      </div>

      {/* Linha final */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm text-dark">
      © {new Date().getFullYear()} Pausa Ateliê — Desenvolvido por{" "}
      <a
        href="https://mthxxx.github.io/Portfolio-Matheus-Leite/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-white transition"
      >
        Matheus Leite
      </a>
    </div>
    </footer>
  );
};

export default Footer;