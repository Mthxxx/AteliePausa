export interface Produto {
  id: number;
  nome: string;
  imagem: string;
  descricao: string;
  preco: string;
}

export const produtos: Produto[] = [
  {
    id: 1,
    nome: "Pacote de Argila",
    imagem: "/src/assets/produto1.png",
    descricao: "Argila de alta qualidade, perfeita para modelagem e criação de peças cerâmicas. Ideal para ceramistas iniciantes e profissionais.",
    preco: "R$ 75.00"
  },
  {
    id: 2,
    nome: "Conjunto de Copos de Cerâmica",
    imagem: "/src/assets/produto2.png",
    descricao: "Conjunto elegante de copos feitos à mão, com acabamento rústico e resistente. Perfeito para o dia a dia ou decoração.",
    preco: "R$ 75.00"
  },
  {
    id: 3,
    nome: "Vaso Rústico",
    imagem: "/src/assets/produto3.png",
    descricao: "Vaso artesanal com design rústico, ideal para plantas ou como peça decorativa. Feito com argila natural e esmaltado.",
    preco: "R$ 80.00"
  },
  {
    id: 4,
    nome: "Caneca Artesanal",
    imagem: "/src/assets/produto4.png",
    descricao: "Caneca única, moldada à mão com detalhes personalizados. Capacidade de 300ml, perfeita para café ou chá.",
    preco: "R$ 65.00"
  },
  {
    id: 5,
    nome: "Kit de Torno de Cerâmica",
    imagem: "/src/assets/produto5.png",
    descricao: "Kit completo para iniciantes em cerâmica, incluindo torno elétrico, ferramentas básicas e argila. Tudo que você precisa para começar.",
    preco: "R$ 145.00"
  },
  {
    id: 6,
    nome: "Jarra de Cerâmica",
    imagem: "/src/assets/produto6.png",
    descricao: "Jarra elegante para servir água ou sucos, com tampa e alça ergonômica. Capacidade de 1 litro, resistente e durável.",
    preco: "R$ 95.00"
  },
  {
    id: 7,
    nome: "Vaso de Argila Pequeno",
    imagem: "/src/assets/produto7.png",
    descricao: "Vaso compacto ideal para mesas ou prateleiras. Feito com argila pura, com acabamento natural e porosidade adequada para plantas.",
    preco: "R$ 30.00"
  },
  {
    id: 8,
    nome: "Tigela Esmaltada Azul",
    imagem: "/src/assets/produto8.png",
    descricao: "Tigela esmaltada em tom azul, perfeita para saladas ou sobremesas. Acabamento brilhante e resistente a manchas.",
    preco: "R$ 85.00"
  },
  {
    id: 9,
    nome: "Jarra de Cerâmica",
    imagem: "/src/assets/produto9.png",
    descricao: "Jarra decorativa com design moderno, ideal para mesas de jantar. Capacidade de 800ml, com esmaltado interno.",
    preco: "R$ 90.00"
  },
  {
    id: 10,
    nome: "Conjunto de Vasos de Cerâmica",
    imagem: "/src/assets/produto10.png",
    descricao: "Conjunto de 3 vasos de tamanhos variados, perfeitos para composição decorativa. Feitos à mão com argila selecionada.",
    preco: "R$ 70.00"
  }
];