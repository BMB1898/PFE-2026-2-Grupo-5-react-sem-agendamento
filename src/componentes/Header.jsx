import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import LogoOneToOne from "./LogoOneToOne.jsx";
import logoPlaymakerz from "../imagem/logo-playmakerz.png";
import logoPkzLab from "../imagem/logo-pkz-lab.png";
import "./Header.css";

// Cabeçalho: logo + menu de navegação.
// No site em HTML, o script.js procurava os elementos com querySelector
// e trocava classes na mão. Aqui cada coisa que muda na tela é um estado
// (useState) e o React atualiza as classes sozinho.
export default function Header() {
  const { pathname } = useLocation();

  const [rolou, setRolou] = useState(false); // a página desceu mais de 10px?
  const [menuAberto, setMenuAberto] = useState(false); // menu do celular

  // useRef guarda uma referência a um elemento do DOM,
  // usada para saber se um clique foi dentro ou fora do menu
  const refMenu = useRef(null);
  const refBotaoMenu = useRef(null);

  function fechaMenu() {
    setMenuAberto(false);
  }

  // 1. HEADER QUE MUDA AO ROLAR A PÁGINA
  // Quando a página desce mais de 10px, o header ganha a classe
  // "scrolled", que no CSS deixa o fundo escuro.
  useEffect(() => {
    function atualizaHeader() {
      setRolou(window.scrollY > 10);
    }
    atualizaHeader();
    window.addEventListener("scroll", atualizaHeader, { passive: true });
    return () => window.removeEventListener("scroll", atualizaHeader);
  }, []); // lista vazia: liga o evento uma vez só

  // 2. Fecha o menu do celular ao clicar fora dele ou apertar ESC
  useEffect(() => {
    function cliqueFora(evento) {
      const noMenu = refMenu.current.contains(evento.target);
      const noBotao = refBotaoMenu.current.contains(evento.target);
      if (!noMenu && !noBotao) setMenuAberto(false);
    }
    function apertouTecla(evento) {
      if (evento.key === "Escape") fechaMenu();
    }
    document.addEventListener("click", cliqueFora);
    document.addEventListener("keydown", apertouTecla);
    return () => {
      document.removeEventListener("click", cliqueFora);
      document.removeEventListener("keydown", apertouTecla);
    };
  }, []);

  // A logo muda conforme a página: One to One, PKZ Lab ou Playmakerz
  let logo;
  if (pathname === "/one-to-one") {
    logo = (
      <Link
        className="nav-logo"
        to="/"
        aria-label="One to One Studio — página inicial"
        onClick={fechaMenu}
      >
        <LogoOneToOne variante="nav" />
      </Link>
    );
  } else if (pathname === "/pkz") {
    logo = (
      <Link className="nav-logo" to="/" onClick={fechaMenu}>
        <img
          className="nav-pkzlab"
          src={logoPkzLab}
          alt="PKZ Lab — página inicial"
          width={133}
          height={40}
        />
      </Link>
    );
  } else {
    logo = (
      <Link className="nav-logo" to="/" onClick={fechaMenu}>
        <img
          src={logoPlaymakerz}
          alt="Playmakerz — página inicial"
          width={150}
          height={34}
        />
      </Link>
    );
  }

  // Monta a className juntando as classes que estão valendo agora
  let classesHeader = "site-header";
  if (rolou) classesHeader += " scrolled";
  if (menuAberto) classesHeader += " nav-open";

  return (
    <header className={classesHeader}>
      <div className="container nav">
        {logo}

        <button
          ref={refBotaoMenu}
          className="nav-toggle"
          type="button"
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
          aria-controls="nav-links"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav aria-label="Menu principal">
          {/* NavLink é um Link que ganha a classe "active" (e aria-current)
              sozinho quando o endereço é o da página atual */}
          <ul className="nav-links" id="nav-links" ref={refMenu}>
            <li>
              <NavLink to="/one-to-one" onClick={fechaMenu}>
                One to One
              </NavLink>
            </li>
            <li>
              <NavLink to="/pkz" onClick={fechaMenu}>
                PKZ
              </NavLink>
            </li>
            <li>
              <NavLink to="/fisioterapia" onClick={fechaMenu}>
                Fisioterapia
              </NavLink>
            </li>
            <li>
              <NavLink to="/planos" onClick={fechaMenu}>
                Planos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
