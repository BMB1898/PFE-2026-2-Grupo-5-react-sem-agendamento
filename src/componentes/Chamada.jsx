import setas from "../imagem/chevrons.svg";
import foguete from "../imagem/rocket.svg";
import "./Chamada.css";

// Chamada final (CTA) no fim das páginas das marcas.
// Props:
//   titulo, texto  textos da chamada
//   decoracao      "setas" (setas >>> no canto) ou "foguete" (acima do título)
//   children       os botões
export default function Chamada({ titulo, texto, decoracao, children }) {
  return (
    <section className="cta">
      {decoracao === "setas" && (
        <img
          className="deco-chevrons"
          src={setas}
          alt=""
          width={140}
          height={70}
          style={{ left: 24, top: 24 }}
        />
      )}
      <div className="container reveal">
        {decoracao === "foguete" && (
          <img
            className="rocket-big"
            src={foguete}
            alt=""
            width={34}
            height={42}
          />
        )}
        <h2>{titulo}</h2>
        <p>{texto}</p>
        <div className="actions">{children}</div>
      </div>
    </section>
  );
}
