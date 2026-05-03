import './globals.css';

export const metadata = {
  title: 'Chocoblingblau - Alfajores de Autor',
  description: 'La excelencia se refleja en cada detalle. Presentaciones diseñadas para elevar la experiencia de regalar y disfrutar.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="light">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@500;600&family=Inter:wght@400;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-surface font-body-md overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
        {children}
      </body>
    </html>
  );
}
