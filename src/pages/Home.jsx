import { Link } from "react-router-dom";

import Hero from "../componentes/Hero.jsx";
import CabecalhoSecao from "../componentes/CabecalhoSecao.jsx";
import MosaicoFotos from "../componentes/MosaicoFotos.jsx";
import Passos from "../componentes/Passos.jsx";
import LogoOneToOne from "../componentes/LogoOneToOne.jsx";

import fotoHero from "../imagem/hero-home.jpg";
import fotoAcademia from "../imagem/home-academia.jpg";
import fotoFutebol1 from "../imagem/home-futebol-1.jpg";
import fotoFutebol2 from "../imagem/home-futebol-2.jpg";
import fotoAcademia2 from "../imagem/home-academia-2.jpg";
import fotoEduardo from "../imagem/prof-eduardo.jpg";
import fotoPkz4 from "../imagem/pkz-4.jpg";
import fotoFisioterapia from "../imagem/home-fisioterapia.jpg";
import logoPlaymakerz from "../imagem/logo-playmakerz.png";
import fogueteBranco from "../imagem/rocket-white.svg";
import "./Home.css";

// Os conteúdos que se repetem ficam em arrays de objetos.
// O componente percorre o array com map e cria um item para cada objeto.

const NUMEROS = [
  { numero: "7–90", descricao: "faixa etária atendida" },
  { numero: "16", descricao: "testes físicos na avaliação" },
  { numero: "2", descricao: "marcas, uma filosofia" },
];

const FOTOS = [
  { src: fotoAcademia, alt: "Atleta pegando halteres na academia" },
  { src: fotoFutebol1, alt: "Crianças jogando futebol" },
  { src: fotoFutebol2, alt: "Menino chutando a bola em campo de futebol" },
  { src: fotoAcademia2, alt: "Atleta treinando no cross-over" },
];

const PASSOS = [
  {
    titulo: "Avaliação",
    texto:
      "Mapeamos valências físicas e as exigências reais do seu esporte ou objetivo.",
  },
  {
    titulo: "Plano",
    texto:
      "Montamos o cronograma do mês — mesociclo dividido em microciclos semanais.",
  },
  {
    titulo: "Treino",
    texto:
      "Cada sessão gera um relatório: o que foi feito e o que observar na próxima.",
  },
  {
    titulo: "Evolução",
    texto:
      "Reavaliações periódicas mostram sua evolução em uma linha do tempo clara.",
  },
];

export default function Home() {
  return (
    <main>
      {/* React 19: <title> e <meta> dentro do componente vão
          sozinhos para o <head> da página */}
      <title>Playmakerz · Do potencial à performance</title>
      <meta
        name="description"
        content="Centro de treinamento na Barra da Tijuca. Uma metodologia única aplicada a qualquer esporte e qualquer fase da vida — One-to-One Studio e PKZ."
      />

      <Hero
        eyebrow="PKZ · One-to-One"
        titulo={
          <>
            Do potencial
            <br />à <span className="hl">performance</span>.
          </>
        }
        texto="Uma metodologia única, aplicada de forma flexível para qualquer esporte e qualquer fase da vida. Role para descobrir os dois lados da mesma filosofia."
        foto={fotoHero}
        altFoto="Atleta treinando com cordas naval em um centro de treinamento"
        larguraFoto={900}
        alturaFoto={1350}
        setaRolar="quem-somos"
      >
        <Link className="btn btn-accent" to="/planos">
          Conhecer os planos <span className="chev"></span>
        </Link>
      </Hero>

      {/* Quem somos */}
      <section className="section about" id="quem-somos">
        <div className="container grid-2">
          <div className="reveal">
            <p className="eyebrow">Quem somos</p>
            <h2>
              Um centro de treinamento que trata cada pessoa como{" "}
              <span className="hl">única</span>.
            </h2>
            <p>
              Começamos indo até o aluno — treinando atletas dentro de
              condomínios na Barra da Tijuca. A demanda cresceu e nasceu um
              centro de treinamento próprio, organizado em duas linhas de
              atuação. Na prática, somos uma coisa só: a mesma metodologia e a
              mesma filosofia, aplicadas de formas diferentes.
            </p>
            <p>
              Trabalhamos o atleta a partir das valências físicas, somadas à
              lógica do esporte específico e à nossa metodologia central. Isso
              vale para qualquer modalidade e qualquer objetivo.
            </p>
            {/* Lista descritiva: número em destaque (dt) e o que ele significa (dd) */}
            <dl className="stats">
              {NUMEROS.map((item) => (
                <div className="stat" key={item.descricao}>
                  <dt>{item.numero}</dt>
                  <dd>{item.descricao}</dd>
                </div>
              ))}
            </dl>
          </div>
          <MosaicoFotos fotos={FOTOS} />
        </div>
      </section>

      {/* As duas marcas */}
      <section className="section">
        <div className="container">
          <div className="brands-head reveal">
            <p className="eyebrow">Escolha o seu lado</p>
            <h2 className="section-title">Duas marcas. A mesma metodologia.</h2>
          </div>
          <div className="brand-cards">
            <Link className="brand-card reveal" to="/one-to-one">
              <img className="bg" src={fotoEduardo} alt="" loading="lazy" />
              <LogoOneToOne variante="sm" />
              <p>
                Treinamento individualizado para potencializar o que torna você
                único. Musculação e performance pessoal para todas as idades, de
                17 a 90 anos.
              </p>
              <span className="link-arrow">
                Entrar no studio <span className="chev"></span>
              </span>
            </Link>
            <Link className="brand-card reveal" to="/pkz">
              <img className="bg" src={fotoPkz4} alt="" loading="lazy" />
              <img
                className="pkz-mark"
                src={logoPlaymakerz}
                alt="Playmakerz"
                loading="lazy"
              />
              <p>
                Alto rendimento que transforma jovens atletas de 7 a 15 anos em
                versões mais fortes, rápidas e completas de si mesmos — dentro
                do esporte que escolheram praticar.
              </p>
              {/* estilo inline: objeto JavaScript com as propriedades CSS */}
              <span className="link-arrow" style={{ color: "#fff" }}>
                Decolar com o PKZ
                <img
                  className="icon"
                  src={fogueteBranco}
                  alt=""
                  width={12}
                  height={15}
                />
              </span>
            </Link>
            {/* Opção extra: serviço de fisioterapia, em largura total abaixo das duas marcas */}
            <Link className="brand-card brand-card-wide reveal" to="/fisioterapia">
              <img className="bg" src={fotoFisioterapia} alt="" loading="lazy" />
              <h3 className="brand-title">Fisioterapia</h3>
              <p>
                Fisioterapia esportiva e de reabilitação integrada ao treino:
                avaliação, prevenção de lesões e recuperação para atletas e
                alunos.
              </p>
              <span className="link-arrow">
                Conhecer a fisioterapia <span className="chev"></span>
              </span>
            </Link>
          </div>
          <p className="brands-note">
            Somos uma empresa só. Cada marca representa o que somos
            individualmente — juntas, formam a nossa filosofia por completo.
          </p>
        </div>
      </section>

      {/* Como trabalhamos: os quatro passos do método */}
      <section className="section">
        <div className="container">
          <CabecalhoSecao
            eyebrow="Como trabalhamos"
            titulo="Um método, aplicado de forma flexível a qualquer esporte."
            estiloTitulo={{ maxWidth: 640 }}
          />
          <Passos passos={PASSOS} icone="seta" />
        </div>
      </section>
    </main>
  );
}
