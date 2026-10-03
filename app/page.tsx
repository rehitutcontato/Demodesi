'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Compass,
  Layers,
  Maximize2,
  Shield,
  ArrowUpRight,
  ChevronDown,
  Check,
  MapPin,
  Calendar,
  Phone,
  Ruler,
  Sun,
  Eye,
  Sliders,
  X,
  Sparkles,
  FileText,
  Clock,
  Home
} from 'lucide-react';

const WHATSAPP_BASE_URL =
  'https://wa.me/5519994656845?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20de%20briefing%20para%20projeto%20residencial.';

interface ProjectFicha {
  id: string;
  tag: string;
  title: string;
  condo: string;
  area: string;
  lotArea: string;
  year: string;
  solarOrientation: string;
  materials: string[];
  description: string;
  structuralHighlight: string;
  thermalConcept: string;
  programRooms: string[];
  blueprintDimensions: { width: string; depth: string; height: string };
  planZones: { name: string; area: string; x: number; y: number; w: number; h: number }[];
}

const PROJECTS_DATA: ProjectFicha[] = [
  {
    id: 'casa-01',
    tag: 'CASA 01',
    title: 'Residência Brise',
    condo: 'Swiss Park Campinas',
    area: '680m²',
    lotArea: '920m²',
    year: '2025/2026',
    solarOrientation: 'Fachada Principal Noroeste com proteção térmica solar ativa',
    materials: ['Concreto aparente ripado', 'Brises articulados de madeira cumaru', 'Caixilhos em alumínio preto microtexturizado', 'Lâminas de quartzo'],
    description:
      'Concebida para um terreno em aclive no Swiss Park, a Residência Brise desafia a gravidade com um balanço estrutural em balanço de 7,20 metros em concreto protendido. Os brises verticais de cumaru funcionam como pele dinâmica que filtra a insolação da tarde campineira, garantindo privacidade e conforto térmico passivo sem comprometer a ventilação.',
    structuralHighlight: 'Viga-calha em balanço de 7,2m sem apoios verticais no living',
    thermalConcept: 'Ventilação cruzada através de pátio interno com espelho d’água e sombreamento dinâmico.',
    programRooms: [
      'Living com pé-direito duplo integrado à piscina suspensa',
      '4 Suítes com varanda privativa e proteção solar por brises',
      'Cozinha gourmet com ilha em granito escovado e adega climatizada',
      'Garagem subterrânea para 4 veículos com iluminação zenital natural'
    ],
    blueprintDimensions: { width: '22.40m', depth: '34.80m', height: '8.40m' },
    planZones: [
      { name: 'Suíte Master', area: '58m²', x: 30, y: 30, w: 140, h: 100 },
      { name: 'Living & Jantar', area: '124m²', x: 190, y: 30, w: 220, h: 140 },
      { name: 'Espelho d’Água', area: '45m²', x: 430, y: 40, w: 90, h: 120 },
      { name: 'Espaço Gourmet', area: '62m²', x: 190, y: 190, w: 180, h: 90 },
      { name: 'Deck & Piscina', area: '98m²', x: 390, y: 180, w: 130, h: 100 },
      { name: 'Ateliê & Home Office', area: '38m²', x: 30, y: 150, w: 140, h: 130 }
    ]
  },
  {
    id: 'casa-02',
    tag: 'CASA 02',
    title: 'Villa Travertino',
    condo: 'Alphaville Dom Pedro',
    area: '850m²',
    lotArea: '1.280m²',
    year: '2025',
    solarOrientation: 'Fachada Leste com vista panorâmica para reserva florestal',
    materials: ['Mármore Travertino Navona bruto e escovado', 'Vidro laminado extra-clear piso-teto', 'Perfis estruturais ocultos', 'Espelho d’água em granito negro'],
    description:
      'Implantada na cota mais nobre do Alphaville Dom Pedro, a Villa Travertino funde os limites entre interior e paisagem natural. Seus planos monolíticos revestidos em travertino romano dialogam com amplos painéis de vidro de 4,20 metros de altura, permitindo que a luz zenital banhe as galerias internas ao longo de todas as estações do ano.',
    structuralHighlight: 'Laje plana de transição protendida com vão livre de 14 metros',
    thermalConcept: 'Inércia térmica do mármore travertino associada a espelhos d’água longitudinais.',
    programRooms: [
      'Galeria monumental de entrada com pé-direito de 6,50 metros',
      '5 Suítes plenas voltadas para o bosque de preservação permanente',
      'SPA indoor com sauna úmida envidraçada e ofurô em pedra natural',
      'Pavilhão de lazer externo com fire pit rebaixado e borda infinita'
    ],
    blueprintDimensions: { width: '28.00m', depth: '42.50m', height: '9.10m' },
    planZones: [
      { name: 'Galeria & Hall', area: '48m²', x: 40, y: 40, w: 110, h: 220 },
      { name: 'Living Monumental', area: '160m²', x: 170, y: 40, w: 220, h: 140 },
      { name: 'Espelho Travertino', area: '72m²', x: 410, y: 30, w: 110, h: 150 },
      { name: 'Gourmet & Wine Bar', area: '78m²', x: 170, y: 200, w: 200, h: 80 },
      { name: 'Borda Infinita', area: '115m²', x: 390, y: 200, w: 130, h: 80 },
      { name: 'Suíte Presidencial', area: '74m²', x: 40, y: 180, w: 110, h: 100 }
    ]
  },
  {
    id: 'casa-03',
    tag: 'CASA 03',
    title: 'Pavilhão Gramado',
    condo: 'Fazenda Boa Vista',
    area: '1.100m²',
    lotArea: '3.400m²',
    year: '2024/2025',
    solarOrientation: 'Norte-Sul com beirais generosos de proteção solar passiva',
    materials: ['Estrutura metálica aparente em aço corten', 'Esquadrias minimalistas piso-teto de correr', 'Piso contínuo em tecnocimento', 'Forro ripado de freijó'],
    description:
      'Uma interpretação brutalista e refinada do pavilhão térreo moderno no condomínio Fazenda Boa Vista. A residência é orientada horizontalmente para mimetizar com a topografia suave e os campos de golfe. A utilização do aço corten oxidado cria uma relação orgânica com a terra vermelha paulista, enquanto o fechamento integral em vidro confere leveza flutuante.',
    structuralHighlight: 'Grelha metálica em aço corten com beirais em balanço de 3,80 metros contínuos',
    thermalConcept: 'Resfriamento geotérmico passivo, cobertura verde extensiva e beirais calculados por insolação.',
    programRooms: [
      'Pavilhão social de 28 metros contínuos sem pilares intermediários',
      '6 Suítes independentes distribuídas em ala íntima ajardinada',
      'Adega subterrânea climatizada em concreto para 1.200 rótulos',
      'Garagem-galeria para 6 veículos com carregadores rápidos ultrassônicos'
    ],
    blueprintDimensions: { width: '48.00m', depth: '26.00m', height: '4.60m' },
    planZones: [
      { name: 'Pavilhão Social', area: '260m²', x: 40, y: 40, w: 260, h: 120 },
      { name: 'Ala das 6 Suítes', area: '280m²', x: 40, y: 180, w: 260, h: 100 },
      { name: 'Pátio Corten', area: '90m²', x: 320, y: 40, w: 80, h: 120 },
      { name: 'Piscina Raia 25m', area: '140m²', x: 420, y: 40, w: 100, h: 240 },
      { name: 'Adega Subterrânea', area: '52m²', x: 320, y: 180, w: 80, h: 100 }
    ]
  }
];

