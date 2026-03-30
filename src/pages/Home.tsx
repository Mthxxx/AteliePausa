import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { produtos } from "../data/products";
import { useModal } from "../contexts/ModalContext";
import homeBackground from "../assets/home.png";
import footerBackground from "../assets/footer.png";

const Home = () => {
  const navigate = useNavigate();
  const { abrirModal } = useModal();

  // 🔥 GERADOR DE PRODUTOS ALEATÓRIOS PARA DESTAQUES (SEM REPETIR)
  const destaques = [...produtos].sort(() => Math.random() - 0.5).slice(0, 3);

  return (
    <div className="bg-background min-h-screen">
      {/* HERO */}
      <section
        className="min-h-[300px] sm:min-h-[400px] md:h-[500px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${homeBackground})` }}
      >
        <div className="bg-black/30 p-4 sm:p-6 md:p-10 rounded-lg flex flex-col items-center justify-center max-w-full mx-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-serif italic font-light tracking-[0.1em] leading-tight mb-3 sm:mb-4">
            Explore a Arte da Cerâmica
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white font-light tracking-[0.04em]">
            Peças exclusivas e materiais para sua criação
          </p>
        </div>
      </section>

      {/* ROLETE / CATÁLOGO */}
<section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 text-center">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic font-light tracking-[0.1em] text-dark mb-8 sm:mb-10 md:mb-12">
    Materiais para Ceramistas
  </h2>

  {/* CARROSSEL */}
  <div className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide">
    {produtos.map((produto) => (
      <div
        key={produto.id}
        className="min-w-[180px] sm:min-w-[220px] md:min-w-[250px] bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 cursor-pointer"
        onClick={() => abrirModal(produto)}
      >
        <div className="overflow-hidden rounded-t-xl">
          <img
            src={produto.imagem}
            alt={produto.nome}
            className="w-full h-36 sm:h-40 md:h-48 object-cover transition duration-300 hover:scale-105"
          />
        </div>

        <div className="p-3 sm:p-4 text-left">
          <h3 className="text-sm sm:text-base font-medium text-dark">
            {produto.nome}
          </h3>
          <p className="text-primary font-semibold text-sm sm:text-base">{produto.preco}</p>
        </div>
      </div>
    ))}
  </div>

  {/* BOTÃO CENTRAL */}
  <motion.button
    className="mt-8 sm:mt-10 md:mt-12 bg-primary text-white px-6 sm:px-8 py-2 sm:py-3 rounded hover:bg-accent transition text-sm sm:text-base"
    whileTap={{ scale: 0.95 }}
    onClick={() => navigate('/catalogo')}
  >
    Confira o Catálogo
  </motion.button>
</section>

      {/* DESTAQUES */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic font-light tracking-[0.1em] text-center text-dark mb-8 sm:mb-10 md:mb-12">
          Destaques da Loja
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-10">
          {destaques.map((produto) => (
            <div
              key={produto.id}
              className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300 cursor-pointer"
              onClick={() => abrirModal(produto)}
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-40 sm:h-48 md:h-60 object-cover mb-3 sm:mb-4 transition duration-300 hover:scale-105"
                />
              </div>

              <h3 className="text-base sm:text-lg font-medium text-dark tracking-[0.03em]">
                {produto.nome}
              </h3>
              <p className="text-primary font-semibold text-sm sm:text-base">{produto.preco}</p>

              <button className="mt-3 sm:mt-4 bg-dark text-white px-4 py-2 rounded w-full hover:opacity-90 transition text-sm sm:text-base">
                Saiba Mais
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL */}
      <section
        className="min-h-[300px] sm:min-h-[350px] md:h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${footerBackground})` }}
      >
        <div className="bg-black/40 p-10 rounded flex flex-col items-center justify-center text-center">
          <h2 className="text-5xl text-white font-serif italic font-light tracking-[0.1em] leading-tight mb-4">
            Crie & Modele
          </h2>
          <p className="text-white text-lg font-light tracking-[0.04em]">
            Tudo que você precisa para começar na cerâmica
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;