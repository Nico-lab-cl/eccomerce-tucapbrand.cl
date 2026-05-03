import './globals.css';

export const metadata = {
  title: 'Chocoblingblau — Premium Artisanal Alfajores',
  description: 'Alfajores artesanales de autor. Elaborados con ingredientes nobles: chocolate belga, manjar de campo y recetas de familia. Envío a todo Chile.',
  keywords: ['alfajores', 'alfajores artesanales', 'chocolate', 'manjar', 'dulce de leche', 'Chocoblingblau', 'confitería premium'],
  openGraph: {
    title: 'Chocoblingblau — Premium Artisanal Alfajores',
    description: 'Alfajores artesanales de autor. Elaborados con ingredientes nobles.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
