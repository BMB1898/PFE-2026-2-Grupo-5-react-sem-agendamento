import "./LogoOneToOne.css";

// Logo "ONE to ONE STUDIO" feita com texto.
// Aparece no header (variante "nav") e no card da Home (variante "sm").
// Props:
//   variante: "nav" ou "sm" (opcional) — muda o tamanho
export default function LogoOneToOne({ variante }) {
  let classes = "brand-logo-1to1";
  if (variante === "nav") classes += " nav-1to1";
  if (variante === "sm") classes += " sm";

  return (
    // no header a logo está dentro de um link que já tem aria-label,
    // então o texto da logo é escondido dos leitores de tela
    <span className={classes} aria-hidden={variante === "nav"}>
      <span className="word">
        ONE <span className="to">to</span> ONE
      </span>
      <span className="studio">STUDIO</span>
    </span>
  );
}
