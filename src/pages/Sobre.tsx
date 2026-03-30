import sobreImg from "../assets/sobre.jpg"; // troca pelo nome da sua imagem

const Sobre = () => {
  return (
    <div className="bg-background min-h-screen px-4 sm:px-6 md:px-10 py-16 md:py-20">

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* IMAGEM */}
        <div className="overflow-hidden rounded-2xl order-2 lg:order-1">
          <img
            src={sobreImg}
            className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover transition duration-500 ease-in-out hover:scale-105"
          />
        </div>

        {/* TEXTO */}
        <div className="text-dark order-1 lg:order-2">
          <p className="text-sm tracking-widest uppercase text-primary mb-4">
            Sobre Nós
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif italic font-light mb-8 leading-tight">
            Ateliê Pausa
          </h1>

          <p className="text-base sm:text-lg leading-relaxed mb-6">
            Bem-vindo ao Ateliê Pausa! Nosso espaço é dedicado à arte da
            cerâmica, onde cada peça é criada com cuidado, autenticidade e um
            toque artesanal.
          </p>

          <p className="text-base sm:text-lg leading-relaxed mb-6">
            Valorizamos o feito à mão e acompanhamos cada etapa do processo,
            garantindo qualidade e identidade em cada criação.
          </p>

          <p className="text-base sm:text-lg leading-relaxed mb-8">
            Obrigado por fazer parte da nossa história!
          </p>

          {/* CONTATOS */}
          <div className="flex flex-col sm:flex-row gap-6">

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/teste.pausa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              className="flex items-center gap-3 text-primary hover:text-accent transition text-lg"
            >
              <img src="/src/assets/insta.svg" alt="Instagram" className="w-7 h-7" />
              <span>@ateliepausa</span>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/5511972753087?text=Olá,%20gostaria%20de%20comprar%20um%20produto%20do%20ateliê"
              target="_blank"
              className="flex items-center gap-3 text-primary hover:text-accent transition text-lg"
            >
              <img src="/src/assets/wpp.svg" alt="WhatsApp" className="w-7 h-7" />
              <span>(11) 97275-3087</span>
            </a>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Sobre;