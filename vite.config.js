import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
//
// O "base" (a pasta onde o site fica publicado) NÃO é definido aqui,
// porque o site vai para dois lugares diferentes:
//   - Vercel: na raiz ("/"), que é o padrão do Vite → npm run build
//   - GitHub Pages: em "/PFE-2026-2-Grupo-5-react-sem-agendamento/" → npm run deploy
// O script "build:gh-pages" do package.json passa o base pelo terminal.
export default defineConfig({
  plugins: [react()],
});
