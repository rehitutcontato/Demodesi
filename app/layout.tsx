import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Atelier Valente • Arquitetura Residencial Contemporânea',
  description: 'Desenvolvemos residências contemporâneas em condomínios de alto padrão. Equilíbrio de volumetria arrojada, eficiência térmica e proporção pura.',
  openGraph: {
    title: 'Atelier Valente • Arquitetura Residencial Contemporânea',
    description: 'Projetos autorais para condomínios de alto padrão. Espaços que desafiam o tempo através da luz natural e concreto aparente.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atelier Valente • Arquitetura Residencial Contemporânea',
    description: 'Projetos autorais para condomínios de alto padrão.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-[#030303] text-[#e2d7c5] antialiased selection:bg-[#c5b299]/30 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
