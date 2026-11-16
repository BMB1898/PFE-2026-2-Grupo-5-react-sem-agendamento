import { useEffect } from "react";

// ANIMAÇÃO DE ENTRADA DAS SEÇÕES
// Os elementos com a classe "reveal" começam invisíveis (CSS).
// A cada rolagem, quem já entrou na tela ganha a classe "visible".
//
// Isto é um "hook personalizado": uma função comum que usa outro hook
// (o useEffect). O nome começa com "use" por convenção do React.
//
// Mexer direto no DOM (querySelectorAll, classList) é um "efeito colateral",
// por isso fica dentro do useEffect, que roda DEPOIS que o React desenhou
// a página. O parâmetro "pagina" vai na lista de dependências: cada vez que
// a pessoa troca de página, o efeito roda de novo e encontra os novos elementos.
export default function useReveal(pagina) {
  useEffect(() => {
    const elementosReveal = document.querySelectorAll(".reveal");

    function mostraElementosVisiveis() {
      elementosReveal.forEach((elemento) => {
        // posição do topo do elemento em relação ao topo da janela
        const topo = elemento.getBoundingClientRect().top;
        if (topo < window.innerHeight - 40) {
          elemento.classList.add("visible");
        }
      });
    }

    mostraElementosVisiveis();
    // passive: true avisa o navegador que não vamos usar preventDefault(),
    // o que deixa a rolagem mais leve
    window.addEventListener("scroll", mostraElementosVisiveis, {
      passive: true,
    });
    window.addEventListener("resize", mostraElementosVisiveis);

    // Função de limpeza: o React chama antes de rodar o efeito de novo
    // (na próxima página), para não acumular eventos repetidos.
    return () => {
      window.removeEventListener("scroll", mostraElementosVisiveis);
      window.removeEventListener("resize", mostraElementosVisiveis);
    };
  }, [pagina]);
}
