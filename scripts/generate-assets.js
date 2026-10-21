const fs = require('fs');
const path = require('path');
const { xmlEscape, assertWellFormedSvg } = require('./lib/xml');

const projects = [
  {
    slug: 'digital-delivery',
    icon: '🖥️',
    color: '#38bdf8',
    title: 'Digital Delivery',
    isCustom: false,
    subtitle: 'Simulação Hacker • Terminal CLI • Arena 3D',
    images: [
      { name: 'cover.svg', label: 'PLACEHOLDER DE CAPA • COVER_PIC PREVIEW' },
      { name: 'gallery-01.svg', label: 'Terminal de Comando & Chaves SSH' },
      { name: 'gallery-02.svg', label: 'Arena 3D & Personagem Robótica' },
      { name: 'gallery-03.svg', label: 'Gerenciamento de Memória & Processos' },
      { name: 'gallery-04.svg', label: 'Documentação GDD & Arquitetura de Redes' }
    ]
  },
  {
    slug: 'tribunal-logico',
    icon: '⚖️',
    color: '#fbbf24',
    title: 'Tribunal Lógico',
    isCustom: false,
    subtitle: 'Point-and-Click • Advocacia & Matemática Lógica',
    images: [
      { name: 'cover.svg', label: 'PLACEHOLDER DE CAPA • COVER_PIC PREVIEW' },
      { name: 'gallery-01.svg', label: 'Cenário do Tribunal & Point-and-Click' },
      { name: 'gallery-02.svg', label: 'Confronto de Depoimentos & Evidências' },
      { name: 'gallery-03.svg', label: 'Painel de Tabela Verdade & Operadores' },
      { name: 'gallery-04.svg', label: 'Fichas de Personagens & Casos Investigativos' }
    ]
  },
  {
    slug: 'typing-defenders',
    icon: '⌨️',
    color: '#a855f7',
    title: 'Typing Defenders',
    isCustom: true,
    subtitle: 'Defesa de Torre por Digitação • Ritmo & Teclado',
    images: [
      { name: 'cover.svg', label: 'CAPA PERSONALIZADA • COVER_PIC' },
      { name: 'gallery-01.svg', label: 'Campo de Batalha & Inimigos em Hordas' },
      { name: 'gallery-02.svg', label: 'Mecânica de Teclas Simétricas no Teclado' },
      { name: 'gallery-03.svg', label: 'Batalha de Chefe & Barra de Vida em Prosa' },
      { name: 'gallery-04.svg', label: 'Painel de Precisão, Ritmo & WPM' }
    ]
  },
  {
    slug: 'little-knight',
    icon: '🗡️',
    color: '#f97316',
    title: 'Little Knight',
    isCustom: true,
    subtitle: 'RPG de Plataforma Side-Scroll • Parkour & Ação',
    images: [
      { name: 'cover.svg', label: 'CAPA PERSONALIZADA • COVER_PIC' },
      { name: 'gallery-01.svg', label: 'Fase de Plataforma & Desafio de Parkour' },
      { name: 'gallery-02.svg', label: 'Mecânica de Agilidade & Rotas Rápidas' },
      { name: 'gallery-03.svg', label: 'Combate contra Mini-Boss (Fase 3)' },
      { name: 'gallery-04.svg', label: 'Ficha de Personagem & Mapa de Biomas' }
    ]
  },
  {
    slug: 'metaghost-fantasy',
    icon: '👻',
    color: '#ec4899',
    title: 'MetaGhost Fantasy',
    isCustom: false,
    subtitle: 'RPG Tático 3D • Mansão Assombrada & Fantasmas',
    images: [
      { name: 'cover.svg', label: 'PLACEHOLDER DE CAPA • COVER_PIC PREVIEW' },
      { name: 'gallery-01.svg', label: 'Mansão Abandonada & Atmosfera 3D' },
      { name: 'gallery-02.svg', label: 'Combate Cooperativo até 4 Jogadores' },
      { name: 'gallery-03.svg', label: 'Sete Famílias de Inimigos Fantasmas' },
      { name: 'gallery-04.svg', label: 'Coleta de Ectoplasma & Forja de Armas' }
    ]
  },
  {
    slug: 'cripto-flowers',
    icon: '🌸',
    color: '#10b981',
    title: 'Cripto Flowers',
    isCustom: false,
    subtitle: 'Simulação de Fazenda • Genética & Rosas do Deserto',
    images: [
      { name: 'cover.svg', label: 'PLACEHOLDER DE CAPA • COVER_PIC PREVIEW' },
      { name: 'gallery-01.svg', label: 'Visão Top-Down da Fazenda de Rosas' },
      { name: 'gallery-02.svg', label: 'Painel Genético: Genótipo × Fenótipo' },
      { name: 'gallery-03.svg', label: 'Cuidados Diários: Luz, Água e Potes' },
      { name: 'gallery-04.svg', label: 'Ciclo de Iluminação Dia/Noite (24 min)' }
    ]
  }
];

