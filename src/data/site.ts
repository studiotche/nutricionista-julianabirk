export const site = {
  name: "Juliana Birk",
  role: "Nutricionista",
  city: "Ivoti",
  state: "RS",
  region: "Ivoti e atendimento online",
  crn: "17457",
  credentials: "Nutricionista · CRN 17457",
  phoneDisplay: "(51) 99950-7010",
  phoneLink: "5551999507010",
  telLink: "tel:+5551999507010",
  instagram: "https://www.instagram.com/julibirk/",
  hours: [
    { days: "Terça a sexta", time: "09:00 às 20:00" },
    { days: "Sábado", time: "08:00 às 17:00" },
    { days: "Domingo e segunda", time: "Fechado" },
  ],
  googleProfile: "https://www.google.com/maps/place/Nutricionista+Juliana+Birk/@-29.5945068,-51.161358,17z/data=!3m1!4b1!4m6!3m5!1s0x951945e9671e0b0b:0x411aa5e6eb9347a5!8m2!3d-29.5945068!4d-51.161358!16s%2Fg%2F11xd18p__7",
  mapsEmbedUrl: "https://maps.google.com/maps?q=-29.5945068,-51.161358&z=17&hl=pt-BR&output=embed",
  mapsUrl: "https://www.google.com/maps/place/Nutricionista+Juliana+Birk/@-29.5945068,-51.161358,17z",
  seo: {
    title: "Nutricionista em Ivoti | Juliana Birk · Nutrição Funcional e Performance",
    description:
      "Nutricionista em Ivoti com abordagem funcional baseada em ciência. Emagrecimento, performance esportiva e reeducação alimentar, presencial e online.",
    url: "https://studiotche.github.io/nutricionista-julianabirk/",
    ogImage: "/images/nutricionista-ivoti-hero-juliana.webp",
  },
  hero: {
    eyebrow: "Atendimento presencial e online",
    title: "Nutricionista em Ivoti, Juliana Birk",
    titleHighlight: "Juliana Birk",
    tagline: "Nutrição funcional baseada em ciência, sem fórmulas prontas.",
    description:
      "Emagrecimento e performance esportiva com estratégia, acompanhamento individualizado e foco em resultados que fazem sentido para a sua vida.",
  },
  about: {
    eyebrow: "Olá, eu sou a Juliana!",
    title: "Nutrição funcional e performance para uma relação saudável com a comida",
    titleHighlight: "relação saudável com a comida",
    paragraphs: [
      "Meu trabalho une nutrição funcional baseada em ciência, emagrecimento e performance esportiva. Acredito que comer bem é ferramenta de saúde, energia e resultado — dentro e fora do esporte.",
      "Cada acompanhamento parte da sua história, da sua rotina e dos seus objetivos, com um plano realista, sem restrições desnecessárias e sem dietas genéricas.",
      "Esportista amadora, sei na prática como alimentação, treino e consistência caminham juntos. Vamos construir estratégias que você consiga manter.",
    ],
  },
  assets: {
    logo: "/images/logo-julianabirk.svg",
    hero: "/images/nutricionista-ivoti-hero-juliana.webp",
    heroMobile: "/images/nutricionista-ivoti-hero-juliana-mobile.webp",
    about: "/images/nutricionista-ivoti-sobre-juliana.webp",
    processBg: "/images/nutricionista-ivoti-sobre-juliana.webp",
  },
} as const;

