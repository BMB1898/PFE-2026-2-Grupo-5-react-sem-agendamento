import "./CardEquipe.css";

// Card de uma pessoa da equipe: foto com legenda (figure + figcaption).
// Props:
//   nome, cargo, experiencia  textos do card
//   foto                      imagem importada de src/imagem
export default function CardEquipe({ nome, cargo, experiencia, foto }) {
  return (
    <figure className="team-card reveal">
      <div className="photo">
        <img src={foto} alt={nome} loading="lazy" />
      </div>
      <figcaption className="info">
        <h3>{nome}</h3>
        <span className="role">{cargo}</span>
        <span className="exp">{experiencia}</span>
      </figcaption>
    </figure>
  );
}
