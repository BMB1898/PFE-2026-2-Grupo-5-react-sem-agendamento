import iconeFoguete from "../imagem/rocket.svg";
import "./Passos.css";

// Passos numerados (lista ordenada): 01 Avaliação, 02 Plano...
// Props:
//   passos  array de objetos { titulo, texto }
//   icone   "seta", "foguete" ou nada — o ícone ao lado do número
export default function Passos({ passos, icone }) {
  return (
    <ol className="grid-4 steps">
      {/* map: cria um <li> para cada passo do array.
          A key ajuda o React a identificar cada item da lista. */}
      {passos.map((passo, indice) => (
        <li className="card reveal" key={passo.titulo}>
          <span className="step-num">
            {/* número com dois dígitos: 1 → "01" */}
            {String(indice + 1).padStart(2, "0")}
            {icone === "seta" && <span className="chev"></span>}
            {icone === "foguete" && (
              <img className="rocket" src={iconeFoguete} alt="" />
            )}
          </span>
          <h3>{passo.titulo}</h3>
          <p>{passo.texto}</p>
        </li>
      ))}
    </ol>
  );
}
