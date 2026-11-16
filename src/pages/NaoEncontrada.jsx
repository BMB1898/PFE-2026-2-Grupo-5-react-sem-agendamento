import { Link } from "react-router-dom";

// Página 404: aparece quando o endereço não corresponde a nenhuma rota
// (veja o <Route path="*"> no App.jsx). No site em HTML puro quem
// mostrava esse erro era o servidor; aqui é o próprio React.
export default function NaoEncontrada() {
  return (
    <main>
      <title>Página não encontrada · Playmakerz</title>
      <section className="section page-head" style={{ paddingTop: 70 }}>
        <div className="container">
          <p className="eyebrow">Erro 404</p>
          <h1>
            Página não <span className="hl">encontrada</span>.
          </h1>
          <p style={{ maxWidth: 700 }}>
            O endereço que você abriu não existe ou mudou de lugar.
          </p>
          <Link className="btn btn-accent" to="/">
            Voltar para o início <span className="chev"></span>
          </Link>
        </div>
      </section>
    </main>
  );
}
