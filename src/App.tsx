// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductModal from "./components/ProductModal";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Sobre from "./pages/Sobre";
import { ModalProvider } from "./contexts/ModalContext";

const AppRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className="min-h-screen bg-background"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Navbar />

        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>

        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <ModalProvider>
      <Router>
        <AppRoutes />
        <ProductModal />
      </Router>
    </ModalProvider>
  );
};

export default App;