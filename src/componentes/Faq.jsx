import { useState } from "react";
import "./Faq.css";

// PERGUNTAS FREQUENTES (lista descritiva: pergunta em dt, resposta em dd)
// Só uma resposta fica aberta por vez. A primeira começa aberta.
// Props:
//   eyebrow, titulo  cabeçalho da seção
//   perguntas        array de objetos { pergunta, resposta }
//                    (a resposta pode ter JSX, como um <Link>)
export default function Faq({ eyebrow, titulo, perguntas }) {
  // índice da pergunta aberta (0 = a primeira; null = todas fechadas)
  const [aberta, setAberta] = useState(0);

  function alterna(indice) {
    // clicou na que já estava aberta? fecha. Senão, abre a clicada.
    setAberta(aberta === indice ? null : indice);
  }

  return (
    <section className="section">
      <div className="container">
        <div className="faq">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title">{titulo}</h2>
          <dl className="faq-list">
            {perguntas.map((item, indice) => {
              const estaAberta = aberta === indice;
              return (
                <div
                  className={estaAberta ? "faq-item open" : "faq-item"}
                  key={item.pergunta}
                >
                  <dt>
                    <button
                      className="faq-q"
                      type="button"
                      aria-expanded={estaAberta}
                      onClick={() => alterna(indice)}
                    >
                      {item.pergunta} <span className="chev"></span>
                    </button>
                  </dt>
                  <dd className="faq-a">
                    <p>{item.resposta}</p>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