export default function AtelierValentePage() {
  const [selectedFicha, setSelectedFicha] = useState<ProjectFicha | null>(null);
  const [heroViewMode, setHeroViewMode] = useState<'render' | 'bim' | 'thermal'>('render');
  const [activeMethodStep, setActiveMethodStep] = useState<number>(1);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Fast Viability Briefing State
  const [calculatorCondo, setCalculatorCondo] = useState('Alphaville Dom Pedro (Campinas)');
  const [calculatorLotArea, setCalculatorLotArea] = useState('800');
  const [calculatorSuites, setCalculatorSuites] = useState('4');
  const [calculatorFeatures, setCalculatorFeatures] = useState<string[]>([
    'Balanço Estrutural Sem Pilares',
    'Espelho d’Água & Piscina Borda Infinita'
  ]);
  const [briefingModalOpen, setBriefingModalOpen] = useState(false);

  const toggleFeature = (feature: string) => {
    setCalculatorFeatures((prev) =>
      prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature]
    );
  };

  const estimatedConstructionArea = Math.round(Number(calculatorLotArea || 600) * 0.62);

  const getCustomWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Olá, Atelier Valente! Gostaria de agendar uma reunião de viabilidade & briefing para o meu lote no ${calculatorCondo} (terreno de aprox. ${calculatorLotArea}m²). Desejamos uma residência com ${calculatorSuites} suítes e características como: ${calculatorFeatures.join(
        ', '
      )}. Aguardo retorno do Arquiteto Responsável.`
    );
    return `https://wa.me/5519994656845?text=${text}`;
  };

  const getProjectWhatsAppLink = (projectName: string) => {
    const text = encodeURIComponent(
      `Olá, estive avaliando o portfólio do Atelier Valente e fiquei impressionado com a ${projectName}. Gostaria de entender a viabilidade de desenvolver um projeto no mesmo padrão arquitetônico autoral para o meu lote.`
    );
    return `https://wa.me/5519994656845?text=${text}`;
  };

  return (
    <div className="relative min-h-screen bg-[#030303] text-[#e2d7c5] selection:bg-[#c5b299]/30 selection:text-white">
      {/* 1. Header Minimalista */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800/40 bg-[#030303]/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
          {/* Logo Zone (Single-line wordmark with authority) */}
          <a href="#" className="flex flex-col">
            <span className="font-serif-luxury text-base font-bold tracking-tight text-[#e2d7c5] sm:text-lg">
              ATELIER VALENTE
            </span>
            <span className="font-technical text-[10px] tracking-widest text-[#c5b299]/80 uppercase">
              Arquitetura Autoral · CAU-SP
            </span>
          </a>

          {/* Center: Capacity Indicator */}
          <div className="hidden lg:flex items-center gap-3 border-x border-zinc-800/40 px-6 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c5b299] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c5b299]"></span>
            </span>
            <span className="font-technical text-xs tracking-wider text-zinc-300">
              Capacidade Limitada: <strong className="text-[#e2d7c5] font-semibold">4 Projetos Executivos por Ciclo</strong>
            </span>
          </div>

          {/* Action Zone: WhatsApp Briefing */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setBriefingModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 border border-[#c5b299]/30 bg-transparent px-4 py-2 font-technical text-xs tracking-wider text-[#e2d7c5] transition-colors hover:border-[#c5b299] hover:bg-[#c5b299]/10"
            >
              <Sliders className="h-3.5 w-3.5 text-[#c5b299]" />
              Calculadora de Lote
            </button>
            <a
              href={WHATSAPP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e2d7c5] px-5 py-2.5 font-technical text-xs font-semibold tracking-wider text-[#030303] transition-all hover:bg-[#c5b299] hover:shadow-[0_0_20px_rgba(226,215,197,0.2)]"
            >
              <span>Agendar Briefing</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* 2. Hero Section Arquitetônica */}
      <section className="relative overflow-hidden border-b border-zinc-800/40 pt-16 pb-20 sm:pt-24 sm:pb-28">
        {/* Subtle architectural grid lines */}
        <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          {/* Badge superior em travertino escovado */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2.5 border border-[#c5b299]/30 bg-[#0a0a0c] px-3.5 py-1.5 shadow-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#c5b299]" />
            <span className="font-technical text-[11px] font-semibold tracking-widest text-[#e2d7c5] uppercase">
              PROJETOS AUTORAIS PARA CONDOMÍNIOS DE ALTO PADRÃO
            </span>
          </motion.div>

          {/* Headline Monumental */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-5xl font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight text-[#e2d7c5]"
          >
            Espaços que desafiam o tempo através da luz natural, concreto aparente e proporção pura.
          </motion.h1>

          {/* Subheadline Executiva */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-zinc-400"
          >
            Desenvolvemos residências contemporâneas em condomínios fechados (Alphaville, Fazenda da Grama, Swiss Park),
            equilibrando volumetria arrojada, eficiência térmica e integração sensorial com a paisagem.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href={WHATSAPP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#e2d7c5] px-7 py-3.5 font-technical text-xs font-semibold tracking-widest text-[#030303] uppercase transition-all hover:bg-[#c5b299] hover:shadow-[0_0_25px_rgba(226,215,197,0.25)]"
            >
              <span>Solicitar Reunião de Viabilidade & Briefing</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <button
              onClick={() => {
                const element = document.getElementById('obras-selecionadas');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 border border-zinc-700/60 bg-[#0a0a0c]/80 px-6 py-3.5 font-technical text-xs tracking-wider text-zinc-300 transition-colors hover:border-[#c5b299]/50 hover:text-[#e2d7c5]"
            >
              <span>Explorar Obras Selecionadas</span>
              <ChevronDown className="h-4 w-4 text-[#c5b299]" />
            </button>
          </motion.div>

          {/* Régua de Diretrizes do Estúdio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3 border-t border-zinc-800/60 pt-8"
          >
            <div className="flex flex-col border-l border-zinc-800/80 pl-6">
              <span className="font-serif-luxury text-3xl font-light text-[#e2d7c5] tabular-nums">
                +45.000m²
              </span>
              <span className="mt-1 font-technical text-xs text-zinc-400">
                De área construída entregue em condomínios de alto padrão
              </span>
            </div>

            <div className="flex flex-col border-l border-zinc-800/80 pl-6">
              <span className="font-serif-luxury text-3xl font-light text-[#e2d7c5]">
                Autoral 100%
              </span>
              <span className="mt-1 font-technical text-xs text-zinc-400">
                Cada residência é desenhada a partir da topografia única do lote
              </span>
            </div>

            <div className="flex flex-col border-l border-zinc-800/80 pl-6">
              <span className="font-serif-luxury text-3xl font-light text-[#e2d7c5]">
                BIM & VR 3D
              </span>
              <span className="mt-1 font-technical text-xs text-zinc-400">
                Compatibilização total de projetos estruturais e hidráulicos em tempo real
              </span>
            </div>
          </motion.div>

          {/* Interactive Architectural Monolith Canvas / Viewport */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 overflow-hidden border border-zinc-800/60 bg-[#0a0a0c]"
          >
            {/* Viewport Header Controls */}
            <div className="flex flex-wrap items-center justify-between border-b border-zinc-800/60 bg-[#070709] px-4 py-3 sm:px-6">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#c5b299]" />
                <span className="font-technical text-xs tracking-wider text-zinc-300">
                  ESTUDO VOLUMÉTRICO AUTORAL · RESIDÊNCIA BRISE (CAMPINAS, SP)
                </span>
                <span className="hidden sm:inline font-technical text-[11px] text-zinc-500">
                  LAT: 22°54&apos;S · LONG: 47°03&apos;W · COTA 685m
                </span>
              </div>

              {/* Mode Switcher */}
              <div className="flex items-center gap-1 bg-[#030303] p-1 border border-zinc-800">
                <button
                  onClick={() => setHeroViewMode('render')}
                  className={`px-3 py-1 font-technical text-xs tracking-wider transition-colors ${
                    heroViewMode === 'render'
                      ? 'bg-[#e2d7c5] text-[#030303] font-medium'
                      : 'text-zinc-400 hover:text-[#e2d7c5]'
                  }`}
                >
                  Render 4K
                </button>
                <button
                  onClick={() => setHeroViewMode('bim')}
                  className={`px-3 py-1 font-technical text-xs tracking-wider transition-colors ${
                    heroViewMode === 'bim'
                      ? 'bg-[#e2d7c5] text-[#030303] font-medium'
                      : 'text-zinc-400 hover:text-[#e2d7c5]'
                  }`}
                >
                  Malha BIM
                </button>
                <button
                  onClick={() => setHeroViewMode('thermal')}
                  className={`px-3 py-1 font-technical text-xs tracking-wider transition-colors ${
                    heroViewMode === 'thermal'
                      ? 'bg-[#e2d7c5] text-[#030303] font-medium'
                      : 'text-zinc-400 hover:text-[#e2d7c5]'
                  }`}
                >
                  Insolação Solar
                </button>
              </div>
            </div>

            {/* Viewport Display Area */}
            <div className="relative h-[340px] sm:h-[460px] w-full bg-[#030303] overflow-hidden flex items-center justify-center">
              {/* Dynamic View Layer */}
              {heroViewMode === 'render' && (
                <div className="relative h-full w-full">
                  {/* Rich SVG Architectural Composite: Brutalist Luxury Residence */}
                  <svg
                    className="h-full w-full"
                    viewBox="0 0 1000 500"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    <defs>
                      <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#08080c" />
                        <stop offset="40%" stopColor="#14141d" />
                        <stop offset="85%" stopColor="#2a2321" />
                        <stop offset="100%" stopColor="#3d2c25" />
                      </linearGradient>
                      <linearGradient id="concreteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#454549" />
                        <stop offset="60%" stopColor="#2c2c30" />
                        <stop offset="100%" stopColor="#1b1b1e" />
                      </linearGradient>
                      <linearGradient id="travertineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#e2d7c5" />
                        <stop offset="100%" stopColor="#ad9e89" />
                      </linearGradient>
                      <linearGradient id="interiorWarmth" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#ffeaaf" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#d9822b" stopOpacity="0.15" />
                      </linearGradient>
                      <linearGradient id="poolGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0b2533" />
                        <stop offset="100%" stopColor="#020e17" />
                      </linearGradient>
                      <pattern id="briseWood" width="8" height="20" patternUnits="userSpaceOnUse">
                        <line x1="2" y1="0" x2="2" y2="20" stroke="#87532d" strokeWidth="2.5" />
                        <line x1="6" y1="0" x2="6" y2="20" stroke="#22130b" strokeWidth="1.5" />
                      </pattern>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="6" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>

                    {/* Sunset Sky */}
                    <rect width="1000" height="500" fill="url(#skyGrad)" />

                    {/* Native Forest Silhouettes */}
                    <path
                      d="M0,320 Q120,300 240,315 T480,310 T720,325 T1000,310 L1000,500 L0,500 Z"
                      fill="#070c08"
                      opacity="0.8"
                    />

                    {/* Terraced Lawn Landscape */}
                    <polygon points="0,370 1000,370 1000,500 0,500" fill="#0d140e" />

                    {/* Floating Reflecting Pool / Infinity Water */}
                    <polygon points="450,380 940,380 880,480 390,480" fill="url(#poolGrad)" />
                    {/* Pool water reflection glow */}
                    <line x1="480" y1="385" x2="890" y2="385" stroke="#e2d7c5" strokeWidth="1.5" opacity="0.3" />
                    <line x1="430" y1="420" x2="840" y2="420" stroke="#e2d7c5" strokeWidth="1" opacity="0.15" />

                    {/* Ground Floor Base (Travertine & Glass) */}
                    <rect x="220" y="240" width="460" height="140" fill="url(#interiorWarmth)" />
                    {/* Travertine monolithic shear wall */}
                    <rect x="180" y="220" width="110" height="160" fill="url(#travertineGrad)" />
                    <line x1="180" y1="260" x2="290" y2="260" stroke="#948470" strokeWidth="1" />
                    <line x1="180" y1="300" x2="290" y2="300" stroke="#948470" strokeWidth="1" />
                    <line x1="180" y1="340" x2="290" y2="340" stroke="#948470" strokeWidth="1" />

                    {/* Floor to Ceiling Minimalist Glass Mullions */}
                    <rect x="290" y="240" width="370" height="140" fill="#090f13" fillOpacity="0.4" stroke="#1f2427" strokeWidth="2" />
                    <line x1="380" y1="240" x2="380" y2="380" stroke="#1f2427" strokeWidth="2" />
                    <line x1="480" y1="240" x2="480" y2="380" stroke="#1f2427" strokeWidth="2" />
                    <line x1="570" y1="240" x2="570" y2="380" stroke="#1f2427" strokeWidth="2" />

                    {/* Interior architectural warm chandelier / floor lighting glow */}
                    <ellipse cx="440" cy="290" rx="60" ry="25" fill="#fde68a" opacity="0.3" filter="url(#glow)" />
                    <line x1="440" y1="240" x2="440" y2="275" stroke="#fde68a" strokeWidth="1" opacity="0.6" />

                    {/* Upper Floor Monumental Cantilever (Exposed Raw Concrete) */}
                    <polygon points="120,110 740,110 700,230 150,230" fill="url(#concreteGrad)" />
                    <polygon points="740,110 820,110 780,230 700,230" fill="#18181b" />

                    {/* Cumaru Wood Brise-Soleil Panel Module (Upper Floor) */}
                    <rect x="270" y="125" width="220" height="95" fill="url(#briseWood)" stroke="#1a0f07" strokeWidth="2" />
                    <rect x="520" y="125" width="160" height="95" fill="#0c1116" stroke="#27272a" strokeWidth="2" />
                    {/* Glass reflection on upper suite */}
                    <line x1="535" y1="135" x2="665" y2="210" stroke="#ffffff" strokeWidth="1" opacity="0.2" />

                    {/* Roof overhang line with embedded linear LED */}
                    <line x1="120" y1="230" x2="780" y2="230" stroke="#e2d7c5" strokeWidth="2" opacity="0.8" filter="url(#glow)" />

                    {/* Travertine Stone Garden Steps */}
                    <rect x="160" y="380" width="140" height="15" fill="url(#travertineGrad)" />
                    <rect x="180" y="395" width="150" height="15" fill="#a4937d" />
                    <rect x="200" y="410" width="160" height="15" fill="#887864" />

                    {/* Architectural scale figure (Silhouette) */}
                    <circle cx="340" cy="330" r="3" fill="#e2d7c5" opacity="0.6" />
                    <line x1="340" y1="333" x2="340" y2="368" stroke="#e2d7c5" strokeWidth="1.5" opacity="0.6" />
                  </svg>

                  {/* On-canvas technical stamp */}
                  <div className="absolute bottom-4 left-4 bg-[#0a0a0c]/85 border border-zinc-800/80 px-3 py-2 backdrop-blur-md">
                    <span className="block font-technical text-[10px] text-[#c5b299] uppercase tracking-wider">
                      CASA 01 · VOLUMETRIA AUTORAL
                    </span>
                    <span className="block font-serif-luxury text-xs text-[#e2d7c5]">
                      Residência Brise · Swiss Park (680m²)
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 flex items-center gap-2 bg-[#030303]/75 border border-zinc-800/60 px-3 py-1 font-technical text-[11px] text-zinc-300">
                    <Shield className="h-3 w-3 text-[#c5b299]" />
                    <span>Engenharia Estrutural Protendida</span>
                  </div>
                </div>
              )}

              {heroViewMode === 'bim' && (
                <div className="relative h-full w-full bg-[#06090e] p-6">
                  {/* Dense wireframe schematic */}
                  <div className="absolute inset-0 blueprint-grid-dense opacity-40" />
                  <svg className="h-full w-full" viewBox="0 0 800 400">
                    {/* Axial Grid Lines */}
                    <g stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.4">
                      <line x1="100" y1="50" x2="100" y2="350" />
                      <line x1="250" y1="50" x2="250" y2="350" />
                      <line x1="450" y1="50" x2="450" y2="350" />
                      <line x1="680" y1="50" x2="680" y2="350" />
                      <line x1="50" y1="120" x2="750" y2="120" />
                      <line x1="50" y1="240" x2="750" y2="240" />
                    </g>

                    {/* Structural Columns & Foundation Footings */}
                    <g fill="#0284c7" opacity="0.8">
                      <rect x="90" y="320" width="20" height="20" />
                      <rect x="240" y="320" width="20" height="20" />
                      <rect x="440" y="320" width="20" height="20" />
                      <rect x="670" y="320" width="20" height="20" />
                    </g>

                    {/* 3D Wireframe Cantilever Volume */}
                    <polygon
                      points="120,90 620,90 560,180 60,180"
                      fill="none"
                      stroke="#e2d7c5"
                      strokeWidth="2"
                    />
                    <polygon
                      points="620,90 710,130 650,220 560,180"
                      fill="none"
                      stroke="#c5b299"
                      strokeWidth="1.5"
                    />
                    <polygon
                      points="60,180 560,180 560,300 60,300"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="1.5"
                    />

                    {/* Cantilever Moment Vector */}
                    <line x1="60" y1="180" x2="60" y2="260" stroke="#f43f5e" strokeWidth="2" />
                    <text x="75" y="230" fill="#f43f5e" fontSize="11" fontFamily="monospace">
                      M_max = 485 kN·m (Vão 7.20m)
                    </text>

                    {/* BIM Node Badges */}
                    <circle cx="120" cy="90" r="4" fill="#22c55e" />
                    <text x="130" y="85" fill="#22c55e" fontSize="10" fontFamily="monospace">
                      NÓ-ESTR-01 [OK]
                    </text>

                    <circle cx="560" cy="180" r="4" fill="#22c55e" />
                    <text x="570" y="175" fill="#22c55e" fontSize="10" fontFamily="monospace">
                      PILAR-L14 (Protendido)
                    </text>
                  </svg>

                  <div className="absolute bottom-4 left-4 bg-[#0a0a0c]/90 border border-zinc-700 p-2.5 font-technical text-xs">
                    <span className="text-sky-400 font-semibold">MODELO FEDERADO IFC / REVIT 2026</span>
                    <span className="block text-zinc-400 text-[10px]">
                      Clash Detection: 0 conflitos entre Estrutura, HVAC e Hidráulica
                    </span>
                  </div>
                </div>
              )}

              {heroViewMode === 'thermal' && (
                <div className="relative h-full w-full bg-[#080706] p-6">
                  <svg className="h-full w-full" viewBox="0 0 800 400">
                    {/* Solar Path Arc */}
                    <path
                      d="M 100,320 A 320,240 0 0,1 700,320"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="2.5"
                      strokeDasharray="6 4"
                    />

                    {/* Sun Positions */}
                    <circle cx="180" cy="160" r="14" fill="#fbbf24" opacity="0.8" />
                    <text x="160" y="130" fill="#fbbf24" fontSize="11" fontFamily="monospace">
                      Solstício Verão (10:00)
                    </text>

                    <circle cx="400" cy="85" r="18" fill="#f59e0b" />
                    <text x="360" y="55" fill="#f59e0b" fontSize="12" fontWeight="bold" fontFamily="monospace">
                      Zenital (12:30) 78°
                    </text>

                    <circle cx="620" cy="170" r="14" fill="#ea580c" opacity="0.8" />
                    <text x="580" y="140" fill="#ea580c" fontSize="11" fontFamily="monospace">
                      Oeste / Tarde (16:30)
                    </text>

                    {/* Building Section with Shade Ray Tracing */}
                    <rect x="280" y="200" width="240" height="120" fill="#1c1917" stroke="#e2d7c5" strokeWidth="1.5" />
                    {/* Brise Slat shadow vectors */}
                    <polygon points="260,190 280,200 280,320 220,320" fill="#f59e0b" fillOpacity="0.12" />
                    <line x1="620" y1="170" x2="280" y2="210" stroke="#ea580c" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />

                    {/* Wind Vector Arrows (Cross Ventilation) */}
                    <path
                      d="M 140,270 Q 280,250 420,260 T 640,240"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="3"
                    />
                    <text x="140" y="250" fill="#38bdf8" fontSize="11" fontFamily="monospace">
                      Ventos Predominantes Sudeste (2.4 m/s)
                    </text>
                  </svg>

                  <div className="absolute bottom-4 left-4 bg-[#0a0a0c]/90 border border-zinc-700 p-2.5 font-technical text-xs">
                    <span className="text-amber-400 font-semibold">CARTA BIOCLIMÁTICA DE CAMPINAS / RMC</span>
                    <span className="block text-zinc-400 text-[10px]">
                      Redução estimada de 34% no consumo de climatização ativa via brises e ventilação cruzada
                    </span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Galeria Monolítica de Obras Selecionadas (Showcase de Portfólio) */}
      <section id="obras-selecionadas" className="border-b border-zinc-800/40 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-zinc-800/60 pb-8">
            <div>
              <span className="font-technical text-xs tracking-widest text-[#c5b299] uppercase">
                SHOWCASE EDITORIAL EXECUTIVO
              </span>
              <h2 className="mt-2 font-serif-luxury text-3xl sm:text-4xl text-[#e2d7c5]">
                Obras de Assinatura Selecionadas
              </h2>
            </div>
            <p className="mt-4 sm:mt-0 max-w-md text-sm text-zinc-400 font-technical">
              Cada residência expressa o encontro entre a pureza estrutural, o clima paulista e os anseios singulares da família.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {PROJECTS_DATA.map((project, idx) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative flex flex-col border border-zinc-800/70 bg-[#0a0a0c] transition-all hover:border-[#c5b299]/60"
              >
                {/* Architectural Canvas Preview Header */}
                <div className="relative h-64 w-full overflow-hidden bg-[#060608] border-b border-zinc-800/60">
                  {/* SVG Custom Architectural Illustration for Each House */}
                  {project.id === 'casa-01' && (
                    <svg className="h-full w-full transition-transform duration-700 group-hover:scale-105" viewBox="0 0 400 260">
                      <rect width="400" height="260" fill="#0f1015" />
                      <circle cx="200" cy="180" r="140" fill="#1c1613" opacity="0.4" />
                      {/* House 1: Cantilever & Brise */}
                      <polygon points="50,140 340,140 310,210 70,210" fill="#2d2d33" />
                      <rect x="90" y="80" width="220" height="60" fill="#3f3f46" />
                      <line x1="90" y1="80" x2="310" y2="80" stroke="#c5b299" strokeWidth="2" />
                      {/* Brise Louvers */}
                      {[110, 125, 140, 155, 170, 185, 200, 215, 230, 245, 260, 275, 290].map((x) => (
                        <line key={x} x1={x} y1="85" x2={x} y2="135" stroke="#925c34" strokeWidth="2.5" />
                      ))}
                      {/* Pool reflection below */}
                      <polygon points="120,215 380,215 350,250 140,250" fill="#0a2233" />
                      <line x1="140" y1="220" x2="360" y2="220" stroke="#e2d7c5" strokeWidth="1" opacity="0.4" />
                    </svg>
                  )}

                  {project.id === 'casa-02' && (
                    <svg className="h-full w-full transition-transform duration-700 group-hover:scale-105" viewBox="0 0 400 260">
                      <rect width="400" height="260" fill="#0e0e11" />
                      {/* Travertine Monoliths & Water Mirrors */}
                      <rect x="40" y="60" width="100" height="150" fill="#c5b299" />
                      <rect x="150" y="80" width="180" height="130" fill="#18181b" stroke="#e2d7c5" strokeWidth="1" />
                      <line x1="210" y1="80" x2="210" y2="210" stroke="#27272a" strokeWidth="2" />
                      <line x1="270" y1="80" x2="270" y2="210" stroke="#27272a" strokeWidth="2" />
                      {/* Skylight ray */}
                      <polygon points="180,30 260,30 290,80 150,80" fill="#e2d7c5" opacity="0.15" />
                      {/* Water mirror */}
                      <polygon points="30,215 370,215 340,255 50,255" fill="#0c1e28" />
                      <line x1="50" y1="220" x2="350" y2="220" stroke="#c5b299" strokeWidth="1.5" opacity="0.5" />
                    </svg>
                  )}

                  {project.id === 'casa-03' && (
                    <svg className="h-full w-full transition-transform duration-700 group-hover:scale-105" viewBox="0 0 400 260">
                      <rect width="400" height="260" fill="#0c0d0e" />
                      {/* Corten Steel Pavilion */}
                      <polygon points="20,130 380,130 360,145 40,145" fill="#7c2d12" />
                      <polygon points="40,145 360,145 350,195 50,195" fill="#090a0c" stroke="#9a3412" strokeWidth="1.5" />
                      {/* Slender corten columns */}
                      {[60, 120, 180, 240, 300, 340].map((x) => (
                        <line key={x} x1={x} y1="130" x2={x} y2="195" stroke="#7c2d12" strokeWidth="2.5" />
                      ))}
                      {/* Rolling green lawn */}
                      <path d="M0,195 Q200,185 400,195 L400,260 L0,260 Z" fill="#0e1710" />
                    </svg>
                  )}

                  {/* Badges on card */}
                  <div className="absolute top-4 left-4 bg-[#030303]/85 px-2.5 py-1 border border-zinc-800 font-technical text-[10px] text-[#c5b299] tracking-widest">
                    {project.tag}
                  </div>
                  <div className="absolute top-4 right-4 bg-[#030303]/85 px-2.5 py-1 border border-zinc-800 font-serif-luxury text-xs text-[#e2d7c5]">
                    {project.area}
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <span className="font-technical text-xs text-[#c5b299]">
                    {project.condo}
                  </span>
                  <h3 className="mt-1 font-serif-luxury text-2xl text-[#e2d7c5] group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-zinc-400 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-6 border-t border-zinc-800/60 pt-4">
                    <span className="font-technical text-[10px] text-zinc-500 uppercase tracking-wider block">
                      DESTAQUE CONSTRUTIVO
                    </span>
                    <span className="mt-1 text-xs text-zinc-300 font-medium block">
                      {project.structuralHighlight}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedFicha(project)}
                      className="inline-flex items-center gap-1.5 font-technical text-xs tracking-wider text-[#e2d7c5] hover:text-white transition-colors"
                    >
                      <Eye className="h-3.5 w-3.5 text-[#c5b299]" />
                      <span>Visualizar Ficha Arquitetônica</span>
                    </button>

                    <a
                      href={getProjectWhatsAppLink(project.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-zinc-400 hover:text-[#c5b299] transition-colors"
                      title="Solicitar projeto similar"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. O Método de Desenvolvimento Valente (A Jornada do Cliente) */}
      <section className="border-b border-zinc-800/40 py-24 sm:py-32 bg-[#060608]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="max-w-3xl">
            <span className="font-technical text-xs tracking-widest text-[#c5b299] uppercase">
              RIGOR TÉCNICO & EXPERIÊNCIA DO CLIENTE
            </span>
            <h2 className="mt-2 font-serif-luxury text-3xl sm:text-4xl text-[#e2d7c5]">
              O Método de Desenvolvimento Valente
            </h2>
            <p className="mt-4 text-base text-zinc-400">
              Da topografia bruta do lote à entrega das chaves: eliminamos imprevistos através de engenharia prévia,
              imersão em Realidade Virtual e compatibilização milimétrica de todas as disciplinas.
            </p>
          </div>

          {/* Interactive Steps Grid */}
          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Passo 1 */}
            <div
              onClick={() => setActiveMethodStep(1)}
              className={`cursor-pointer border p-7 transition-all ${
                activeMethodStep === 1
                  ? 'border-[#c5b299] bg-[#0a0a0c]'
                  : 'border-zinc-800/60 bg-[#070709] hover:border-zinc-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-serif-luxury text-2xl font-light text-[#c5b299]">
                  01
                </span>
                <Compass className="h-5 w-5 text-[#c5b299]" />
              </div>
              <h3 className="mt-4 font-serif-luxury text-xl text-[#e2d7c5]">
                Estudo Topográfico & Insolação Solar
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                Análise climática do lote para otimização da ventilação cruzada e luz natural. Avaliamos curvas de nível,
                ventos dominantes e posicionamento das árvores nativas para implantar a casa com mínima movimentação de terra.
              </p>
              <ul className="mt-5 space-y-2 border-t border-zinc-800/60 pt-4 font-technical text-[11px] text-zinc-300">
                <li className="flex items-center gap-2">
                  <Check className="h-3 w-3 text-[#c5b299]" /> Levantamento planialtimétrico georreferenciado
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-3 w-3 text-[#c5b299]" /> Carta de sombreamento e insolação das 4 estações
                </li>
              </ul>
            </div>

            {/* Passo 2 */}
            <div
              onClick={() => setActiveMethodStep(2)}
              className={`cursor-pointer border p-7 transition-all ${
                activeMethodStep === 2
                  ? 'border-[#c5b299] bg-[#0a0a0c]'
                  : 'border-zinc-800/60 bg-[#070709] hover:border-zinc-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-serif-luxury text-2xl font-light text-[#c5b299]">
                  02
                </span>
                <Maximize2 className="h-5 w-5 text-[#c5b299]" />
              </div>
              <h3 className="mt-4 font-serif-luxury text-xl text-[#e2d7c5]">
                Volumetria e Realidade Virtual 3D
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                O cliente navega por cada ambiente da futura casa antes do início das escavações. Você experimenta as
                proporções reais dos pés-direitos, a incidência da luz do entardecer nos quartos e a integração visual dos espaços.
              </p>
              <ul className="mt-5 space-y-2 border-t border-zinc-800/60 pt-4 font-technical text-[11px] text-zinc-300">
                <li className="flex items-center gap-2">
                  <Check className="h-3 w-3 text-[#c5b299]" /> Sessão imersiva com óculos de Realidade Virtual
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-3 w-3 text-[#c5b299]" /> Renders fotorrealistas em 8K dos ângulos principais
                </li>
              </ul>
            </div>

            {/* Passo 3 */}
            <div
              onClick={() => setActiveMethodStep(3)}
              className={`cursor-pointer border p-7 transition-all ${
                activeMethodStep === 3
                  ? 'border-[#c5b299] bg-[#0a0a0c]'
                  : 'border-zinc-800/60 bg-[#070709] hover:border-zinc-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-serif-luxury text-2xl font-light text-[#c5b299]">
                  03
                </span>
                <Layers className="h-5 w-5 text-[#c5b299]" />
              </div>
              <h3 className="mt-4 font-serif-luxury text-xl text-[#e2d7c5]">
                Detalhamento Executivo e Acompanhamento
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                Entrega do projeto com rigor milimétrico para a construtora, eliminando aditivos de obra. Compatibilizamos
                estrutural, hidráulico, elétrico e ar-condicionado em plataforma BIM para garantir execução perfeita.
              </p>
              <ul className="mt-5 space-y-2 border-t border-zinc-800/60 pt-4 font-technical text-[11px] text-zinc-300">
                <li className="flex items-center gap-2">
                  <Check className="h-3 w-3 text-[#c5b299]" /> Caderno executivo com mais de 120 pranchas técnicas
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-3 w-3 text-[#c5b299]" /> Visitas técnicas de validação nas etapas estruturais
                </li>
              </ul>
            </div>
          </div>

          {/* Interactive Method Blueprint Terminal */}
          <div className="mt-10 border border-zinc-800 bg-[#0a0a0c] p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#c5b299]" />
                <span className="font-technical text-xs tracking-wider text-zinc-300">
                  PROTOCOLOS DE COMPATIBILIZAÇÃO VALENTE · FASE ATIVA: ETAPA 0{activeMethodStep}
                </span>
              </div>
              <span className="font-technical text-xs text-[#c5b299]">
                Padrão de Qualidade CAU-SP / ABNT NBR 16636
              </span>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3 font-technical text-xs text-zinc-400">
              <div className="border-l border-zinc-800 pl-4">
                <strong className="text-[#e2d7c5] block">Tolerância Executiva</strong>
                <span className="text-zinc-400 text-[11px]">
                  Rigor milimétrico em cotas de esquadrias e balanços de concreto
                </span>
              </div>
              <div className="border-l border-zinc-800 pl-4">
                <strong className="text-[#e2d7c5] block">Eficiência de Orçamento</strong>
                <span className="text-zinc-400 text-[11px]">
                  Zero retrabalho na obra com listas quantitativas precisas
                </span>
              </div>
              <div className="border-l border-zinc-800 pl-4">
                <strong className="text-[#e2d7c5] block">Acompanhamento Consultivo</strong>
                <span className="text-zinc-400 text-[11px]">
                  Alinhamento direto entre Arquiteto Titular e Construtora
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Ferramenta de Conversão: Calculadora de Viabilidade de Programa */}
      <section className="border-b border-zinc-800/40 py-24 sm:py-28 bg-[#030303]">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="border border-zinc-800/80 bg-[#0a0a0c] p-8 sm:p-12 shadow-2xl">
            <div className="max-w-2xl">
              <span className="font-technical text-xs tracking-widest text-[#c5b299] uppercase">
                PLANEJAMENTO PRELIMINAR DE LOTE
              </span>
              <h2 className="mt-2 font-serif-luxury text-2xl sm:text-3xl text-[#e2d7c5]">
                Calcule a Viabilidade Construtiva do Seu Terreno
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-zinc-400">
                Selecione as premissas do seu lote e receba um pré-dimensionamento personalizado do programa residencial
                compatibilizado com o coeficiente de aproveitamento do seu condomínio.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {/* Condomínio */}
              <div>
                <label className="block font-technical text-xs text-zinc-300 mb-2">
                  Condomínio Fechado
                </label>
                <select
                  suppressHydrationWarning
                  value={calculatorCondo}
                  onChange={(e) => setCalculatorCondo(e.target.value)}
                  className="w-full border border-zinc-700 bg-[#030303] px-3 py-2.5 font-technical text-xs text-[#e2d7c5] focus:border-[#c5b299] focus:outline-none"
                >
                  <option value="Alphaville Dom Pedro (Campinas)">Alphaville Dom Pedro (Campinas)</option>
                  <option value="Swiss Park (Campinas)">Swiss Park (Campinas)</option>
                  <option value="Fazenda da Grama (Itupeva)">Fazenda da Grama (Itupeva)</option>
                  <option value="Fazenda Boa Vista (Porto Feliz)">Fazenda Boa Vista (Porto Feliz)</option>
                  <option value="Quinta da Baroneza (Bragança)">Quinta da Baroneza (Bragança)</option>
                  <option value="Outro Condomínio na RMC / SP">Outro Condomínio na RMC / SP</option>
                </select>
              </div>

              {/* Área do Lote */}
              <div>
                <label className="block font-technical text-xs text-zinc-300 mb-2">
                  Área do Lote (m²)
                </label>
                <input
                  suppressHydrationWarning
                  type="number"
                  min="360"
                  max="5000"
                  step="50"
                  value={calculatorLotArea}
                  onChange={(e) => setCalculatorLotArea(e.target.value)}
                  className="w-full border border-zinc-700 bg-[#030303] px-3 py-2 font-technical text-xs text-[#e2d7c5] focus:border-[#c5b299] focus:outline-none"
                />
              </div>

              {/* Suítes */}
              <div>
                <label className="block font-technical text-xs text-zinc-300 mb-2">
                  Número de Suítes
                </label>
                <select
                  suppressHydrationWarning
                  value={calculatorSuites}
                  onChange={(e) => setCalculatorSuites(e.target.value)}
                  className="w-full border border-zinc-700 bg-[#030303] px-3 py-2.5 font-technical text-xs text-[#e2d7c5] focus:border-[#c5b299] focus:outline-none"
                >
                  <option value="3">3 Suítes Plenas</option>
                  <option value="4">4 Suítes + Home Office</option>
                  <option value="5">5 Suítes com Master Monumental</option>
                  <option value="6+">6 ou mais Suítes com Pavilhão de Hóspedes</option>
                </select>
              </div>
            </div>

            {/* Elementos Desejados */}
            <div className="mt-6">
              <label className="block font-technical text-xs text-zinc-300 mb-3">
                Elementos Arquitetônicos de Interesse
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  'Balanço Estrutural Sem Pilares',
                  'Espelho d’Água & Piscina Borda Infinita',
                  'Brises Dinâmicos de Madeira Cumaru',
                  'Adega Subterrânea Climatizada',
                  'Living com Pé-Direito Duplo 6m+',
                  'Garagem Subterrânea Zenital'
                ].map((feature) => {
                  const isSelected = calculatorFeatures.includes(feature);
                  return (
                    <button
                      type="button"
                      key={feature}
                      onClick={() => toggleFeature(feature)}
                      className={`px-3 py-1.5 font-technical text-xs transition-colors border ${
                        isSelected
                          ? 'border-[#c5b299] bg-[#c5b299]/15 text-[#e2d7c5]'
                          : 'border-zinc-800 bg-[#070709] text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      {isSelected ? '✓ ' : '+ '}
                      {feature}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Resultado Estimado */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between border-t border-zinc-800 pt-6 gap-4">
              <div>
                <span className="font-technical text-[10px] uppercase tracking-wider text-zinc-400 block">
                  PROJEÇÃO ESTIMADA DE ÁREA CONSTRUÍDA
                </span>
                <span className="font-serif-luxury text-3xl text-[#e2d7c5]">
                  ~{estimatedConstructionArea}m²
                </span>
                <span className="text-zinc-400 text-xs block mt-1">
                  Taxa de ocupação ideal e recuos respeitados para o lote de {calculatorLotArea}m²
                </span>
              </div>

              <a
                href={getCustomWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#e2d7c5] px-6 py-3 font-technical text-xs font-semibold tracking-wider text-[#030303] uppercase transition-all hover:bg-[#c5b299]"
              >
                <span>Enviar Briefing do Meu Lote</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Estratégico para Proprietários de Lotes (Accordion interativo) */}
      <section className="border-b border-zinc-800/40 py-24 sm:py-32 bg-[#060608]">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <div className="text-center">
            <span className="font-technical text-xs tracking-widest text-[#c5b299] uppercase">
              ESCLARECIMENTOS PARA PROPRIETÁRIOS
            </span>
            <h2 className="mt-2 font-serif-luxury text-3xl sm:text-4xl text-[#e2d7c5]">
              Perguntas Frequentes de Alto Padrão
            </h2>
            <p className="mt-3 text-sm text-zinc-400">
              Respostas claras sobre prazos, regulamentos dos condomínios da RMC e gestão executiva.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {[
              {
                q: 'Qual é o tempo médio de elaboração do projeto arquitetônico completo?',
                a: 'O ciclo de desenvolvimento integral leva entre 3 e 5 meses, estruturado em quatro etapas rigorosas: Estudo Preliminar & Concepção Conceitual (4 semanas), Anteprojeto & Aprovação na Associação do Condomínio e Prefeitura (4 a 6 semanas), Compatibilização BIM com Projetos Complementares (4 semanas) e Caderno Executivo Detalhado para a Construtora (4 semanas). Esse cronograma garante que nenhum detalhe seja improvisado durante o canteiro de obras.'
              },
              {
                q: 'Como é feita a compatibilização com as normas específicas dos condomínios fechados da RMC?',
                a: 'Nossa equipe possui profundo conhecimento e histórico de aprovações nos principais residenciais de Campinas e região (Alphaville Dom Pedro I, II e Zero, Swiss Park, Fazenda da Grama, EntreVerdes, Mont’Alcino, etc.). Antes do primeiro traço conceitual, solicitamos o regulamento construtivo interno atualizado do loteamento e mapeamos todos os recuos obrigatórios (frontal, laterais e de fundo), taxa de permeabilidade, altura máxima de gabarito e taxas de ocupação, garantindo aprovação ágil sem retrabalho.'
              },
              {
                q: 'O Atelier Valente indica ou gerencia a construtora que executará a obra?',
                a: 'Trabalhamos em modelo de assessoria técnica consultiva. Elaboramos o caderno de especificações executivas com listas de quantitativos milimétricos, o que permite aos nossos clientes realizarem concorrências transparentes entre as construtoras de alto padrão mais qualificadas da região. Apoiamos na equalização técnica das propostas comerciais e realizamos visitas programadas de fiscalização nas etapas estruturais críticas da obra.'
              },
              {
                q: 'O estúdio desenvolve também os projetos de interiores, iluminação e paisagismo?',
                a: 'Sim. Entendemos a arquitetura contemporânea como uma obra de arte integral. Para assegurar total coerência estética, oferecemos o desenvolvimento integrado do Projeto de Interiores Autoral, Luminotécnica e Consultoria Paisagística Sensorial. Desta forma, a paginação dos mármores, a marcenaria planejada, a temperatura de cor dos LEDs e a vegetação nativa dialogam perfeitamente com a volumetria de concreto e os caixilhos da casa.'
              }
            ].map((faq, index) => {
              const isOpen = expandedFaq === index;
              return (
                <div
                  key={index}
                  className="border border-zinc-800/70 bg-[#0a0a0c] transition-colors"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-6 text-left transition-colors hover:text-white"
                  >
                    <span className="font-serif-luxury text-base sm:text-lg text-[#e2d7c5]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-[#c5b299] transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-zinc-800/60 px-6 pb-6 pt-4 text-xs sm:text-sm leading-relaxed text-zinc-400"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Banner de Conversão Final */}
      <section className="border-b border-zinc-800/40 py-20 bg-[#030303]">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
          <span className="font-technical text-xs tracking-widest text-[#c5b299] uppercase">
            ATENDIMENTO EXCLUSIVO
          </span>
          <h2 className="mt-3 font-serif-luxury text-3xl sm:text-4xl text-[#e2d7c5]">
            Pronto para transformar seu lote em uma obra de assinatura?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-400">
            Reuniões de viabilidade realizadas presencialmente em Campinas ou por videoconferência imersiva.
            Receba a análise preliminar da insolação e potencial construtivo do seu terreno.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={WHATSAPP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#e2d7c5] px-8 py-4 font-technical text-xs font-semibold tracking-widest text-[#030303] uppercase transition-all hover:bg-[#c5b299] hover:shadow-[0_0_30px_rgba(226,215,197,0.3)]"
            >
              <Phone className="h-4 w-4" />
              <span>Falar Diretamente com Arquiteto no WhatsApp</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 8. Rodapé Corporativo com Integração Parvus Space */}
      <footer className="bg-[#030303] py-16 border-t border-zinc-800/60">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4 pb-12 border-b border-zinc-800/60">
            {/* Coluna 1: Marca & Responsável */}
            <div className="md:col-span-2">
              <span className="font-serif-luxury text-xl font-bold tracking-tight text-[#e2d7c5]">
                ATELIER VALENTE
              </span>
              <span className="block font-technical text-xs text-[#c5b299] uppercase tracking-wider mt-1">
                Arquitetura Residencial Contemporânea
              </span>
              <p className="mt-4 max-w-md text-xs leading-relaxed text-zinc-400">
                Arquiteto Responsável: Arq. Rodrigo Valente | CAU-SP A98421-4.
                Especialista em projetos autorais de alto padrão para condomínios fechados na Região Metropolitana de Campinas,
                Circuito das Frutas e Grande São Paulo.
              </p>
            </div>

            {/* Coluna 2: Localização e Atendimento */}
            <div>
              <span className="font-technical text-xs text-[#e2d7c5] uppercase tracking-wider block mb-3 font-semibold">
                Sede & Contato
              </span>
              <ul className="space-y-2 font-technical text-xs text-zinc-400">
                <li className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-[#c5b299]" />
                  <span>Av. Rotary, Swiss Park & Cambuí · Campinas / SP</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-[#c5b299]" />
                  <span>+55 (19) 99465-6845</span>
                </li>
                <li className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-[#c5b299]" />
                  <span>Segunda a Sexta · 08h às 19h (Com agendamento)</span>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Condomínios Atendidos */}
            <div>
              <span className="font-technical text-xs text-[#e2d7c5] uppercase tracking-wider block mb-3 font-semibold">
                Condomínios Frequentes
              </span>
              <ul className="space-y-1.5 font-technical text-xs text-zinc-400">
                <li>• Alphaville Dom Pedro I, II, Zero</li>
                <li>• Swiss Park Campinas</li>
                <li>• Fazenda da Grama (Itupeva)</li>
                <li>• Fazenda Boa Vista (Porto Feliz)</li>
                <li>• Quinta da Baroneza (Bragança)</li>
              </ul>
            </div>
          </div>

          {/* Assinatura Oficial Obrigatória Parvus Space */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-technical text-xs text-zinc-400">
            <p>
              © 2026 Atelier Valente Arquitetura Autoral. Todos os direitos reservados.
            </p>

            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[#c5b299]">
              <span>
                Digital Architecture by{' '}
                <a
                  href="https://parvuspace.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#e2d7c5] underline hover:text-white"
                >
                  Parvus Space (parvuspace.com.br)
                </a>
              </span>
              <span className="hidden sm:inline">|</span>
              <span>
                WhatsApp Comercial:{' '}
                <a
                  href={WHATSAPP_BASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e2d7c5] hover:text-white"
                >
                  +55 (19) 99465-6845
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL: Ficha Arquitetônica Executiva Detalhada */}
      <AnimatePresence>
        {selectedFicha && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto border border-zinc-700 bg-[#0a0a0c] p-6 sm:p-10 shadow-2xl text-[#e2d7c5]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedFicha(null)}
                className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white transition-colors"
                aria-label="Fechar"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Header */}
              <div className="border-b border-zinc-800 pb-6">
                <div className="flex items-center gap-2 font-technical text-xs text-[#c5b299]">
                  <span>MEMORIAL EXECUTIVO</span>
                  <span>·</span>
                  <span>{selectedFicha.condo}</span>
                  <span>·</span>
                  <span>{selectedFicha.year}</span>
                </div>
                <h3 className="mt-1 font-serif-luxury text-3xl text-[#e2d7c5]">
                  {selectedFicha.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {selectedFicha.description}
                </p>
              </div>

              {/* Technical Matrix */}
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 font-technical text-xs border-b border-zinc-800 pb-6">
                <div className="border-l border-zinc-800 pl-3">
                  <span className="text-zinc-500 uppercase block text-[10px]">Área Construída</span>
                  <span className="text-[#e2d7c5] font-semibold text-sm">{selectedFicha.area}</span>
                </div>
                <div className="border-l border-zinc-800 pl-3">
                  <span className="text-zinc-500 uppercase block text-[10px]">Área do Terreno</span>
                  <span className="text-[#e2d7c5] font-semibold text-sm">{selectedFicha.lotArea}</span>
                </div>
                <div className="border-l border-zinc-800 pl-3">
                  <span className="text-zinc-500 uppercase block text-[10px]">Dimensões do Bloco</span>
                  <span className="text-[#e2d7c5] font-semibold text-sm">
                    {selectedFicha.blueprintDimensions.width} x {selectedFicha.blueprintDimensions.depth}
                  </span>
                </div>
                <div className="border-l border-zinc-800 pl-3">
                  <span className="text-zinc-500 uppercase block text-[10px]">Orientação Solar</span>
                  <span className="text-[#e2d7c5] font-semibold text-xs">{selectedFicha.solarOrientation}</span>
                </div>
              </div>

              {/* Interactive Floor Plan Schematic (SVG Planta Baixa) */}
              <div className="mt-6">
                <span className="font-technical text-xs text-[#c5b299] uppercase tracking-wider block mb-2">
                  Esquema de Setorização da Planta Baixa (Nível Térreo)
                </span>
                <div className="relative h-64 sm:h-80 w-full border border-zinc-800 bg-[#030303] blueprint-grid-dense p-4 overflow-hidden">
                  <svg className="h-full w-full" viewBox="0 0 550 320">
                    {/* Outline of lot boundary */}
                    <rect x="20" y="20" width="510" height="280" fill="none" stroke="#27272a" strokeWidth="1" strokeDasharray="4 4" />
                    
                    {/* Zones of project */}
                    {selectedFicha.planZones.map((zone, i) => (
                      <g key={i}>
                        <rect
                          x={zone.x}
                          y={zone.y}
                          width={zone.w}
                          height={zone.h}
                          fill="#0f1117"
                          stroke="#c5b299"
                          strokeWidth="1.2"
                        />
                        <text
                          x={zone.x + 8}
                          y={zone.y + 20}
                          fill="#e2d7c5"
                          fontSize="10"
                          fontFamily="monospace"
                          fontWeight="bold"
                        >
                          {zone.name}
                        </text>
                        <text
                          x={zone.x + 8}
                          y={zone.y + 34}
                          fill="#a1a1aa"
                          fontSize="9"
                          fontFamily="monospace"
                        >
                          {zone.area}
                        </text>
                      </g>
                    ))}

                    {/* Scale Markings */}
                    <line x1="20" y1="305" x2="120" y2="305" stroke="#e2d7c5" strokeWidth="1.5" />
                    <text x="20" y="318" fill="#a1a1aa" fontSize="9" fontFamily="monospace">
                      ESCALA 1:100 (0m — 10m)
                    </text>
                  </svg>
                </div>
              </div>

              {/* Materiality and Thermal Features */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-zinc-800 pt-6">
                <div>
                  <span className="font-technical text-xs text-[#c5b299] uppercase tracking-wider block mb-2">
                    Paleta de Materiais Autoral
                  </span>
                  <ul className="space-y-1.5 font-technical text-xs text-zinc-300">
                    {selectedFicha.materials.map((m, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#c5b299]" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="font-technical text-xs text-[#c5b299] uppercase tracking-wider block mb-2">
                    Programa e Conforto Passivo
                  </span>
                  <p className="font-technical text-xs text-zinc-400 leading-relaxed mb-3">
                    {selectedFicha.thermalConcept}
                  </p>
                  <ul className="space-y-1 font-technical text-xs text-zinc-300">
                    {selectedFicha.programRooms.slice(0, 2).map((room, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="h-3 w-3 text-[#c5b299]" />
                        <span>{room}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Call */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between border-t border-zinc-800 pt-6 gap-4">
                <span className="font-technical text-xs text-zinc-400">
                  Deseja discutir uma implantação similar para seu lote?
                </span>
                <a
                  href={getProjectWhatsAppLink(selectedFicha.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#e2d7c5] px-6 py-3 font-technical text-xs font-semibold tracking-wider text-[#030303] uppercase hover:bg-[#c5b299] transition-all"
                >
                  <Phone className="h-4 w-4" />
                  <span>Consultar Viabilidade deste Padrão</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* QUICK BRIEFING MODAL */}
      <AnimatePresence>
        {briefingModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg border border-zinc-700 bg-[#0a0a0c] p-6 sm:p-8 text-[#e2d7c5]"
            >
              <button
                onClick={() => setBriefingModalOpen(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <span className="font-technical text-xs text-[#c5b299] uppercase tracking-wider block">
                Agendamento Direto
              </span>
              <h3 className="font-serif-luxury text-2xl text-[#e2d7c5] mt-1">
                Briefing Executivo Valente
              </h3>
              <p className="text-xs text-zinc-400 mt-2">
                Converse com o Arquiteto Rodrigo Valente via WhatsApp com os dados pré-configurados do seu lote:
              </p>

              <div className="mt-4 space-y-3 font-technical text-xs">
                <div className="bg-[#030303] p-3 border border-zinc-800">
                  <span className="text-zinc-500 block text-[10px]">Condomínio Selecionado:</span>
                  <span className="text-[#e2d7c5] font-semibold">{calculatorCondo}</span>
                </div>
                <div className="bg-[#030303] p-3 border border-zinc-800">
                  <span className="text-zinc-500 block text-[10px]">Área do Lote & Programa:</span>
                  <span className="text-[#e2d7c5] font-semibold">
                    {calculatorLotArea}m² · {calculatorSuites} Suítes · ~{estimatedConstructionArea}m² Construídos
                  </span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={getCustomWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-[#e2d7c5] py-3.5 font-technical text-xs font-semibold tracking-wider text-[#030303] uppercase hover:bg-[#c5b299] transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>Iniciar Conversa no WhatsApp Oficial</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setBriefingModalOpen(false)}
                  className="w-full text-center border border-zinc-700 py-2.5 font-technical text-xs text-zinc-300 hover:bg-zinc-800 transition-colors"
                >
                  Voltar para a Página
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
