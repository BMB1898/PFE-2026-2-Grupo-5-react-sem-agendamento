import "./MosaicoFotos.css";

// Mosaico de 4 fotos em duas colunas.
// Props:
//   fotos  array de objetos { src, alt } — src é a imagem importada
export default function MosaicoFotos({ fotos }) {
  return (
    <div className="photo-mosaic reveal">
      {fotos.map((foto) => (
        <img key={foto.src} src={foto.src} alt={foto.alt} loading="lazy" />
      ))}
    </div>
  );
}
