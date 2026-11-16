import {
  criaLinkWhatsapp,
  LINK_AGENDAR_ONE_TO_ONE,
  LINK_AGENDAR_PKZ,
} from "../whatsapp.js";
import setas from "../imagem/chevrons.svg";
import "./Planos.css";

const PLANOS = [
  {
    nome: "Essencial",
    selo: "Comece aqui",
    descricao: "Para quem quer treinar com acompanhamento de verdade.",
    itens: [
      "Treino individualizado",
      "2x por semana",
      "Relatório a cada sessão",
      "Reavaliações periódicas",
    ],
  },
  {
    nome: "Completo",
    selo: "Mais escolhido",
    descricao: "O pacote principal, com acompanhamento multidisciplinar.",
    itens: [
      "Treino individualizado",
      "3x por semana",
      "Fisioterapia integrada",
      "Nutrição",
      "Gráficos de evolução",
    ],
    destaque: true, // o card em destaque, com borda azul
  },
  {
    nome: "Performance",
    selo: "Alto rendimento",
    descricao: "Para atletas que querem cada detalhe medido e ajustado.",
    itens: [
      "Tudo do Completo",
      "Psicologia esportiva",
      "Análise & scout",
      "Reavaliações prioritárias",
    ],
  },
];

export default function Planos() {
  return (
    <main>
      <title>Planos &amp; pacotes · Playmakerz</title>
      <meta
        name="description"
        content="Pacotes montados sob medida: Essencial, Completo e Performance. Comece por uma aula experimental."
      />

      {/* Planos e pacotes */}
      <section className="section page-head" style={{ paddingTop: 70 }}>
        <img
          className="deco-chevrons"
          src={setas}
          alt=""
          width={140}
          height={70}
          style={{ left: 30, top: 0 }}
        />
        <div className="container">
          <p className="eyebrow">Planos &amp; pacotes</p>
          <h1>
            O valor vem antes do
            <br />
            <span className="hl">preço</span>.
          </h1>
          <p style={{ maxWidth: 700 }}>
            Cada pacote é montado sob medida — você inclui só o que faz sentido
            para o seu objetivo. Preferimos que você conheça o nosso trabalho
            primeiro e veja o valor atribuído, não apenas um número.
          </p>

          <div className="plans">
            {PLANOS.map((plano) => (
              <article
                className={plano.destaque ? "plan featured reveal" : "plan reveal"}
                key={plano.nome}
              >
                <p className="badge">{plano.selo}</p>
                <h2>{plano.nome}</h2>
                <p>{plano.descricao}</p>
                <ul>
                  {plano.itens.map((item) => (
                    <li key={item}>
                      <span className="chev"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                {/* a mensagem do WhatsApp é montada com o nome do plano */}
                <a
                  className="price-box"
                  href={criaLinkWhatsapp(
                    `Olá! Tenho interesse no plano ${plano.nome}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="price-label">Valor sob medida</span>
                  <strong>Fale com a gente</strong>
                </a>
              </article>
            ))}
          </div>
          <p className="plans-note">
            Os itens são combináveis: retire ou acrescente serviços e ajuste a
            frequência semanal. Montamos o valor final com você, sem surpresas.
          </p>
        </div>
      </section>

      {/* Chamada para a aula experimental */}
      <section className="section" style={{ borderTop: 0, paddingTop: 30 }}>
        <div className="container">
          <div className="cta-box reveal">
            <img
              className="deco-chevrons"
              src={setas}
              alt=""
              width={130}
              height={65}
              style={{ left: 40, top: 70, opacity: 0.15 }}
            />
            <h2>Comece por uma aula experimental</h2>
            <p>
              Conheça o espaço, o método e a equipe. Depois montamos juntos o
              pacote ideal para você ou para o seu atleta.
            </p>
            <div className="actions">
              {/* agendamento pelo WhatsApp: link para fora do site, <a> comum */}
              <a
                className="btn btn-accent btn-lg"
                href={LINK_AGENDAR_ONE_TO_ONE}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar no One-to-One <span className="chev"></span>
              </a>
              <a
                className="btn btn-accent btn-lg"
                href={LINK_AGENDAR_PKZ}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar no PKZ <span className="chev"></span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
