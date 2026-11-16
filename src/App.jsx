import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./componentes/Header.jsx";
import Footer from "./componentes/Footer.jsx";
import useReveal from "./useReveal.js";

import Home from "./pages/Home.jsx";
import OneToOne from "./pages/OneToOne.jsx";
import Pkz from "./pages/Pkz.jsx";
import Fisioterapia from "./pages/Fisioterapia.jsx";
import Planos from "./pages/Planos.jsx";
import NaoEncontrada from "./pages/NaoEncontrada.jsx";

// O App é o "molde" de todas as páginas: o Header e o Footer aparecem
// sempre, e o <Routes> troca só o miolo conforme o endereço (URL).
// Antes, cada arquivo .html repetia o header e o footer inteiros.
export default function App() {
  // useLocation diz em qual endereço o site está (ex.: "/planos")
  const { pathname } = useLocation();

  // Ao trocar de página, volta para o topo.
  // (Com <Link> o navegador não recarrega, então não faria isso sozinho.)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  // Liga a animação de entrada das seções em cada página
  useReveal(pathname);

  return (
    <>
      <Header />
      {/* Toda <Route> precisa ficar dentro do <Routes> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/one-to-one" element={<OneToOne />} />
        <Route path="/pkz" element={<Pkz />} />
        <Route path="/fisioterapia" element={<Fisioterapia />} />
        <Route path="/planos" element={<Planos />} />
        {/* path="*": qualquer endereço que não existe */}
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Footer />
    </>
  );
}
