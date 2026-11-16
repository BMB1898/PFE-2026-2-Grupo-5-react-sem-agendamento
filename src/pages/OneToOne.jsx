import { Link } from "react-router-dom";

import Hero from "../componentes/Hero.jsx";
import CabecalhoSecao from "../componentes/CabecalhoSecao.jsx";
import Diferenciais from "../componentes/Diferenciais.jsx";
import CardEquipe from "../componentes/CardEquipe.jsx";
import Depoimento from "../componentes/Depoimento.jsx";
import Faq from "../componentes/Faq.jsx";
import Chamada from "../componentes/Chamada.jsx";
import { LINK_AGENDAR_ONE_TO_ONE } from "../whatsapp.js";

import fotoHero from "../imagem/hero-one-to-one.jpg";
import fotoEduardo from "../imagem/prof-eduardo.jpg";
import fotoCarla from "../imagem/prof-carla.jpg";
import fotoRafael from "../imagem/prof-rafael.jpg";

const DIFERENCIAIS = [
  {
    titulo: "Treino individualizado",
    texto:
      "Cada aluno tem configuração de aparelhos e carga pensada para o seu corpo e objetivo.",
  },
  {
    titulo: "Valências por grupo muscular",
    texto:
      "Trabalhamos força, mobilidade e resistência de forma direcionada — do dorsal ao core.",
  },
  {
    titulo: "Até 3 alunos por professor",
    texto:
      "Atenção real em cada sessão. Você nunca é só mais um número na sala.",
  },
  {
    titulo: "Relatório a cada sessão",
    texto:
      "Você acompanha o que foi treinado, a intensidade e a conduta sugerida para a próxima aula.",
  },
];

const EQUIPE = [
  {
    nome: "Eduardo Martins",
    cargo: "Treinador · Musculação",
    experiencia: "12 anos de experiência",
    foto: fotoEduardo,
  },
  {
    nome: "Carla Menezes",
    cargo: "Personal · Reabilitação",
    experiencia: "9 anos de experiência",
    foto: fotoCarla,
  },
  {
    nome: "Rafael Souza",
    cargo: "Força & Condicionamento",
    experiencia: "7 anos de experiência",
    foto: fotoRafael,
  },
];

const DEPOIMENTOS = [
  {
    texto:
      "Voltei a treinar aos 58 anos com medo de me machucar. Aqui montaram tudo no meu ritmo e hoje faço coisas que não imaginava.",
    autor: "Marta R.",
    info: "Aluna há 2 anos",
  },
  {
    texto:
      "A autonomia para marcar e remarcar sozinho pelo app mudou a minha rotina. Nunca mais fiquei sem graça de pedir no WhatsApp.",
    autor: "Bruno L.",
    info: "Aluno há 1 ano",
  },
  {
    texto:
      "Cada professor sabe exatamente o que treinei na última aula. Sinto que existe um plano de verdade por trás de tudo.",
    autor: "Patrícia G.",
    info: "Aluna há 3 anos",
  },
];

const PERGUNTAS = [
  {
    pergunta: "Como funciona o treinamento de vocês?",
    resposta:
      "Combinamos as suas valências físicas com o seu objetivo e a nossa metodologia central. O treino é individualizado, com aparelhos e cargas ajustadas para você — e cada sessão gera um relatório de acompanhamento.",
  },
  {
    pergunta: "Quais são os horários de funcionamento?",
    resposta: (
      <>
        Atendemos de segunda a sexta, das 7h às 20h, e aos sábados pela manhã.
        Fale com a gente pelo WhatsApp e{" "}
        <a className="hl" href={LINK_AGENDAR_ONE_TO_ONE} target="_blank" rel="noopener noreferrer">
          agende sua aula experimental
        </a>
        .
      </>
    ),
  },
  {
    pergunta: "Quais são os valores e como funciona o pagamento?",
    resposta: (
      <>
        Cada pacote é montado sob medida, de acordo com a frequência semanal e
        os serviços incluídos. Veja os{" "}
        <Link className="hl" to="/planos">
          planos
        </Link>{" "}
        e fale com a gente para montar o seu.
      </>
    ),
  },
  {
    pergunta: "Vocês atendem qualquer esporte ou objetivo?",
    resposta:
      "Sim. A metodologia é a mesma e se adapta ao seu objetivo — saúde, estética, reabilitação ou performance em qualquer modalidade.",
  },
];

export default function OneToOne() {
  return (
    <main>
      <title>One to One Studio · Playmakerz</title>
      <meta
        name="description"
        content="Treinamento individualizado para todas as idades, de 17 a 90 anos. Musculação e personal training com até 3 alunos por professor."
      />

      <Hero
        titulo={
          <>
            Seu corpo, <br />
            <span className="hl">seu treino</span>.
          </>
        }
        texto="Treinamento individualizado para potencializar o que torna você único. Musculação e personal training para todas as idades, de 17 a 90 anos, com qualquer objetivo. Peso livre, aparelhos e configuração individual — tudo desenhado para o seu corpo e a sua rotina."
        textoLargo
        foto={fotoHero}
        altFoto="Aluno treinando com halteres sob a orientação de uma personal trainer"
        larguraFoto={900}
        alturaFoto={1348}
      >
        {/* agendamento pelo WhatsApp: link para fora do site, <a> comum */}
        <a className="btn btn-accent" href={LINK_AGENDAR_ONE_TO_ONE} target="_blank" rel="noopener noreferrer">
          Agendar aula experimental <span className="chev"></span>
        </a>
      </Hero>

      {/* A metodologia */}
      <section className="section">
        <div className="container">
          <CabecalhoSecao
            eyebrow="A metodologia"
            titulo="Convencional no formato, cirúrgico no cuidado."
            estiloTitulo={{ maxWidth: 620 }}
          />
          <Diferenciais itens={DIFERENCIAIS} />
        </div>
      </section>

      {/* Professores */}
      <section className="section">
        <div className="container">
          <CabecalhoSecao
            eyebrow="Nossos professores"
            titulo="Quem vai treinar com você"
          />
          <div className="grid-3">
            {/* {...pessoa} passa cada campo do objeto como uma prop:
                nome={pessoa.nome} cargo={pessoa.cargo} ... */}
            {EQUIPE.map((pessoa) => (
              <CardEquipe key={pessoa.nome} {...pessoa} />
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="section">
        <div className="container">
          <CabecalhoSecao eyebrow="Depoimentos" titulo="Quem treina, recomenda" />
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
        titulo="Venha treinar com a gente."
        texto="Agende uma aula experimental, conheça o studio e a equipe, e monte com a gente o plano ideal para o seu objetivo."
        decoracao="setas"
      >
        <a className="btn btn-primary" href={LINK_AGENDAR_ONE_TO_ONE} target="_blank" rel="noopener noreferrer">
          Agendar aula experimental
        </a>
        <Link className="btn btn-ghost" to="/planos">
          Conhecer os planos
        </Link>
      </Chamada>
    </main>
  );
}
