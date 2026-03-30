import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Produto } from '../data/products';

interface ModalContextType {
  produtoSelecionado: Produto | null;
  abrirModal: (produto: Produto) => void;
  fecharModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);

  const abrirModal = (produto: Produto) => {
    setProdutoSelecionado(produto);
  };

  const fecharModal = () => {
    setProdutoSelecionado(null);
  };

  return (
    <ModalContext.Provider value={{ produtoSelecionado, abrirModal, fecharModal }}>
      {children}
    </ModalContext.Provider>
  );
};