function createSvg(p, img) {
  const isCover = img.name === 'cover.svg';
  const badgeColor = p.isCustom ? '#f97316' : '#94a3b8';
  const badgeBg = p.isCustom ? 'rgba(249, 115, 22, 0.15)' : 'rgba(148, 163, 184, 0.12)';
  const borderPattern = isCover && !p.isCustom ? 'stroke-dasharray="10 10"' : '';

  // SVG é XML: todo texto interpolado precisa ser escapado.
  const icon = xmlEscape(p.icon);
  const title = xmlEscape(p.title);
  const subtitle = xmlEscape(p.subtitle);
  const label = xmlEscape(img.label);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <defs>
    <radialGradient id="bg-${p.slug}" cx="50%" cy="40%" r="80%">
      <stop offset="0%" stop-color="#26201b"/>
      <stop offset="100%" stop-color="#141211"/>
    </radialGradient>
    <linearGradient id="accent-${p.slug}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${p.color}"/>
      <stop offset="100%" stop-color="#c8813b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="675" fill="url(#bg-${p.slug})"/>
  <rect x="40" y="40" width="1120" height="595" rx="24" fill="none" stroke="#3d352e" stroke-width="2" ${borderPattern}/>
  
  <!-- Círculo Central e Ícone -->
  <circle cx="600" cy="240" r="105" fill="rgba(200, 129, 59, 0.08)" stroke="${p.color}" stroke-width="3"/>
  <text x="600" y="272" font-size="90" text-anchor="middle" font-family="sans-serif">${icon}</text>
  
  <!-- Título do Projeto -->
  <text x="600" y="400" font-size="44" font-weight="bold" fill="#ede3d4" text-anchor="middle" font-family="Fredoka, sans-serif">${title}</text>
  <rect x="360" y="425" width="480" height="4" rx="2" fill="url(#accent-${p.slug})"/>
  
  <!-- Subtítulo / Detalhe -->
  <text x="600" y="470" font-size="22" font-weight="500" fill="${p.color}" text-anchor="middle" font-family="Fredoka, sans-serif">${isCover ? subtitle : label}</text>
  
  <!-- Badge do Tipo de Capa ou Slide -->
  <g transform="translate(600, 520)">
    <rect x="-180" y="-18" width="360" height="36" rx="18" fill="${badgeBg}" stroke="${badgeColor}" stroke-width="1.5"/>
    <text x="0" y="6" font-size="14" font-weight="bold" fill="${badgeColor}" text-anchor="middle" font-family="JetBrains Mono, monospace" letter-spacing="1.5">${label}</text>
  </g>
  
  <text x="600" y="590" font-size="14" fill="#a89f91" text-anchor="middle" font-family="JetBrains Mono, monospace">COZY DEV LAB • ATIVOS DE DESENVOLVIMENTO</text>
</svg>`;
}

projects.forEach(p => {
  const dir = path.join('assets', 'projects', p.slug);
  fs.mkdirSync(dir, { recursive: true });
  p.images.forEach(img => {
    const filePath = path.join(dir, img.name);
    const svg = createSvg(p, img);
    assertWellFormedSvg(svg, filePath);
    fs.writeFileSync(filePath, svg, 'utf8');
  });
  console.log('Created assets for', p.slug);
});
