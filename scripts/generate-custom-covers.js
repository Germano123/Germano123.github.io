const fs = require('fs');
const path = require('path');

const covers = {
  'digital-delivery': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <defs>
    <radialGradient id="bg-dd" cx="50%" cy="30%" r="85%">
      <stop offset="0%" stop-color="#0f2b3e"/>
      <stop offset="60%" stop-color="#091824"/>
      <stop offset="100%" stop-color="#040b11"/>
    </radialGradient>
    <linearGradient id="cyan-glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>
    <linearGradient id="term-header" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
  </defs>

  <!-- Fundo escuro imersivo -->
  <rect width="1200" height="675" fill="url(#bg-dd)"/>

  <!-- Grade digital de perspectiva 3D -->
  <g opacity="0.18" stroke="#38bdf8" stroke-width="1.5">
    <line x1="100" y1="460" x2="1100" y2="460"/>
    <line x1="50" y1="510" x2="1150" y2="510"/>
    <line x1="0" y1="570" x2="1200" y2="570"/>
    <line x1="0" y1="640" x2="1200" y2="640"/>
    <line x1="600" y1="420" x2="150" y2="675"/>
    <line x1="600" y1="420" x2="380" y2="675"/>
    <line x1="600" y1="420" x2="600" y2="675"/>
    <line x1="600" y1="420" x2="820" y2="675"/>
    <line x1="600" y1="420" x2="1050" y2="675"/>
  </g>

  <!-- Moldura externa do cartão -->
  <rect x="36" y="36" width="1128" height="603" rx="20" fill="none" stroke="#1e3a5f" stroke-width="2"/>

  <!-- Terminal Hacker em Destaque -->
  <g transform="translate(360, 90)">
    <!-- Sombra da janela -->
    <rect x="12" y="12" width="480" height="250" rx="14" fill="#000" opacity="0.45"/>
    <!-- Janela de terminal -->
    <rect width="480" height="250" rx="14" fill="#0d1726" stroke="#38bdf8" stroke-width="2"/>
    <!-- Barra de título -->
    <path d="M0,14 Q0,0 14,0 L466,0 Q480,0 480,14 L480,36 L0,36 Z" fill="url(#term-header)"/>
    <!-- Botões da janela (mac style) -->
    <circle cx="22" cy="18" r="6" fill="#ef4444"/>
    <circle cx="40" cy="18" r="6" fill="#f59e0b"/>
    <circle cx="58" cy="18" r="6" fill="#10b981"/>
    <!-- Título do terminal -->
    <text x="240" y="23" font-size="13" font-weight="600" fill="#94a3b8" text-anchor="middle" font-family="JetBrains Mono, monospace">digital-delivery • ssh tunnel active</text>
    
    <!-- Linhas de comando simuladas -->
    <text x="25" y="72" font-size="15" fill="#38bdf8" font-family="JetBrains Mono, monospace">&gt; connect-server --port=8080 --host=lab-arena</text>
    <text x="25" y="100" font-size="13" fill="#10b981" font-family="JetBrains Mono, monospace">[OK] SSH Handshake established (2048-bit RSA)</text>
    <text x="25" y="124" font-size="13" fill="#64748b" font-family="JetBrains Mono, monospace">[INFO] Robot courier #07 loaded: payload.tar.gz (42MB)</text>
    <text x="25" y="152" font-size="15" fill="#38bdf8" font-family="JetBrains Mono, monospace">&gt; transfer-packet --target=buffer_gateway_3d</text>
    <text x="25" y="180" font-size="13" fill="#f59e0b" font-family="JetBrains Mono, monospace">[STATUS] Buffer usage: 64% | Time remaining: 00:45s</text>
    <text x="25" y="210" font-size="15" fill="#38bdf8" font-family="JetBrains Mono, monospace">&gt; <tspan fill="#38bdf8">delivery_in_progress█</tspan></text>
  </g>

  <!-- Cubo 3D de Dados / Payload Hacker flutuando à esquerda -->
  <g transform="translate(180, 200)">
    <polygon points="60,10 110,38 60,66 10,38" fill="#38bdf8" opacity="0.85"/>
    <polygon points="10,38 60,66 60,126 10,98" fill="#0284c7" opacity="0.9"/>
    <polygon points="110,38 60,66 60,126 110,98" fill="#0369a1" opacity="0.95"/>
    <circle cx="60" cy="68" r="80" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.5"/>
    <text x="60" y="150" font-size="12" font-weight="bold" fill="#38bdf8" text-anchor="middle" font-family="JetBrains Mono, monospace">PACKET #404</text>
  </g>

  <!-- Ícone de Rede / Nodes flutuando à direita -->
  <g transform="translate(940, 180)">
    <circle cx="50" cy="50" r="18" fill="#0d1726" stroke="#38bdf8" stroke-width="2"/>
    <circle cx="50" cy="50" r="8" fill="#38bdf8"/>
    <circle cx="-10" cy="110" r="14" fill="#0d1726" stroke="#10b981" stroke-width="2"/>
    <circle cx="-10" cy="110" r="6" fill="#10b981"/>
    <circle cx="110" cy="110" r="14" fill="#0d1726" stroke="#f59e0b" stroke-width="2"/>
    <circle cx="110" cy="110" r="6" fill="#f59e0b"/>
    <line x1="50" y1="50" x2="-10" y2="110" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 4"/>
    <line x1="50" y1="50" x2="110" y2="110" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 4"/>
    <text x="50" y="155" font-size="12" font-weight="bold" fill="#38bdf8" text-anchor="middle" font-family="JetBrains Mono, monospace">SOCKET MESH</text>
  </g>

  <!-- Título Oficial do Jogo -->
  <text x="600" y="415" font-size="52" font-weight="700" fill="#f8fafc" text-anchor="middle" font-family="Fredoka, sans-serif" letter-spacing="1">Digital Delivery</text>

  <!-- Linha divisória neon -->
  <rect x="360" y="435" width="480" height="4" rx="2" fill="url(#cyan-glow)"/>

  <!-- Subtítulo Temático e Mecânicas -->
  <text x="600" y="475" font-size="22" font-weight="500" fill="#38bdf8" text-anchor="middle" font-family="Fredoka, sans-serif">Simulação Hacker • Terminal CLI • Arena 3D Desacoplada</text>

  <!-- Badge Oficial de Parceria -->
  <g transform="translate(600, 525)">
    <rect x="-190" y="-18" width="380" height="36" rx="18" fill="rgba(56, 189, 248, 0.14)" stroke="#38bdf8" stroke-width="1.8"/>
    <text x="0" y="6" font-size="14" font-weight="bold" fill="#38bdf8" text-anchor="middle" font-family="JetBrains Mono, monospace" letter-spacing="1.2">🤝 PARCERIA COM AQUELE PROFESSOR</text>
  </g>

  <!-- Rodapé Cozy Lab -->
  <text x="600" y="595" font-size="14" fill="#64748b" text-anchor="middle" font-family="JetBrains Mono, monospace">COZY DEVELOPER LABORATORY • GAMEPLAY &amp; SYSTEMS ARCHITECTURE</text>
</svg>`,

  'typing-defenders': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <defs>
    <radialGradient id="bg-td" cx="50%" cy="30%" r="85%">
      <stop offset="0%" stop-color="#281145"/>
      <stop offset="60%" stop-color="#18072e"/>
      <stop offset="100%" stop-color="#0b0316"/>
    </radialGradient>
    <linearGradient id="purple-glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#c084fc"/>
      <stop offset="100%" stop-color="#7c3aed"/>
    </linearGradient>
    <linearGradient id="key-cap" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3b1d64"/>
      <stop offset="100%" stop-color="#1e0c35"/>
    </linearGradient>
  </defs>

  <!-- Fundo cósmico roxo -->
  <rect width="1200" height="675" fill="url(#bg-td)"/>

  <!-- Estrelas e partículas de digitação no céu -->
  <g fill="#c084fc" opacity="0.4">
    <circle cx="150" cy="120" r="2"/>
    <circle cx="280" cy="80" r="1.5"/>
    <circle cx="420" cy="140" r="2"/>
    <circle cx="780" cy="110" r="2.5"/>
    <circle cx="950" cy="90" r="1.5"/>
    <circle cx="1060" cy="160" r="2"/>
    <circle cx="200" cy="240" r="1.5"/>
    <circle cx="1000" cy="230" r="2"/>
  </g>

  <!-- Moldura externa do cartão -->
  <rect x="36" y="36" width="1128" height="603" rx="20" fill="none" stroke="#4c1d95" stroke-width="2"/>

  <!-- Lasers de Digitação e Defesa disparando para cima -->
  <g stroke-width="3" opacity="0.75">
    <line x1="380" y1="260" x2="260" y2="80" stroke="#f43f5e" stroke-dasharray="8 6"/>
    <line x1="500" y1="260" x2="480" y2="70" stroke="#c084fc" stroke-dasharray="10 5"/>
    <line x1="700" y1="260" x2="720" y2="70" stroke="#c084fc" stroke-dasharray="10 5"/>
    <line x1="820" y1="260" x2="940" y2="80" stroke="#f43f5e" stroke-dasharray="8 6"/>
  </g>

  <!-- Inimigos sendo destruídos no topo -->
  <g transform="translate(240, 65)">
    <polygon points="20,0 40,15 30,35 10,35 0,15" fill="#f43f5e" opacity="0.9"/>
    <text x="20" y="24" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle" font-family="JetBrains Mono, monospace">A</text>
  </g>
  <g transform="translate(920, 65)">
    <polygon points="20,0 40,15 30,35 10,35 0,15" fill="#f43f5e" opacity="0.9"/>
    <text x="20" y="24" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle" font-family="JetBrains Mono, monospace">Ç</text>
  </g>

  <!-- Teclado Mecânico Estilizado Central (Teclas Simétricas) -->
  <g transform="translate(320, 150)">
    <!-- Base do teclado -->
    <rect x="-10" y="70" width="580" height="110" rx="16" fill="#130724" stroke="#7c3aed" stroke-width="2"/>
    <rect x="0" y="80" width="560" height="90" rx="12" fill="#1c0d33"/>

    <!-- Linha de Teclas Simétricas da Esquerda (Mão Esquerda) -->
    <g transform="translate(30, 95)">
      <rect x="0" y="0" width="50" height="50" rx="8" fill="url(#key-cap)" stroke="#a855f7" stroke-width="2"/>
      <text x="25" y="32" font-size="20" font-weight="bold" fill="#f8fafc" text-anchor="middle" font-family="Fredoka, sans-serif">A</text>
    </g>
    <g transform="translate(90, 95)">
      <rect x="0" y="0" width="50" height="50" rx="8" fill="url(#key-cap)" stroke="#a855f7" stroke-width="2"/>
      <text x="25" y="32" font-size="20" font-weight="bold" fill="#f8fafc" text-anchor="middle" font-family="Fredoka, sans-serif">S</text>
    </g>
    <g transform="translate(150, 95)">
      <rect x="0" y="0" width="50" height="50" rx="8" fill="url(#key-cap)" stroke="#a855f7" stroke-width="2"/>
      <text x="25" y="32" font-size="20" font-weight="bold" fill="#f8fafc" text-anchor="middle" font-family="Fredoka, sans-serif">D</text>
    </g>
    <g transform="translate(210, 95)">
      <rect x="0" y="0" width="50" height="50" rx="8" fill="#7c3aed" stroke="#c084fc" stroke-width="2"/>
      <text x="25" y="32" font-size="20" font-weight="bold" fill="#fff" text-anchor="middle" font-family="Fredoka, sans-serif">F</text>
    </g>

    <!-- Divisor Central com Escudo de Defesa -->
    <circle cx="280" cy="120" r="18" fill="#130724" stroke="#c084fc" stroke-width="2"/>
    <text x="280" y="127" font-size="18" text-anchor="middle">🛡️</text>

    <!-- Linha de Teclas Simétricas da Direita (Mão Direita) -->
    <g transform="translate(300, 95)">
      <rect x="0" y="0" width="50" height="50" rx="8" fill="#7c3aed" stroke="#c084fc" stroke-width="2"/>
      <text x="25" y="32" font-size="20" font-weight="bold" fill="#fff" text-anchor="middle" font-family="Fredoka, sans-serif">J</text>
    </g>
    <g transform="translate(360, 95)">
      <rect x="0" y="0" width="50" height="50" rx="8" fill="url(#key-cap)" stroke="#a855f7" stroke-width="2"/>
      <text x="25" y="32" font-size="20" font-weight="bold" fill="#f8fafc" text-anchor="middle" font-family="Fredoka, sans-serif">K</text>
    </g>
    <g transform="translate(420, 95)">
      <rect x="0" y="0" width="50" height="50" rx="8" fill="url(#key-cap)" stroke="#a855f7" stroke-width="2"/>
      <text x="25" y="32" font-size="20" font-weight="bold" fill="#f8fafc" text-anchor="middle" font-family="Fredoka, sans-serif">L</text>
    </g>
    <g transform="translate(480, 95)">
      <rect x="0" y="0" width="50" height="50" rx="8" fill="url(#key-cap)" stroke="#a855f7" stroke-width="2"/>
      <text x="25" y="32" font-size="20" font-weight="bold" fill="#f8fafc" text-anchor="middle" font-family="Fredoka, sans-serif">Ç</text>
    </g>
  </g>

  <!-- Telemetria Flutuante WPM & Precisão -->
  <g transform="translate(140, 160)">
    <rect width="130" height="60" rx="10" fill="#130724" stroke="#a855f7" stroke-width="1.5"/>
    <text x="65" y="28" font-size="12" fill="#a855f7" font-weight="600" text-anchor="middle" font-family="JetBrains Mono, monospace">VELOCIDADE</text>
    <text x="65" y="50" font-size="18" font-weight="bold" fill="#fff" text-anchor="middle" font-family="Fredoka, sans-serif">115 WPM</text>
  </g>
  <g transform="translate(930, 160)">
    <rect width="130" height="60" rx="10" fill="#130724" stroke="#10b981" stroke-width="1.5"/>
    <text x="65" y="28" font-size="12" fill="#10b981" font-weight="600" text-anchor="middle" font-family="JetBrains Mono, monospace">PRECISÃO</text>
    <text x="65" y="50" font-size="18" font-weight="bold" fill="#fff" text-anchor="middle" font-family="Fredoka, sans-serif">99.4%</text>
  </g>

  <!-- Título Oficial do Jogo -->
  <text x="600" y="415" font-size="52" font-weight="700" fill="#f8fafc" text-anchor="middle" font-family="Fredoka, sans-serif" letter-spacing="1">Typing Defenders</text>

  <!-- Linha divisória neon -->
  <rect x="360" y="435" width="480" height="4" rx="2" fill="url(#purple-glow)"/>

  <!-- Subtítulo Temático e Mecânicas -->
  <text x="600" y="475" font-size="22" font-weight="500" fill="#c084fc" text-anchor="middle" font-family="Fredoka, sans-serif">Defesa de Torre por Digitação • Teclas Simétricas &amp; Ritmo</text>

  <!-- Badge Oficial de Parceria -->
  <g transform="translate(600, 525)">
    <rect x="-190" y="-18" width="380" height="36" rx="18" fill="rgba(168, 85, 247, 0.16)" stroke="#a855f7" stroke-width="1.8"/>
    <text x="0" y="6" font-size="14" font-weight="bold" fill="#c084fc" text-anchor="middle" font-family="JetBrains Mono, monospace" letter-spacing="1.2">🤝 PARCERIA COM AQUELE PROFESSOR</text>
  </g>

  <!-- Rodapé Cozy Lab -->
  <text x="600" y="595" font-size="14" fill="#7e22ce" text-anchor="middle" font-family="JetBrains Mono, monospace">COZY DEVELOPER LABORATORY • GAMEPLAY &amp; SYSTEMS ARCHITECTURE</text>
</svg>`,

  'little-knight': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <defs>
    <radialGradient id="bg-lk" cx="50%" cy="30%" r="85%">
      <stop offset="0%" stop-color="#3b1d11"/>
      <stop offset="60%" stop-color="#241008"/>
      <stop offset="100%" stop-color="#120603"/>
    </radialGradient>
    <linearGradient id="orange-glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fb923c"/>
      <stop offset="100%" stop-color="#ea580c"/>
    </linearGradient>
    <linearGradient id="grass-plat" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#22c55e"/>
      <stop offset="15%" stop-color="#16a34a"/>
      <stop offset="100%" stop-color="#78350f"/>
    </linearGradient>
  </defs>

  <!-- Fundo acolhedor crepúsculo -->
  <rect width="1200" height="675" fill="url(#bg-lk)"/>

  <!-- Lua crescente e montanhas distantes -->
  <g opacity="0.35">
    <circle cx="950" cy="110" r="45" fill="#fef08a"/>
    <circle cx="965" cy="105" r="40" fill="#241008"/>
    <!-- Silhueta de montanhas -->
    <polygon points="100,280 300,160 500,280" fill="#1e1017"/>
    <polygon points="400,280 650,130 900,280" fill="#2a151f"/>
    <polygon points="800,280 1000,170 1200,280" fill="#1e1017"/>
  </g>

  <!-- Moldura externa do cartão -->
  <rect x="36" y="36" width="1128" height="603" rx="20" fill="none" stroke="#7c2d12" stroke-width="2"/>

  <!-- Plataforma Flutuante Central -->
  <g transform="translate(360, 230)">
    <!-- Base da ilha flutuante -->
    <path d="M20,0 L460,0 L440,30 L400,60 L240,75 L80,60 L40,30 Z" fill="url(#grass-plat)" stroke="#15803d" stroke-width="2"/>
    <!-- Detalhes de grama pendente -->
    <path d="M40,0 L45,12 L50,0 M120,0 L126,16 L132,0 M320,0 L325,14 L330,0 M420,0 L424,10 L428,0" stroke="#86efac" stroke-width="2.5"/>
  </g>

  <!-- O Pequeno Cavaleiro (Little Knight) no centro da plataforma -->
  <g transform="translate(540, 100)">
    <!-- Aura calorosa do herói -->
    <circle cx="60" cy="70" r="65" fill="rgba(249, 115, 22, 0.15)"/>
    
    <!-- Capa esvoaçante laranja -->
    <path d="M40,55 Q10,75 5,115 Q35,100 55,80 Z" fill="#ea580c"/>
    <path d="M45,55 Q20,80 18,125 Q45,105 60,85 Z" fill="#f97316"/>

    <!-- Corpo com Armadura de Escudeiro -->
    <rect x="42" y="50" width="36" height="45" rx="8" fill="#475569" stroke="#94a3b8" stroke-width="1.5"/>
    <!-- Cinto e fivela dourada -->
    <rect x="40" y="75" width="40" height="8" rx="2" fill="#78350f"/>
    <rect x="56" y="73" width="8" height="12" rx="2" fill="#fbbf24"/>

    <!-- Botas -->
    <rect x="44" y="95" width="14" height="18" rx="4" fill="#334155"/>
    <rect x="62" y="95" width="14" height="18" rx="4" fill="#334155"/>

    <!-- Elmo de Cavaleiro -->
    <circle cx="60" cy="38" r="22" fill="#64748b" stroke="#cbd5e1" stroke-width="2"/>
    <!-- Visor brilhante (olhos determinados) -->
    <rect x="50" y="32" width="22" height="6" rx="3" fill="#0f172a"/>
    <circle cx="56" cy="35" r="2" fill="#38bdf8"/>
    <circle cx="66" cy="35" r="2" fill="#38bdf8"/>
    <!-- Penacho do elmo -->
    <path d="M60,16 Q65,0 80,-4 Q72,12 62,18 Z" fill="#f97316"/>

    <!-- Escudo redondo de madeira com reforço de ferro -->
    <g transform="translate(15, 50)">
      <circle cx="16" cy="20" r="18" fill="#92400e" stroke="#cbd5e1" stroke-width="2"/>
      <circle cx="16" cy="20" r="12" fill="#78350f"/>
      <!-- Brasão no escudo -->
      <polygon points="16,10 22,17 19,25 13,25 10,17" fill="#fbbf24"/>
    </g>

    <!-- Espada reluzente erguida -->
    <g transform="translate(85, 30) rotate(25)">
      <!-- Lâmina -->
      <polygon points="4,0 8,-50 12,0" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
      <!-- Guarda e empunhadura -->
      <rect x="-4" y="0" width="24" height="5" rx="2" fill="#fbbf24"/>
      <rect x="6" y="5" width="4" height="12" rx="1" fill="#78350f"/>
      <circle cx="8" cy="19" r="4" fill="#fbbf24"/>
      <!-- Brilho na ponta da lâmina -->
      <polygon points="8,-55 10,-48 8,-42 6,-48" fill="#fff"/>
    </g>
  </g>

  <!-- Orbes de luz / colecionáveis de parkour flutuando -->
  <g transform="translate(260, 180)">
    <circle cx="20" cy="20" r="12" fill="rgba(251, 191, 36, 0.25)"/>
    <circle cx="20" cy="20" r="6" fill="#fef08a"/>
    <text x="20" y="46" font-size="12" font-weight="bold" fill="#fbbf24" text-anchor="middle" font-family="JetBrains Mono, monospace">AGILITY</text>
  </g>
  <g transform="translate(900, 180)">
    <circle cx="20" cy="20" r="12" fill="rgba(249, 115, 22, 0.25)"/>
    <circle cx="20" cy="20" r="6" fill="#fdba74"/>
    <text x="20" y="46" font-size="12" font-weight="bold" fill="#f97316" text-anchor="middle" font-family="JetBrains Mono, monospace">PARKOUR</text>
  </g>

  <!-- Título Oficial do Jogo -->
  <text x="600" y="415" font-size="52" font-weight="700" fill="#f8fafc" text-anchor="middle" font-family="Fredoka, sans-serif" letter-spacing="1">Little Knight</text>

  <!-- Linha divisória neon -->
  <rect x="360" y="435" width="480" height="4" rx="2" fill="url(#orange-glow)"/>

  <!-- Subtítulo Temático e Mecânicas -->
  <text x="600" y="475" font-size="22" font-weight="500" fill="#fb923c" text-anchor="middle" font-family="Fredoka, sans-serif">RPG de Plataforma Side-Scroll • Combate Ágil &amp; Parkour Preciso</text>

  <!-- Badge Oficial de Autoria Pessoal -->
  <g transform="translate(600, 525)">
    <rect x="-170" y="-18" width="340" height="36" rx="18" fill="rgba(249, 115, 22, 0.16)" stroke="#f97316" stroke-width="1.8"/>
    <text x="0" y="6" font-size="14" font-weight="bold" fill="#fb923c" text-anchor="middle" font-family="JetBrains Mono, monospace" letter-spacing="1.2">👤 PROJETO AUTORAL INDIE</text>
  </g>

  <!-- Rodapé Cozy Lab -->
  <text x="600" y="595" font-size="14" fill="#9a3412" text-anchor="middle" font-family="JetBrains Mono, monospace">COZY DEVELOPER LABORATORY • GAME FEEL &amp; 2D PLATFORMING</text>
</svg>`,

  'tribunal-logico': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <defs>
    <radialGradient id="bg-tl" cx="50%" cy="30%" r="85%">
      <stop offset="0%" stop-color="#33240e"/>
      <stop offset="60%" stop-color="#1f1406"/>
      <stop offset="100%" stop-color="#0e0802"/>
    </radialGradient>
    <linearGradient id="gold-glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fde047"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
    <linearGradient id="wood-desk" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#542e12"/>
      <stop offset="100%" stop-color="#2c1405"/>
    </linearGradient>
  </defs>

  <!-- Fundo amadeirado do tribunal -->
  <rect width="1200" height="675" fill="url(#bg-tl)"/>

  <!-- Silhueta das colunas do tribunal ao fundo -->
  <g opacity="0.15" fill="#fde047">
    <rect x="180" y="50" width="40" height="300" rx="4"/>
    <rect x="340" y="50" width="40" height="300" rx="4"/>
    <rect x="820" y="50" width="40" height="300" rx="4"/>
    <rect x="980" y="50" width="40" height="300" rx="4"/>
    <rect x="150" y="340" width="100" height="20" rx="4"/>
    <rect x="310" y="340" width="100" height="20" rx="4"/>
    <rect x="790" y="340" width="100" height="20" rx="4"/>
    <rect x="950" y="340" width="100" height="20" rx="4"/>
  </g>

  <!-- Moldura externa do cartão -->
  <rect x="36" y="36" width="1128" height="603" rx="20" fill="none" stroke="#78350f" stroke-width="2"/>

  <!-- Balança da Justiça Dourada Central -->
  <g transform="translate(600, 160)">
    <!-- Haste central da balança -->
    <rect x="-6" y="0" width="12" height="120" rx="4" fill="url(#gold-glow)"/>
    <circle cx="0" cy="0" r="14" fill="#fef08a" stroke="#b45309" stroke-width="2"/>
    <!-- Base da balança -->
    <polygon points="-50,130 50,130 35,115 -35,115" fill="url(#gold-glow)"/>

    <!-- Braço horizontal articulado -->
    <rect x="-140" y="-4" width="280" height="8" rx="4" fill="url(#gold-glow)"/>

    <!-- Prato Esquerdo (Proposição P - Verdadeiro) -->
    <g transform="translate(-120, 0)">
      <line x1="0" y1="4" x2="-25" y2="60" stroke="#fef08a" stroke-width="1.5"/>
      <line x1="0" y1="4" x2="25" y2="60" stroke="#fef08a" stroke-width="1.5"/>
      <path d="M-35,60 Q0,75 35,60 Z" fill="#b45309" stroke="#fef08a" stroke-width="1.5"/>
      <!-- Símbolo lógico V -->
      <circle cx="0" cy="46" r="12" fill="#10b981"/>
      <text x="0" y="51" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle" font-family="JetBrains Mono, monospace">V</text>
    </g>

    <!-- Prato Direito (Proposição Q - Falso / Contradição) -->
    <g transform="translate(120, -10)">
      <line x1="0" y1="4" x2="-25" y2="60" stroke="#fef08a" stroke-width="1.5"/>
      <line x1="0" y1="4" x2="25" y2="60" stroke="#fef08a" stroke-width="1.5"/>
      <path d="M-35,60 Q0,75 35,60 Z" fill="#b45309" stroke="#fef08a" stroke-width="1.5"/>
      <!-- Símbolo lógico F -->
      <circle cx="0" cy="46" r="12" fill="#ef4444"/>
      <text x="0" y="51" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle" font-family="JetBrains Mono, monospace">F</text>
    </g>
  </g>

  <!-- Martelo do Juiz (Gavel) flutuando à esquerda -->
  <g transform="translate(230, 160) rotate(-25)">
    <!-- Base de som -->
    <ellipse cx="60" cy="110" rx="35" ry="12" fill="#2c1405" stroke="#92400e" stroke-width="2"/>
    <!-- Martelo -->
    <rect x="54" y="20" width="12" height="75" rx="3" fill="#b45309" stroke="#78350f" stroke-width="1.5"/>
    <rect x="30" y="10" width="60" height="24" rx="4" fill="#92400e" stroke="#fbbf24" stroke-width="2"/>
    <rect x="42" y="8" width="36" height="28" rx="2" fill="none" stroke="#fef08a" stroke-width="1.5"/>
    <!-- Brilho de impacto -->
    <circle cx="60" cy="105" r="22" fill="none" stroke="#fef08a" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.6"/>
  </g>

  <!-- Pergaminho de Tabela Verdade à direita -->
  <g transform="translate(870, 130)">
    <!-- Pergaminho -->
    <rect width="130" height="150" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
    <text x="65" y="25" font-size="12" font-weight="bold" fill="#78350f" text-anchor="middle" font-family="JetBrains Mono, monospace">PROPOSIÇÃO</text>
    <line x1="15" y1="35" x2="115" y2="35" stroke="#b45309" stroke-width="1.5"/>
    <!-- Fórmulas -->
    <text x="25" y="58" font-size="14" font-weight="bold" fill="#1e293b" font-family="JetBrains Mono, monospace">P ∧ Q ≡ V</text>
    <text x="25" y="85" font-size="14" font-weight="bold" fill="#1e293b" font-family="JetBrains Mono, monospace">P → Q ≡ ?</text>
    <text x="25" y="112" font-size="14" font-weight="bold" fill="#dc2626" font-family="JetBrains Mono, monospace">¬(P ∨ Q)</text>
    <rect x="20" y="124" width="90" height="18" rx="4" fill="#10b981"/>
    <text x="65" y="137" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle" font-family="JetBrains Mono, monospace">PROVA REAL</text>
  </g>

  <!-- Título Oficial do Jogo -->
  <text x="600" y="415" font-size="52" font-weight="700" fill="#f8fafc" text-anchor="middle" font-family="Fredoka, sans-serif" letter-spacing="1">Tribunal Lógico</text>

  <!-- Linha divisória neon -->
  <rect x="360" y="435" width="480" height="4" rx="2" fill="url(#gold-glow)"/>

  <!-- Subtítulo Temático e Mecânicas -->
  <text x="600" y="475" font-size="22" font-weight="500" fill="#fde047" text-anchor="middle" font-family="Fredoka, sans-serif">Point-and-Click Investigativo • Lógica Matemática &amp; Argumentação</text>

  <!-- Badge Oficial de Parceria -->
  <g transform="translate(600, 525)">
    <rect x="-190" y="-18" width="380" height="36" rx="18" fill="rgba(251, 191, 36, 0.16)" stroke="#f59e0b" stroke-width="1.8"/>
    <text x="0" y="6" font-size="14" font-weight="bold" fill="#fde047" text-anchor="middle" font-family="JetBrains Mono, monospace" letter-spacing="1.2">🤝 PARCERIA COM AQUELE PROFESSOR</text>
  </g>

  <!-- Rodapé Cozy Lab -->
  <text x="600" y="595" font-size="14" fill="#b45309" text-anchor="middle" font-family="JetBrains Mono, monospace">COZY DEVELOPER LABORATORY • GAMEPLAY &amp; DEDUCTIVE PUZZLES</text>
</svg>`,

  'metaghost-fantasy': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <defs>
    <radialGradient id="bg-mg" cx="50%" cy="30%" r="85%">
      <stop offset="0%" stop-color="#2d123b"/>
      <stop offset="60%" stop-color="#190724"/>
      <stop offset="100%" stop-color="#0a0210"/>
    </radialGradient>
    <linearGradient id="pink-glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f472b6"/>
      <stop offset="100%" stop-color="#db2777"/>
    </linearGradient>
  </defs>

  <!-- Fundo mansão assombrada -->
  <rect width="1200" height="675" fill="url(#bg-mg)"/>

  <!-- Grade tática isométrica no chão -->
  <g opacity="0.25" stroke="#f472b6" stroke-width="1.5">
    <path d="M600,230 L780,290 L600,350 L420,290 Z" fill="rgba(244, 114, 182, 0.05)"/>
    <path d="M420,290 L600,350 L420,410 L240,350 Z" fill="rgba(244, 114, 182, 0.03)"/>
    <path d="M780,290 L960,350 L780,410 L600,350 Z" fill="rgba(244, 114, 182, 0.03)"/>
  </g>

  <!-- Moldura externa do cartão -->
  <rect x="36" y="36" width="1128" height="603" rx="20" fill="none" stroke="#831843" stroke-width="2"/>

  <!-- Mansão Assombrada Estilizada Central -->
  <g transform="translate(480, 80)">
    <!-- Silhueta da mansão -->
    <path d="M40,190 L40,110 L80,70 L120,70 L120,30 L150,0 L180,30 L180,70 L200,70 L240,110 L240,190 Z" fill="#1e102a" stroke="#db2777" stroke-width="2"/>
    <!-- Torre com telhado gótico -->
    <polygon points="120,30 150,-10 180,30" fill="#3b1d4a" stroke="#f472b6" stroke-width="1.5"/>
    
    <!-- Janelas em arco iluminadas (luz fantasmagórica) -->
    <path d="M70,120 A15,15 0 0,1 100,120 L100,145 L70,145 Z" fill="#fef08a" opacity="0.85"/>
    <path d="M140,50 A10,10 0 0,1 160,50 L160,70 L140,70 Z" fill="#a7f3d0" opacity="0.9"/>
    <path d="M180,120 A15,15 0 0,1 210,120 L210,145 L180,145 Z" fill="#fef08a" opacity="0.85"/>

    <!-- Porta principal da mansão -->
    <path d="M125,190 L125,160 A15,15 0 0,1 155,160 L155,190 Z" fill="#0f0717" stroke="#db2777" stroke-width="1.5"/>
  </g>

  <!-- Fantasminhas amigáveis flutuando (MetaGhosts) -->
  <g transform="translate(260, 130)">
    <!-- Fantasma 1 (Rosa Espectral) -->
    <path d="M40,30 C40,10 70,10 70,30 C70,55 80,65 75,75 C70,70 65,75 60,70 C55,75 50,70 45,75 C40,65 40,55 40,30 Z" fill="rgba(244, 114, 182, 0.85)" stroke="#fff" stroke-width="1.5"/>
    <!-- Olhos fofos -->
    <circle cx="50" cy="35" r="3.5" fill="#1e102a"/>
    <circle cx="62" cy="35" r="3.5" fill="#1e102a"/>
    <ellipse cx="56" cy="44" rx="4" ry="3" fill="#1e102a"/>
    <!-- Brilho ao redor -->
    <circle cx="55" cy="40" r="35" fill="none" stroke="#f472b6" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.5"/>
    <text x="55" y="100" font-size="12" font-weight="bold" fill="#f472b6" text-anchor="middle" font-family="JetBrains Mono, monospace">CO-OP GHOST</text>
  </g>

  <g transform="translate(860, 130)">
    <!-- Frasco de Ectoplasma -->
    <rect x="35" y="30" width="40" height="60" rx="8" fill="#134e4a" stroke="#2dd4bf" stroke-width="2"/>
    <rect x="45" y="18" width="20" height="12" rx="3" fill="#78350f" stroke="#d97706" stroke-width="1.5"/>
    <!-- Líquido de ectoplasma borbulhante -->
    <path d="M37,55 Q55,48 73,55 L73,88 Q55,90 37,88 Z" fill="#2dd4bf" opacity="0.85"/>
    <circle cx="48" cy="68" r="3" fill="#fff" opacity="0.8"/>
    <circle cx="62" cy="62" r="2" fill="#fff" opacity="0.8"/>
    <circle cx="55" cy="78" r="2.5" fill="#fff" opacity="0.8"/>
    <text x="55" y="115" font-size="12" font-weight="bold" fill="#2dd4bf" text-anchor="middle" font-family="JetBrains Mono, monospace">ECTOPLASMA</text>
  </g>

  <!-- Título Oficial do Jogo -->
  <text x="600" y="415" font-size="52" font-weight="700" fill="#f8fafc" text-anchor="middle" font-family="Fredoka, sans-serif" letter-spacing="1">MetaGhost Fantasy</text>

  <!-- Linha divisória neon -->
  <rect x="360" y="435" width="480" height="4" rx="2" fill="url(#pink-glow)"/>

  <!-- Subtítulo Temático e Mecânicas -->
  <text x="600" y="475" font-size="22" font-weight="500" fill="#f472b6" text-anchor="middle" font-family="Fredoka, sans-serif">RPG Tático em Turnos 3D • Mansão Assombrada &amp; Combate Co-op</text>

  <!-- Badge Oficial de Autoria Pessoal -->
  <g transform="translate(600, 525)">
    <rect x="-170" y="-18" width="340" height="36" rx="18" fill="rgba(244, 114, 182, 0.16)" stroke="#ec4899" stroke-width="1.8"/>
    <text x="0" y="6" font-size="14" font-weight="bold" fill="#f472b6" text-anchor="middle" font-family="JetBrains Mono, monospace" letter-spacing="1.2">👤 PROJETO AUTORAL INDIE</text>
  </g>

  <!-- Rodapé Cozy Lab -->
  <text x="600" y="595" font-size="14" fill="#9d174d" text-anchor="middle" font-family="JetBrains Mono, monospace">COZY DEVELOPER LABORATORY • TURN-BASED TACTICS &amp; 3D SYSTEMS</text>
</svg>`,

  'cripto-flowers': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <defs>
    <radialGradient id="bg-cf" cx="50%" cy="30%" r="85%">
      <stop offset="0%" stop-color="#0d3326"/>
      <stop offset="60%" stop-color="#071f16"/>
      <stop offset="100%" stop-color="#030d09"/>
    </radialGradient>
    <linearGradient id="green-glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399"/>
      <stop offset="100%" stop-color="#059669"/>
    </linearGradient>
    <linearGradient id="pot-clay" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#c2410c"/>
      <stop offset="100%" stop-color="#7c2d12"/>
    </linearGradient>
  </defs>

  <!-- Fundo estufa botânica relaxante -->
  <rect width="1200" height="675" fill="url(#bg-cf)"/>

  <!-- Feixes de luz solar entrando na estufa -->
  <g opacity="0.12" fill="#fef08a">
    <polygon points="100,0 250,0 450,550 200,550"/>
    <polygon points="750,0 900,0 1100,550 850,550"/>
  </g>

  <!-- Moldura externa do cartão -->
  <rect x="36" y="36" width="1128" height="603" rx="20" fill="none" stroke="#065f46" stroke-width="2"/>

  <!-- Rosa do Deserto no Pote Central (Adenium obesum) -->
  <g transform="translate(600, 120)">
    <!-- Aura de crescimento natural -->
    <circle cx="0" cy="80" r="85" fill="rgba(52, 211, 153, 0.12)"/>

    <!-- Pote de cerâmica/terracota -->
    <path d="M-45,130 L-35,190 L35,190 L45,130 Z" fill="url(#pot-clay)" stroke="#ea580c" stroke-width="2"/>
    <ellipse cx="0" cy="130" rx="48" ry="12" fill="#9a3412" stroke="#ea580c" stroke-width="2"/>
    <!-- Terra fértil -->
    <ellipse cx="0" cy="130" rx="42" ry="9" fill="#271306"/>

    <!-- Caule escultural gordinho (Caudex) da Rosa do Deserto -->
    <path d="M-18,130 C-35,100 -25,60 -10,40 C-5,35 5,35 10,40 C25,60 35,100 18,130 Z" fill="#573a21" stroke="#3b2513" stroke-width="2"/>

    <!-- Raízes elevadas visíveis sobre a terra -->
    <path d="M-15,120 Q-28,125 -32,132 M15,120 Q28,125 32,132" stroke="#3b2513" stroke-width="3" fill="none"/>

    <!-- Galhos com brotos verdes -->
    <path d="M-8,50 Q-30,30 -35,10 M8,50 Q30,30 35,10 M0,40 Q0,15 0,-5" stroke="#15803d" stroke-width="3.5" fill="none"/>
    
    <!-- Folhas suculentas -->
    <ellipse cx="-38" cy="12" rx="10" ry="5" transform="rotate(-30, -38, 12)" fill="#22c55e" stroke="#16a34a" stroke-width="1.5"/>
    <ellipse cx="38" cy="12" rx="10" ry="5" transform="rotate(30, 38, 12)" fill="#22c55e" stroke="#16a34a" stroke-width="1.5"/>
    <ellipse cx="0" cy="-6" rx="8" ry="12" fill="#22c55e" stroke="#16a34a" stroke-width="1.5"/>

    <!-- Flor vibrante de Rosa do Deserto (Pétalas Rosa com centro claro) -->
    <g transform="translate(0, -10)">
      <circle cx="-16" cy="-8" r="14" fill="#fb7185"/>
      <circle cx="16" cy="-8" r="14" fill="#fb7185"/>
      <circle cx="-10" cy="14" r="14" fill="#f43f5e"/>
      <circle cx="10" cy="14" r="14" fill="#f43f5e"/>
      <circle cx="0" cy="-18" r="14" fill="#fb7185"/>
      <!-- Miolo da flor -->
      <circle cx="0" cy="0" r="9" fill="#fef08a" stroke="#f43f5e" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="4" fill="#fbbf24"/>
    </g>
  </g>

  <!-- Hélice de DNA / Genótipo à esquerda -->
  <g transform="translate(230, 130)">
    <rect width="130" height="150" rx="10" fill="#062e20" stroke="#10b981" stroke-width="1.5"/>
    <text x="65" y="26" font-size="12" font-weight="bold" fill="#34d399" text-anchor="middle" font-family="JetBrains Mono, monospace">GENÓTIPO DNA</text>
    <line x1="15" y1="36" x2="115" y2="36" stroke="#10b981" stroke-width="1.5"/>
    <!-- Simulação da fita de DNA -->
    <path d="M35,50 Q65,65 95,50 Q65,80 35,95 Q65,110 95,125" stroke="#34d399" stroke-width="2" fill="none"/>
    <path d="M95,50 Q65,65 35,50 Q65,80 95,95 Q65,110 35,125" stroke="#f43f5e" stroke-width="2" fill="none"/>
    <!-- Marcadores de nucleotídeos -->
    <line x1="45" y1="56" x2="85" y2="56" stroke="#fef08a" stroke-width="2"/>
    <line x1="42" y1="87" x2="88" y2="87" stroke="#38bdf8" stroke-width="2"/>
    <line x1="45" y1="118" x2="85" y2="118" stroke="#fef08a" stroke-width="2"/>
  </g>

  <!-- Telemetria de Cuidados Botânicos à direita -->
  <g transform="translate(860, 130)">
    <rect width="140" height="150" rx="10" fill="#062e20" stroke="#34d399" stroke-width="1.5"/>
    <text x="70" y="26" font-size="12" font-weight="bold" fill="#34d399" text-anchor="middle" font-family="JetBrains Mono, monospace">CICLO DE CUIDADO</text>
    <line x1="15" y1="36" x2="125" y2="36" stroke="#10b981" stroke-width="1.5"/>
    <!-- Status dos cuidados -->
    <text x="25" y="60" font-size="13" fill="#fef08a" font-family="Fredoka, sans-serif">☀️ Luz: 8.5h/dia</text>
    <text x="25" y="86" font-size="13" fill="#38bdf8" font-family="Fredoka, sans-serif">💧 Água: Equilibrada</text>
    <text x="25" y="112" font-size="13" fill="#34d399" font-family="Fredoka, sans-serif">🌱 Pote: Raiz Média</text>
    <text x="25" y="136" font-size="11" font-weight="bold" fill="#a7f3d0" font-family="JetBrains Mono, monospace">1 DIA = 24 MIN</text>
  </g>

  <!-- Título Oficial do Jogo -->
  <text x="600" y="415" font-size="52" font-weight="700" fill="#f8fafc" text-anchor="middle" font-family="Fredoka, sans-serif" letter-spacing="1">Cripto Flowers</text>

  <!-- Linha divisória neon -->
  <rect x="360" y="435" width="480" height="4" rx="2" fill="url(#green-glow)"/>

  <!-- Subtítulo Temático e Mecânicas -->
  <text x="600" y="475" font-size="22" font-weight="500" fill="#34d399" text-anchor="middle" font-family="Fredoka, sans-serif">Simulação de Fazenda Botânica • Genética Procedural &amp; Cuidados</text>

  <!-- Badge Oficial de Estudo Experimental -->
  <g transform="translate(600, 525)">
    <rect x="-180" y="-18" width="360" height="36" rx="18" fill="rgba(52, 211, 153, 0.16)" stroke="#10b981" stroke-width="1.8"/>
    <text x="0" y="6" font-size="14" font-weight="bold" fill="#34d399" text-anchor="middle" font-family="JetBrains Mono, monospace" letter-spacing="1.2">📖 ESTUDO EXPERIMENTAL DE BOTÂNICA</text>
  </g>

  <!-- Rodapé Cozy Lab -->
  <text x="600" y="595" font-size="14" fill="#047857" text-anchor="middle" font-family="JetBrains Mono, monospace">COZY DEVELOPER LABORATORY • PROCEDURAL SYSTEMS &amp; SIMULATION</text>
</svg>`
};

Object.entries(covers).forEach(([slug, svgContent]) => {
  const coverPath = path.join('assets', 'projects', slug, 'cover.svg');
  fs.writeFileSync(coverPath, svgContent, 'utf8');
  console.log(`Generated custom illustrated cover for ${slug}`);
});
