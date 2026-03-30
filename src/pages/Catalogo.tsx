import { produtos } from "../data/products";
import { useModal } from "../contexts/ModalContext";

const Catalogo = () => {
  const { abrirModal } = useModal();

  return (
    <div className="bg-background min-h-screen">
      {/* HERO */}
      <section
        className="h-[250px] sm:h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-center px-4"
        style={{ backgroundImage: "url('/src/assets/catalogo.jpg')" }}
      >
        <div className="bg-black/30 px-6 py-6 md:px-10 md:py-8 rounded">
          <h1 className="text-2xl sm:text-3xl md:text-5xl text-white font-serif italic font-light tracking-wide mb-2">
            Catálogo de Produtos
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg">
            Confira todos os produtos disponíveis na loja.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="px-4 sm:px-6 md:px-10 py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {produtos.map((produto) => (
            <div key={produto.id} className="bg-secondary rounded-lg p-4 shadow-sm cursor-pointer" onClick={() => abrirModal(produto)}>

              <div className="overflow-hidden rounded-md">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-48 sm:h-52 md:h-56 object-cover transition duration-300 hover:scale-105"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-dark text-lg md:text-xl font-serif">
                  {produto.nome}
                </h3>

                <p className="text-dark font-semibold mt-1">
                  {produto.preco}
                </p>

                <button className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-accent transition text-sm">
                  Ver Detalhes
                </button>
              </div>

            </div>
          ))}

        </div>

        <div className="mt-24 mb-0 text-center">
          <a
            href="https://wa.me/5511972753087?text=Olá,%20gostaria%20de%20comprar%20um%20produto%20do%20ateliê"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-green-700 transition"
          >
            <img src="/src/assets/wpp.svg" alt="WhatsApp" className="w-6 h-6" />
            Comprar pelo WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
};

export default Catalogo;