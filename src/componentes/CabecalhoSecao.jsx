// Cabeçalho das seções: o eyebrow (texto pequeno) e o título h2.
// Esse par se repetia em quase todas as seções do site.
// Props:
//   eyebrow       texto pequeno acima do título
//   titulo        o h2 (pode ter JSX)
//   estiloTitulo  objeto de estilo para o h2 (opcional), ex.: { maxWidth: 640 }
export default function CabecalhoSecao({ eyebrow, titulo, estiloTitulo }) {
  return (
    <div className="reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title" style={estiloTitulo}>
        {titulo}
      </h2>
    </div>
  );
}
