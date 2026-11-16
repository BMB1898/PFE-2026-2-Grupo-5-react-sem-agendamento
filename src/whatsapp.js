// Número de WhatsApp da empresa (formato internacional, só dígitos).
// No site em HTML puro o número aparecia em vários links.
// Aqui ele fica só neste arquivo: todos os componentes importam
// a função criaLinkWhatsapp, então basta trocar o número uma vez.
export const WHATSAPP_NUMBER = "5521972657266";

// O mesmo número no formato de leitura, "(21) 97265-7266",
// montado a partir do número acima (tira o 55 do Brasil).
const ddd = WHATSAPP_NUMBER.slice(2, 4);
const numero = WHATSAPP_NUMBER.slice(4);
export const WHATSAPP_FORMATADO = `(${ddd}) ${numero.slice(0, -4)}-${numero.slice(-4)}`;

// Link que só abre a conversa, sem mensagem pronta
export const LINK_WHATSAPP = `https://wa.me/${WHATSAPP_NUMBER}`;

// Monta o link do WhatsApp com uma mensagem já escrita.
// encodeURIComponent troca espaços e acentos por códigos que podem ir na URL.
export function criaLinkWhatsapp(mensagem) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
}

// Nesta versão do site não há páginas de agendamento: os botões
// "Agendar" abrem o WhatsApp com uma destas mensagens prontas.
export const LINK_AGENDAR_ONE_TO_ONE = criaLinkWhatsapp(
  "Olá! Quero agendar uma aula experimental no One-to-One.",
);
export const LINK_AGENDAR_PKZ = criaLinkWhatsapp(
  "Olá! Quero agendar uma avaliação no PKZ.",
);
