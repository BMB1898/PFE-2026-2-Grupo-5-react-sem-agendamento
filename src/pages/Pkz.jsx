import { Link } from "react-router-dom";

import Hero from "../componentes/Hero.jsx";
import CabecalhoSecao from "../componentes/CabecalhoSecao.jsx";
import MosaicoFotos from "../componentes/MosaicoFotos.jsx";
import Passos from "../componentes/Passos.jsx";
import CardEquipe from "../componentes/CardEquipe.jsx";
import Depoimento from "../componentes/Depoimento.jsx";
import Faq from "../componentes/Faq.jsx";
import Chamada from "../componentes/Chamada.jsx";
import { LINK_AGENDAR_PKZ } from "../whatsapp.js";

import fotoHero from "../imagem/hero-pkz.jpg";
import fotoPkz1 from "../imagem/pkz-1.jpg";
import fotoPkz2 from "../imagem/pkz-2.jpg";
import fotoPkz3 from "../imagem/pkz-3.jpg";
import fotoPkz4 from "../imagem/pkz-4.jpg";
import fotoHenrique from "../imagem/prof-henrique.jpg";
import fotoRafael from "../imagem/prof-rafael.jpg";
import fotoEduardo from "../imagem/prof-eduardo.jpg";
import fogueteBranco from "../imagem/rocket-white.svg";
import "./Pkz.css";

const FOTOS = [
  { src: fotoPkz1, alt: "Crianças disputando a bola em campo de futebol" },
  { src: fotoPkz2, alt: "Menino chutando a bola" },
  { src: fotoPkz3, alt: "Jogo de futebol infantil" },
  { src: fotoPkz4, alt: "Goleiro mirim correndo" },
];

const PASSOS = [
  {
    titulo: "Avaliação",
    texto:
      "16 testes físicos — salto, velocidade, agilidade, velocidade de reação, foco e mais.",
  },
  {
    titulo: "Cronograma",
    texto:
      "Um mesociclo do mês, dividido em microciclos semanais, sob medida para o atleta.",
  },
  {
    titulo: "Treino + relatório",
    texto:
      "Cada sessão gera um relatório com observações relevantes para a próxima.",
  },
  {
    titulo: "Reavaliação mensal",
    texto:
      "Medimos a evolução e ajustamos o plano — sempre com contexto, nunca só o número.",
  },
];

const SERVICOS = [
  {
    titulo: "Fisioterapia",
    texto: "Prevenção e recuperação integradas ao plano de treino.",
  },
  {
    titulo: "Nutrição",
    texto:
      "Acompanhamento alimentar para sustentar a performance em crescimento.",
  },
  {
    titulo: "Psicologia",
    texto: "Preparo mental e foco — item opcional dentro do pacote.",
  },
  {
    titulo: "Análise & scout",
    texto: "Análise de desempenho esportivo a partir dos jogos do atleta.",
  },
];

const EQUIPE = [
  {
    nome: "Henrique Alves",
    cargo: "Metodologia · Fundador",
    experiencia: "15 anos com atletas",
    foto: fotoHenrique,
  },
  {
    nome: "Pedro Nunes",
    cargo: "Coordenação técnica",
    experiencia: "10 anos de experiência",
    foto: fotoRafael,
  },
  {
    nome: "Dudu Ferreira",
    cargo: "Treinador de atletas",
    experiencia: "8 anos de experiência",
    foto: fotoEduardo,
  },
];

const DEPOIMENTOS = [
  {
    texto:
      "Meu filho evoluiu de um jeito que a gente consegue enxergar nos gráficos. E sempre vem uma explicação junto, não só números soltos.",
    autor: "Adriana M.",
    info: "Mãe de atleta · futebol",
  },
  {
    texto:
      "Na reavaliação o salto “caiu”, mas explicaram que ele corrigiu uma assimetria grave. Fiquei muito mais tranquilo entendendo o contexto.",
    autor: "Cláudio T.",
    info: "Pai de atleta · vôlei",
  },
  {
    texto:
      "O acompanhamento é sério. Cada professor sabe o que foi treinado no dia anterior e respeita o que o corpo dele pediu.",
    autor: "Renata F.",
    info: "Mãe de atleta · natação",
  },
];

const PERGUNTAS = [
  {
    pergunta: "Como funciona a metodologia do PKZ?",
    resposta:
      'Treinamos o atleta dentro das exigências reais do esporte dele (o "sistema complexo"), começando por uma avaliação de 16 testes físicos e montando um cronograma mensal com reavaliações periódicas.',
  },
  {
    pergunta: "Por que um gráfico pode “cair” e ainda ser evolução?",
    resposta:
      "Porque o número sozinho não conta a história. Às vezes um resultado diminui enquanto o atleta corrige uma assimetria ou melhora a técnica — e isso é evolução. Por isso todo resultado vem com o contexto explicado pelo professor.",
  },
  {
    pergunta: "Quais são os horários?",
    resposta: (
      <>
        As turmas do PKZ acontecem no contraturno escolar, de segunda a sexta à
        tarde, e aos sábados pela manhã. Fale com a gente pelo WhatsApp e{" "}
        <a className="hl" href={LINK_AGENDAR_PKZ} target="_blank" rel="noopener noreferrer">
          agende uma avaliação
        </a>{" "}
        para o seu atleta.
      </>
    ),
  },
  {
    pergunta: "Vocês atendem qualquer esporte?",
    resposta:
      "Sim. Mapeamos as exigências de cada modalidade — futebol, vôlei, natação, kart, lutas e muitas outras — e treinamos o atleta dentro delas.",
  },
  {
    pergunta: "Quais são os valores?",
    resposta: (
      <>
        O pacote é montado sob medida conforme a frequência e os serviços
        escolhidos. Conheça os{" "}
        <Link className="hl" to="/planos">
          planos
        </Link>{" "}
        e fale com a gente para montar o ideal para o seu atleta.
      </>
    ),
  },
];

