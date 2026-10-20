const fs = require('fs');
const path = require('path');

const projects = [
  {
    slug: 'digital-delivery',
    icon: '🖥️',
    color: '#38bdf8',
    title: 'Digital Delivery',
    images: [
      { name: 'cover.svg', label: 'Capa Oficial • Terminal & Arena 3D' },
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
    images: [
      { name: 'cover.svg', label: 'Capa Oficial • Advocacia & Matemática Lógica' },
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
    images: [
      { name: 'cover.svg', label: 'Capa Oficial • Defesa de Torre por Digitação' },
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
    images: [
      { name: 'cover.svg', label: 'Capa Oficial • RPG de Plataforma Side-Scroll' },
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
    images: [
      { name: 'cover.svg', label: 'Capa Oficial • Exploração 3D & Combate' },
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
    images: [
      { name: 'cover.svg', label: 'Capa Oficial • Simulação & Genética de Fazenda' },
      { name: 'gallery-01.svg', label: 'Visão Top-Down da Fazenda de Rosas' },
      { name: 'gallery-02.svg', label: 'Painel Genético: Genótipo × Fenótipo' },
      { name: 'gallery-03.svg', label: 'Cuidados Diários: Luz, Água e Potes' },
      { name: 'gallery-04.svg', label: 'Ciclo de Iluminação Dia/Noite (24 min)' }
    ]
  }
];

function createSvg(p, img) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <defs>
    <radialGradient id="bg" cx="50%" cy="40%" r="80%">
      <stop offset="0%" stop-color="#26201b"/>
      <stop offset="100%" stop-color="#141211"/>
    </radialGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${p.color}"/>
      <stop offset="100%" stop-color="#c8813b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="675" fill="url(#bg)"/>
  <rect x="40" y="40" width="1120" height="595" rx="24" fill="none" stroke="#3d352e" stroke-width="2" stroke-dasharray="8 8"/>
  <circle cx="600" cy="250" r="110" fill="rgba(200, 129, 59, 0.08)" stroke="${p.color}" stroke-width="3"/>
  <text x="600" y="280" font-size="90" text-anchor="middle" font-family="sans-serif">${p.icon}</text>
  <text x="600" y="410" font-size="44" font-weight="bold" fill="#ede3d4" text-anchor="middle" font-family="Fredoka, sans-serif">${p.title}</text>
  <rect x="350" y="445" width="500" height="4" rx="2" fill="url(#accent)"/>
  <text x="600" y="500" font-size="24" font-weight="500" fill="${p.color}" text-anchor="middle" font-family="sans-serif">${img.label}</text>
  <text x="600" y="555" font-size="16" fill="#a89f91" text-anchor="middle" font-family="JetBrains Mono, monospace">COZY DEV LAB • PREVIEW DE DESENVOLVIMENTO</text>
</svg>`;
}

projects.forEach(p => {
  const dir = path.join('assets', 'projects', p.slug);
  fs.mkdirSync(dir, { recursive: true });
  p.images.forEach(img => {
    const filePath = path.join(dir, img.name);
    fs.writeFileSync(filePath, createSvg(p, img), 'utf8');
  });
  console.log('Created assets for', p.slug);
});
