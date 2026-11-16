# Playmakerz · site em React (sem agendamento)

Site da **Playmakerz**, um centro de treinamento na Barra da Tijuca (Rio de
Janeiro) que aplica a mesma metodologia em duas marcas:

- **One-to-One Studio**: treinamento individualizado e musculação para todas
  as idades, de 17 a 90 anos, com até 3 alunos por professor.
- **PKZ**: alto rendimento para jovens atletas de 7 a 15 anos, dentro do
  esporte que cada um pratica.

O site também apresenta o serviço de **fisioterapia** integrado ao treino e os
**planos**.

Projeto da disciplina PFE 2026.2, Grupo 5. O site foi feito primeiro em HTML,
CSS e JavaScript puro e depois migrado para React com Vite.

**Esta é a versão sem as páginas de agendamento** (sem o calendário e o
formulário). Os botões "Agendar" abrem o WhatsApp da empresa com uma mensagem
pronta. A versão completa, com o agendamento online, está no repositório
[PFE-2026-2-Grupo-5-react](https://github.com/BMB1898/PFE-2026-2-Grupo-5-react).

## Páginas

| Endereço | Página |
| --- | --- |
| `/` | Início: quem somos, as duas marcas e o método de trabalho |
| `/one-to-one` | One-to-One Studio: metodologia, professores, depoimentos e perguntas frequentes |
| `/pkz` | PKZ: o "sistema complexo", processo do atleta, serviços, especialistas e depoimentos de pais |
| `/fisioterapia` | Fisioterapia: áreas de atuação, como funciona, equipe e depoimentos |
| `/planos` | Planos Essencial, Completo e Performance |
| qualquer outro | Página 404 ("Página não encontrada") |

## O que o site faz

- **Menu** que escurece ao rolar a página, com versão para celular (botão de
  3 risquinhos). Fecha ao clicar fora ou apertar ESC.
- **Logo do menu** que muda conforme a página: One to One, PKZ Lab ou
  Playmakerz.
- **Animação de entrada** das seções conforme a página rola.
- **Perguntas frequentes** que abrem e fecham (uma de cada vez).
- **Agendamento pelo WhatsApp**: os botões "Agendar aula experimental"
  (One-to-One), "Agendar avaliação" (PKZ e Fisioterapia) e os dos planos abrem
  a conversa com a mensagem já escrita.
- **Rodapé** com o número do WhatsApp da empresa.

## Tecnologias

- [React 19](https://react.dev): componentes, props, `useState`, `useEffect`
  e `useRef`
- [Vite](https://vite.dev): servidor de desenvolvimento e build
- [React Router](https://reactrouter.com): troca de página sem recarregar
  (`BrowserRouter`, `Routes`, `Route`, `Link` e `NavLink`)
- CSS puro: um arquivo global e um arquivo ao lado de cada componente
- [oxlint](https://oxc.rs): verificação de erros comuns no código

## Como rodar

Precisa do [Node.js](https://nodejs.org) (versão LTS). No Prompt de Comando
(cmd), dentro da pasta do projeto:

```
npm install
npm run dev
```

O Vite mostra um endereço (normalmente http://localhost:5173). Ctrl + clique
no link abre o site. O Live Preview do VS Code não funciona com React: o site
precisa do servidor do Vite.

| Comando | O que faz |
| --- | --- |
| `npm run dev` | abre o site para desenvolvimento, atualizando a cada mudança |
| `npm run lint` | procura erros comuns no código |
| `npm run build` | gera a versão final na pasta `dist` (é a que o Vercel usa) |
| `npm run preview` | abre a versão da pasta `dist` para conferir |
| `npm run deploy` | publica no GitHub Pages |

## Estrutura

```
├─ index.html          ← só a <div id="root">, o favicon e as fontes do Google
├─ vercel.json         ← faz o Vercel abrir o React em qualquer endereço
├─ vite.config.js
└─ src/
   ├─ main.jsx         ← liga o React e o BrowserRouter
   ├─ App.jsx          ← Header + rotas + Footer
   ├─ index.css        ← CSS global (cores, fontes, botões, grades)
   ├─ whatsapp.js      ← número da empresa, a função que monta os links e as
   │                     mensagens dos botões "Agendar"
   ├─ useReveal.js     ← animação de entrada das seções
   ├─ imagem/          ← fotos, logos e ícones (inclusive o favicon)
   ├─ componentes/     ← peças reutilizáveis, cada uma com seu .css
   │  ├─ Header, Footer, LogoOneToOne
   │  ├─ Hero, CabecalhoSecao, Chamada
   │  ├─ Passos, Diferenciais, MosaicoFotos
   │  └─ CardEquipe, Depoimento, Faq
   └─ pages/           ← uma página por rota
      ├─ Home, OneToOne, Pkz, Fisioterapia, Planos
      └─ NaoEncontrada ← página 404
```

As imagens entram no código com `import` (ex.:
`import foto from "../imagem/hero-home.jpg"` e depois `src={foto}`). Assim o
Vite avisa no build se alguma imagem estiver faltando.

O número do WhatsApp fica só no `whatsapp.js`. Os botões, os links e o número
mostrado no rodapé são montados a partir dele, então basta trocar em um lugar.

## Do HTML para o React

| Site em HTML | Site em React |
| --- | --- |
| um arquivo `.html` por página, cada um com o menu e o rodapé copiados | menu e rodapé escritos uma vez só, no `App.jsx` |
| `<a href="planos.html">` | `<Link to="/planos">`, sem recarregar a página |
| `class="active"` escrito à mão em cada página | `<NavLink>`, que marca a página atual sozinho |
| cards repetidos no HTML | listas de objetos percorridas com `map` |
| `script.js` com `querySelector` e `classList` | estado com `useState` e eventos com `onClick` |
| um `style.css` único | `index.css` global e um `.css` por componente |
| número do WhatsApp repetido em vários links | número só no `whatsapp.js` |

## Publicação

O mesmo código é publicado em dois lugares. A diferença é a "pasta" onde o
site fica:

| | Endereço | Pasta (`base`) |
| --- | --- | --- |
| Vercel | endereço do projeto no Vercel | `/` |
| GitHub Pages | https://bmb1898.github.io/PFE-2026-2-Grupo-5-react-sem-agendamento/ | `/PFE-2026-2-Grupo-5-react-sem-agendamento/` |

Por isso o `base` não fica fixo no `vite.config.js`:

- o script `build:gh-pages` do `package.json` passa o `base` do GitHub Pages
  pelo terminal;
- o `main.jsx` usa `basename={import.meta.env.BASE_URL}` no `BrowserRouter`,
  para as rotas entenderem a pasta.

### Vercel

O Vercel publica de novo a cada push. O `vercel.json` faz qualquer endereço
(como `/planos`) abrir o `index.html`; sem ele, abrir um endereço direto ou
apertar F5 daria erro 404.

### GitHub Pages

```
npm run deploy
```

Gera o site com o `base` do GitHub Pages e envia a pasta `dist` para o branch
`gh-pages`. Na primeira vez, no GitHub, abra Settings → Pages e escolha o
branch `gh-pages`. O GitHub Pages só atualiza quando alguém roda o `deploy`
de novo.

O build também copia o `index.html` como `404.html`: quando o GitHub Pages não
encontra um endereço como `/planos`, ele mostra o `404.html`, que carrega o
React e abre a página certa.

## Grupo

O site foi feito em partes, uma por integrante, no repositório
[PFE-2026-2-Grupo-5-react](https://github.com/BMB1898/PFE-2026-2-Grupo-5-react).
Esta versão foi criada a partir dele, tirando as páginas de agendamento.

| Parte | Integrante |
| --- | --- |
| Base do projeto (configuração, rotas, CSS global, imagens, página 404 e publicação) | SkyeMel |
| Menu, rodapé e página de Planos | João Enes |
| Página inicial e componentes das seções (Hero, Passos, MosaicoFotos) | Bernardo Borghetti |
| Agendamento (só na versão completa) | Giovanni |
| Página One-to-One e componentes (Faq, Depoimento, CardEquipe, Chamada) | Rafael Castro |
| Páginas PKZ e Fisioterapia | Bernardo Parrilha |
