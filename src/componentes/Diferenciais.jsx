import "./Diferenciais.css";

// Cards de diferenciais, em duas colunas, com uma setinha ao lado.
// Props:
//   itens  array de objetos { titulo, texto }
export default function Diferenciais({ itens }) {
  return (
    <div className="features">
      {itens.map((item) => (
        <article className="card feature reveal" key={item.titulo}>
          <span className="chev"></span>
          <div>
            <h3>{item.titulo}</h3>
            <p>{item.texto}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