export default function Pkz() {
  return (
    // pkz-rockets: no CSS, troca a setinha dos eyebrows por um foguete
    <main className="pkz-rockets">
      <title>PKZ Lab · Playmakerz</title>
      <meta
        name="description"
        content="Alto rendimento para atletas de 7 a 15 anos, dentro do esporte que escolheram praticar. Treino funcional, integrado e medido de perto."
      />

      <Hero
        titulo={
          <>
            Jovens atletas, <br />
            <span className="hl">alta performance</span>.
          </>
        }
        texto="Alto rendimento que transforma jovens atletas em versões mais fortes, rápidas e completas de si mesmos. Metodologia própria para atletas de 7 a 15 anos, dentro do esporte que eles escolheram praticar. Treino funcional, integrado e medido de perto."
        textoLargo
        foto={fotoHero}
        altFoto="Menino fazendo treino de agilidade entre cones em um campo"
        larguraFoto={900}
        alturaFoto={1463}
      >
        {/* agendamento pelo WhatsApp: link para fora do site, <a> comum */}
        <a className="btn btn-accent" href={LINK_AGENDAR_PKZ} target="_blank" rel="noopener noreferrer">
          Agendar avaliação <span className="chev"></span>
        </a>
      </Hero>

      {/* O sistema complexo */}
      <section className="section">
        <div className="container grid-2">
          <MosaicoFotos fotos={FOTOS} />
          <div className="reveal">
            <p className="eyebrow">O sistema complexo</p>
            <h2 className="section-title" style={{ marginBottom: 24 }}>
              Em vez de isolar músculos, treinamos a{" "}
              <span className="hl">exigência real</span> do esporte.
            </h2>
            <p style={{ color: "var(--muted)" }}>
              Mapeamos as complexidades específicas de cada modalidade e
              treinamos o atleta dentro delas — de forma funcional e integrada,
              replicando a demanda real da competição.
            </p>
            {/* Conteúdo auxiliar: um exemplo que complementa o texto */}
            <aside className="callout">
              <h3>Exemplo · piloto de kart</h3>
              <p>
                No treino convencional, ele faria uma puxada isolada para o
                dorsal. No PKZ, ele treina sentado, executando um movimento
                complexo enquanto estabiliza cabeça e pescoço para sustentar o
                tronco — exatamente como na pista.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* O processo do atleta */}
      <section className="section">
        <div className="container">
          <CabecalhoSecao
            eyebrow="O processo do atleta"
            titulo="Da primeira avaliação ao gráfico de evolução."
            estiloTitulo={{ maxWidth: 640 }}
          />
          <Passos passos={PASSOS} icone="foguete" />
        </div>
      </section>

      {/* Serviços do pacote */}
      <section className="section">
        <div className="container">
          <CabecalhoSecao
            eyebrow="Além do treino"
            titulo="Um pacote que cuida do atleta por inteiro"
          />
          <div className="grid-4">
            {SERVICOS.map((servico) => (
              <article className="card reveal" key={servico.titulo}>
                <span className="pkz-mark-sm" aria-hidden="true">
                  P<img src={fogueteBranco} alt="" />Z
                </span>
                <h3>{servico.titulo}</h3>
                <p>{servico.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Especialistas */}
      <section className="section">
        <div className="container">
          <CabecalhoSecao
            eyebrow="Especialistas"
            titulo="Quem conduz os atletas"
          />
          <div className="grid-3">
            {EQUIPE.map((pessoa) => (
              <CardEquipe key={pessoa.nome} {...pessoa} />
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos de pais */}
      <section className="section">
        <div className="container">
          <CabecalhoSecao
            eyebrow="Depoimentos de pais"
            titulo="Quem confia nos filhos com a gente"
          />
          <div className="grid-3">
            {DEPOIMENTOS.map((depoimento) => (
              <Depoimento key={depoimento.autor} {...depoimento} />
            ))}
          </div>
        </div>
      </section>

      <Faq
        eyebrow="Perguntas frequentes"
        titulo="Dúvidas de pais"
        perguntas={PERGUNTAS}
      />

      {/* Chamada final para agendamento */}
      <Chamada
        titulo="Faça o seu atleta decolar."
        texto="Agende uma avaliação, conheça o espaço e a metodologia, e monte com a gente o pacote ideal para o seu atleta."
        decoracao="foguete"
      >
        <a className="btn btn-primary" href={LINK_AGENDAR_PKZ} target="_blank" rel="noopener noreferrer">
          Agendar avaliação
        </a>
        <Link className="btn btn-ghost" to="/planos">
          Conhecer os planos
        </Link>
      </Chamada>
    </main>
  );
}