// TODO: ajustar especialidades com a profissional antes da publicação definitiva.
export const specialties = [
  {
    number: "01",
    title: "Nutrição funcional",
    text: "Abordagem baseada em ciência que olha para o seu corpo como um todo, identificando o que funciona para você.",
    detail:
      "O trabalho considera histórico, exames, rotina e objetivos para construir um plano individualizado, sem fórmulas prontas e sem modismos.",
  },
  {
    number: "02",
    title: "Emagrecimento",
    text: "Estratégia para emagrecer com saúde, sem passar fome e sem dietas impossíveis de manter.",
    detail:
      "O foco está em hábitos sustentáveis e em uma relação saudável com a comida, com metas realistas e acompanhamento de perto.",
  },
  {
    number: "03",
    title: "Performance esportiva",
    text: "Nutrição para quem treina e quer mais energia, melhor rendimento e recuperação adequada.",
    detail:
      "Atleta ou esportista amador, o plano é montado a partir do seu esporte, do seu treino e dos seus objetivos de performance.",
  },
  {
    number: "04",
    title: "Reeducação alimentar",
    text: "Aprender a comer de um jeito novo, sem culpa, com liberdade e prazer à mesa.",
    detail:
      "O processo ajuda a organizar a rotina alimentar, priorizar alimentos de verdade e construir escolhas que você consegue manter no dia a dia.",
  },
  {
    number: "05",
    title: "Acompanhamento online",
    text: "Atendimento por videochamada com a mesma estratégia e atenção do presencial, de onde você estiver.",
    detail:
      "O acompanhamento online segue o mesmo método: avaliação completa, plano individualizado e suporte contínuo pelo WhatsApp.",
  },
] as const;

export const pillars = [
  ["Funcional", "Estratégias baseadas em ciência, construídas a partir das suas necessidades e objetivos."],
  ["Comportamental", "Atenção à rotina e aos hábitos que influenciam suas escolhas todos os dias."],
  ["Estratégico", "Um plano prático, flexível e sem restrição, feito para caber na sua vida."],
] as const;

export const locations = [
  {
    city: "Ivoti",
    address: "Avenida Presidente Lucena, 3315 · sala 302",
    district: "Centro · Ivoti/RS",
    type: "Presencial",
  },
  {
    city: "Atendimento online",
    address: "Consulta por videochamada",
    district: "De onde você estiver",
    type: "Online",
  },
] as const;

export const faqs = [
  ["Onde acontecem as consultas presenciais?", "Os atendimentos presenciais acontecem em Ivoti, na Avenida Presidente Lucena, 3315, sala 302, no Centro."],
  ["Quais os horários de atendimento?", "Os atendimentos acontecem de terça a sexta, das 09h às 20h, e aos sábados, das 08h às 17h. Domingos e segundas o consultório está fechado. Para agendar, é só chamar no WhatsApp."],
  ["É possível consultar online?", "Sim. O atendimento online permite realizar a consulta com privacidade e conforto, de onde você estiver."],
  ["Como faço para agendar?", `Clique em qualquer botão de agendamento para conversar diretamente pelo WhatsApp ${site.phoneDisplay}.`],
  ["O acompanhamento é personalizado?", "Sim. A proposta considera sua rotina, preferências, objetivos, histórico e contexto, evitando orientações genéricas."],
  // Confirmar com a profissional antes da publicação definitiva.
  ["Atende convênio?", "A consulta é particular, com emissão de nota fiscal. Você pode encaminhar a nota ao seu convênio para solicitar reembolso, conforme as regras do seu plano."],
  // Confirmar com a profissional antes da publicação definitiva.
  ["Quanto custa a primeira consulta?", "O valor da consulta é informado diretamente pelo WhatsApp. O acompanhamento e sua duração são combinados de acordo com os seus objetivos."],
  // Confirmar com a profissional antes da publicação definitiva.
  ["Como funciona a consulta online?", "A consulta online acontece por videochamada, com a mesma atenção e privacidade do atendimento presencial. Você recebe as orientações e o plano alimentar por WhatsApp ou e-mail."],
  // Confirmar com a profissional antes da publicação definitiva.
  ["Preciso levar exames na primeira consulta?", "Não é obrigatório. Se você tiver exames recentes, traga-os, eles ajudam a avaliar seu quadro. Se não tiver, o atendimento acontece normalmente."],
  // Confirmar com a profissional antes da publicação definitiva.
  ["Como funciona o primeiro atendimento?", "O primeiro atendimento é uma conversa completa: história de saúde, rotina, preferências e objetivos. A partir dela, é construído um plano realista, em etapas."],
] as const;

export const whatsappUrl = `https://wa.me/${site.phoneLink}?text=${encodeURIComponent("Olá, Nutri Juliana! Quero mais informações sobre as consultas.")}`;
