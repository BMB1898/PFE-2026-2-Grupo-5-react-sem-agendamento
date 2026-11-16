import { Link } from "react-router-dom";

import Hero from "../componentes/Hero.jsx";
import CabecalhoSecao from "../componentes/CabecalhoSecao.jsx";
import Diferenciais from "../componentes/Diferenciais.jsx";
import MosaicoFotos from "../componentes/MosaicoFotos.jsx";
import Passos from "../componentes/Passos.jsx";
import CardEquipe from "../componentes/CardEquipe.jsx";
import Depoimento from "../componentes/Depoimento.jsx";
import Faq from "../componentes/Faq.jsx";
import Chamada from "../componentes/Chamada.jsx";
import { criaLinkWhatsapp } from "../whatsapp.js";

import fotoHero from "../imagem/hero-fisioterapia.jpg";
import fotoFisio1 from "../imagem/fisio-1.jpg";
import fotoFisio2 from "../imagem/fisio-2.jpg";
import fotoFisio3 from "../imagem/fisio-3.jpg";
import fotoFisio4 from "../imagem/fisio-4.jpg";
import fotoCarla from "../imagem/prof-carla.jpg";
import fotoHenrique from "../imagem/prof-henrique.jpg";
import fotoEduardo from "../imagem/prof-eduardo.jpg";

// Link do WhatsApp com a mensagem pronta (usado em dois botões)
const LINK_AVALIACAO = criaLinkWhatsapp(
  "Olá! Quero agendar uma avaliação de fisioterapia.",
);

const AREAS = [
  {
    titulo: "Fisioterapia esportiva",
    texto:
      "Tratamento de lesões musculares, articulares e ligamentares com foco no retorno seguro à modalidade.",
  },
  {
    titulo: "Reabilitação pós-cirúrgica",
    texto:
      "Protocolos progressivos para recuperar força, mobilidade e confiança depois de uma cirurgia.",
  },
  {
    titulo: "Prevenção de lesões",
    texto:
      "Avaliação de movimento e correção de assimetrias antes que elas virem problema.",
  },
  {
    titulo: "Dor e postura",
    texto:
      "Alívio de dores recorrentes e reeducação postural para o dia a dia e para o treino.",
  },
];

const FOTOS = [
  {
    src: fotoFisio1,
    alt: "Atendimento no campo: spray para tratar o tornozelo de um jogador de futebol",
  },
  { src: fotoFisio2, alt: "Atleta usando rolo de liberação miofascial na pista" },
  { src: fotoFisio3, alt: "Jogador de futebol com joelheira de compressão em campo" },
  { src: fotoFisio4, alt: "Fisioterapeuta avaliando o ombro de uma atleta na clínica" },
];

const PASSOS = [
  {
    titulo: "Avaliação",
    texto:
      "Conversa sobre o histórico e testes de movimento, força e mobilidade.",
  },
  {
    titulo: "Plano de tratamento",
    texto:
      "Objetivos e prazos definidos junto com você, sob medida para o seu caso.",
  },
  {
    titulo: "Sessões",
    texto:
      "Terapia manual, exercícios e recursos de recuperação, com registro de cada sessão.",
  },
  {
    titulo: "Alta e prevenção",
    texto:
      "Retorno gradual ao treino e um plano para evitar que a lesão volte.",
  },
];

const EQUIPE = [
  {
    nome: "Carla Menezes",
    cargo: "Fisioterapeuta · Reabilitação",
    experiencia: "10 anos de experiência",
    foto: fotoCarla,
  },
  {
    nome: "Marcelo Duarte",
    cargo: "Fisioterapeuta · Esportiva",
    experiencia: "12 anos de experiência",
    foto: fotoHenrique,
  },
  {
    nome: "Lucas Prado",
    cargo: "Fisioterapeuta · Prevenção",
    experiencia: "8 anos de experiência",
    foto: fotoEduardo,
  },
];

const DEPOIMENTOS = [
  {
    texto:
      "Depois da cirurgia no joelho achei que não voltaria a treinar. O plano foi gradual e hoje estou melhor do que antes.",
    autor: "Ricardo S.",
    info: "Paciente há 1 ano",
  },
  {
    texto:
      "O mais legal é que o fisio e o professor trocam informação. Meu treino se adaptou na mesma semana.",
    autor: "Fernanda A.",
    info: "Aluna One to One",
  },
  {
    texto:
      "Meu filho voltou a jogar sem medo depois da lesão no tornozelo, e ainda aprendeu a se prevenir.",
    autor: "Paulo H.",
    info: "Pai de atleta · futebol",
  },
];

