import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// CSS global: variáveis, reset e estilos usados em todas as páginas.
// Vem antes do App para que o CSS de cada componente possa completar estas regras.
import "./index.css";
import App from "./App.jsx";

// O main.jsx desenha o <App /> dentro da <div id="root"> do index.html.
// O BrowserRouter habilita as rotas (troca de página sem recarregar).
//
// basename: a "pasta" onde o site está publicado.
// No Vercel o site fica na raiz ("/"). No GitHub Pages ele fica em
// "/PFE-2026-2-Grupo-5-react-sem-agendamento/". O Vite guarda esse valor em
// import.meta.env.BASE_URL (veja os scripts no package.json), então
// o mesmo código funciona nos dois lugares.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
