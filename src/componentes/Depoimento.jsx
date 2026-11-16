import "./Depoimento.css";

// Card de depoimento.
// Props:
//   texto  a frase de quem deu o depoimento (sem as aspas)
//   autor  o nome
//   info   linha de baixo, ex.: "Aluna há 2 anos"
export default function Depoimento({ texto, autor, info }) {
  return (
    <article className="card quote reveal">
      <span className="chev"></span>
      <p className="quote-text">“{texto}”</p>
      <p className="quote-author">
        <strong>{autor}</strong>
        <span>{info}</span>
      </p>
    </article>
  );
}