const PERGUNTAS = [
  {
    pergunta: "Preciso ser aluno para fazer fisioterapia?",
    resposta:
      "Não. A fisioterapia atende também quem não treina na Playmakerz. Para alunos, a vantagem é a integração direta com o plano de treino.",
  },
  {
    pergunta: "Como é a primeira consulta?",
    resposta:
      "É uma avaliação com conversa sobre o seu histórico e testes de movimento. Ao final você sai com um plano de tratamento e uma previsão de prazos.",
  },
  {
    pergunta: "Atendem crianças e adolescentes?",
    resposta:
      "Sim. Atendemos os atletas do PKZ Lab e outros jovens esportistas, com acompanhamento próximo dos responsáveis.",
  },
  {
    pergunta: "Quais são os valores?",
    resposta: (
      <>
        Os valores dependem do tratamento e do número de sessões. Veja os{" "}
        <Link className="hl" to="/planos">
          planos
        </Link>{" "}
        e fale com a gente para montar o ideal para o seu caso.
      </>
    ),
  },
];

export default function Fisioterapia() {
  return (
    <main>
      <title>Fisioterapia · Playmakerz</title>
      <meta
        name="description"
        content="Fisioterapia esportiva e de reabilitação integrada ao treino: avaliação, prevenção de lesões e recuperação para atletas e alunos da Playmakerz."
      />

      <Hero
        titulo={
          <>
            Movimento sem dor, <br />
            <span className="hl">com performance</span>.
          </>
        }
        texto="Fisioterapia esportiva e de reabilitação integrada ao treino. Avaliamos, tratamos e prevenimos lesões para que você e o seu atleta voltem a se mover com segurança e confiança."
        textoLargo
        foto={fotoHero}
        altFoto="Fisioterapeuta fazendo massagem de recuperação na perna de um atleta"
        larguraFoto={900}
        alturaFoto={1200}
      >
        {/* link para fora do site: continua sendo um <a> comum */}
        <a className="btn btn-accent" href={LINK_AVALIACAO}>
          Agendar avaliação <span className="chev"></span>
        </a>
      </Hero>

      {/* Áreas de atuação */}
      <section className="section">
        <div className="container">
          <CabecalhoSecao
            eyebrow="Áreas de atuação"
            titulo="Do primeiro desconforto ao retorno ao esporte."
            estiloTitulo={{ maxWidth: 620 }}
          />
          <Diferenciais itens={AREAS} />
        </div>
      </section>

      {/* Integrada ao treino */}
      <section className="section">
        <div className="container grid-2">
          <MosaicoFotos fotos={FOTOS} />
          <div className="reveal">
            <p className="eyebrow">Integrada ao treino</p>
            <h2 className="section-title" style={{ marginBottom: 24 }}>
              O fisioterapeuta <span className="hl">fala com o professor</span>.
            </h2>
            <p style={{ color: "var(--muted)" }}>
              Na Playmakerz a fisioterapia não acontece isolada: ela conversa
              com o plano de treino do One to One e do PKZ. O que foi tratado
              hoje orienta o que será treinado amanhã.
            </p>
            <aside className="callout">
              <h3>Exemplo · dor no joelho</h3>
              <p>
                Em vez de parar de treinar, o fisioterapeuta identifica a causa
                e passa ao professor os exercícios que podem continuar, os que
                devem ser adaptados e o que reforçar para o joelho voltar a
                render.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="section">
        <div className="container">
          <CabecalhoSecao
            eyebrow="Como funciona"
            titulo="Da avaliação à alta, com acompanhamento em cada etapa."
            estiloTitulo={{ maxWidth: 640 }}
          />
          {/* sem a prop icone: só o número */}
          <Passos passos={PASSOS} />
        </div>
      </section>

      {/* Equipe */}
      <section className="section">
        <div className="container">
          <CabecalhoSecao eyebrow="Nossa equipe" titulo="Quem cuida de você" />
          <div className="grid-3">
            {EQUIPE.map((pessoa) => (
              <CardEquipe key={pessoa.nome} {...pessoa} />
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="section">
        <div className="container">
          <CabecalhoSecao
            eyebrow="Depoimentos"
            titulo="Quem se recuperou, recomenda"
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
        titulo="Tire suas dúvidas"
        perguntas={PERGUNTAS}
      />

      {/* Chamada final para agendamento */}
      <Chamada
        titulo="Cuide do seu corpo com quem entende de movimento."
        texto="Agende uma avaliação e comece o seu plano de recuperação e prevenção."
        decoracao="setas"
      >
        <a className="btn btn-primary" href={LINK_AVALIACAO}>
          Agendar avaliação
        </a>
        <Link className="btn btn-ghost" to="/planos">
          Conhecer os planos
        </Link>
      </Chamada>
    </main>
  );
}
