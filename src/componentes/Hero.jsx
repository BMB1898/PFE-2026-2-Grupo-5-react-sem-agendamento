import "./Hero.css";

// Hero: a primeira seção de cada página (título, texto, botões e foto).
// Props:
//   eyebrow    texto pequeno acima do título (opcional)
//   titulo     o h1 (pode ter JSX, como <br /> e <span className="hl">)
//   texto      parágrafo abaixo do título
//   textoLargo true deixa o parágrafo mais largo (opcional)
//   foto       imagem importada de src/imagem
//   altFoto, larguraFoto, alturaFoto: atributos da imagem
//   children   o que vem entre <Hero> e </Hero>: os botões de ação
//   setaRolar  id da seção para onde a setinha "role para baixo" leva (opcional)
export default function Hero({
  eyebrow,
  titulo,
  texto,
  textoLargo,
  foto,
  altFoto,
  larguraFoto,
  alturaFoto,
  children,
  setaRolar,
}) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          {/* && : só mostra o eyebrow se ele foi passado */}
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>{titulo}</h1>
          <p className={textoLargo ? "hero-lead-wide" : undefined}>{texto}</p>
          <div className="hero-actions">{children}</div>
        </div>
        {/* foto principal: carrega com prioridade (sem loading="lazy") */}
        <img
          className="hero-photo"
          src={foto}
          alt={altFoto}
          width={larguraFoto}
          height={alturaFoto}
          fetchPriority="high"
        />
      </div>
      {setaRolar && (
        <div className="container">
          {/* link para um id da mesma página: um <a> comum funciona */}
          <a
            className="hero-scroll"
            href={`#${setaRolar}`}
            aria-label="Rolar para Quem somos"
          ></a>
        </div>
      )}
    </section>
  );
}
