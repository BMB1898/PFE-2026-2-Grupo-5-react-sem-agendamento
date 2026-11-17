# Sprint · 10/11/2026 a 16/11/2026

Documentação da sprint do **Grupo 5** (PFE 2026.2) no site da **Playmakerz**,
na versão **sem páginas de agendamento**.

> Nesta versão o agendamento não é feito dentro do site: os botões "Agendar"

## Informações gerais

| | |
| --- | --- |
| **Período** | 10/11/2026 (terça) a 16/11/2026 (segunda) |
| **Duração** | 7 dias |
| **Scrum Master** | _Bernardo Machado Borghetti_ |
| **Time de desenvolvimento** | Bernardo Machado Borghetti, Bernardo Parrilha de Sá, Giovanni Chianello Correia de Melo, Giulia Cabral Merino, João Eduardo Enes, Rafael Castro |

## Objetivo da sprint

Migrar o site da Playmakerz, feito antes em HTML, CSS e JavaScript puro, para
**React com Vite**. Todas as páginas e funcionalidades da versão anterior devem
continuar funcionando, e o código repetido entre páginas deve virar
componentes reutilizáveis. O agendamento fica fora do site e é feito pelo
WhatsApp.

## Sprint Backlog

Cada item foi dividido em uma "parte" e entregue, dessa vez por um  só integrante 

| # | Item | Responsável | Status |
| --- | --- | --- | --- |
| 1 | Base do projeto: Vite, rotas, CSS global, imagens, página 404 e publicação | Giulia Merino | Concluído |
| 2 | Menu (Header), rodapé (Footer), logo One to One e página de Planos | Giulia Merino | Concluído |
| 3 | Página inicial (Home) e componentes Hero, CabecalhoSecao, MosaicoFotos e Passos | Giulia Merino | Concluído |
| 4 | Páginas PKZ e Fisioterapia | Giulia Merino | Concluído |
| 5 | Página One-to-One e componentes Faq, Depoimento, CardEquipe, Chamada e Diferenciais | Giulia Merino | Concluído |
| 6 | Correções e refinamentos: pasta de imagens, ajustes nas páginas, links de agendamento pelo WhatsApp e README | Giulia Merino | Concluído |

**Resultado:** 6 de 6 itens concluídos.

### Fora do escopo

- Páginas de agendamento (`/agendar-one-to-one` e `/agendar-pkz`), com
  calendário, formulário com validação e reservas. Elas foram substituídas por
  links do WhatsApp com mensagem pronta, centralizados em `src/whatsapp.js`.

### Dependências entre os itens

A ordem de envio foi definida para o build nunca quebrar:

```
1 Base ──► 2 Menu/Rodapé/Planos ──► 3 Home ──► 4 PKZ e Fisioterapia
                                         └──► 5 One-to-One
```

- PKZ, Fisioterapia e One-to-One reaproveitam os componentes da Home (Hero,
  CabecalhoSecao, MosaicoFotos e Passos).

## Linha do tempo

| Data | O que aconteceu |
| --- | --- |
| 10/11 a 13/11 | Planejamento da sprint e divisão das partes |
| 14/11 | Repositório criado; base do projeto; menu, rodapé e planos; correções; página inicial |
| 15/11 | Páginas PKZ e Fisioterapia; página One-to-One; refinamentos e README completo |
| 16/11 | Publicação da versão sem agendamento; revisão e retrospectiva da sprint |

## Burndown

Itens do backlog restantes ao fim de cada dia:

| Dia | 10/11 | 11/11 | 12/11 | 13/11 | 14/11 | 15/11 | 16/11 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Itens restantes | 6 | 6 | 6 | 6 | 3 | 0 | 0 |

Toda a implementação ficou concentrada em 14/11 e 15/11.

## Definição de Pronto (Definition of Done)

Um item só era enviado ao GitHub quando:

- [x] `npm run lint` passava sem erros;
- [x] `npm run build` passava sem erros;
- [x] a página foi aberta com `npm run dev` e conferida no navegador;
- [x] os botões de agendamento abriam o WhatsApp com a mensagem certa;
- [x] as linhas dos colegas no `App.jsx` foram mantidas (só acrescentar);
- [x] o commit foi feito com a conta do GitHub do próprio integrante.

## Incremento entregue

Site em React com as rotas:

| Endereço | Página |
| --- | --- |
| `/` | Início |
| `/one-to-one` | One-to-One Studio |
| `/pkz` | PKZ |
| `/fisioterapia` | Fisioterapia |
| `/planos` | Planos |
| qualquer outro | Página 404 |

Os botões "Agendar" das páginas One-to-One, PKZ, Fisioterapia e Planos
abrem o WhatsApp da Playmakerz com uma mensagem pronta.

Publicado no Vercel (raiz `/`) e no GitHub Pages
(`/PFE-2026-2-Grupo-5-react-sem-agendamento/`).

### Sprint Retrospective

**O que funcionou bem**

- Dividir o site em partes independentes, cada uma em um commit e com um
  responsável.
- Instruções passo a passo para cada parte, com lint e build antes de enviar.
- Componentes reutilizados entre páginas (Hero, Passos, CabecalhoSecao,
  MosaicoFotos), o que diminuiu o código repetido.
- Centralizar o número e os links do WhatsApp em um só arquivo
  (`src/whatsapp.js`): trocar o número exige mudar uma linha só.

**O que pode melhorar**

- Várias pessoas editando o `App.jsx` aumenta o risco de conflito no `git pull`.
