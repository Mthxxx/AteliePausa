import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '../contexts/ModalContext';

const ProductModal: React.FC = () => {
  const { produtoSelecionado, fecharModal } = useModal();

  if (!produtoSelecionado) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      fecharModal();
    }
  };

  return (
    <AnimatePresence>
      {produtoSelecionado && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleOverlayClick}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={fecharModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors text-2xl font-bold z-10"
            >
              ×
            </button>
            <div className="flex">
              <div className="w-1/2 p-6 flex items-center justify-center bg-gray-50">
                <img
                  src={produtoSelecionado.imagem}
                  alt={produtoSelecionado.nome}
                  className="w-full max-w-xs h-auto object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="w-1/2 p-6 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {produtoSelecionado.nome}
                </h2>
                <p className="text-gray-700 text-base leading-relaxed">
                  {produtoSelecionado.descricao}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;