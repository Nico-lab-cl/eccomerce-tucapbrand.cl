import './globals.css';

export const metadata = {
  title: 'TUCAP — Brutalist Streetwear',
  description: 'Premium streetwear headwear and apparel. Brutalist design. Designed in the grit. Built for the grid.',
  keywords: ['streetwear', 'headwear', 'caps', 'fitted caps', 'urban fashion', 'TUCAP'],
  openGraph: {
    title: 'TUCAP — Brutalist Streetwear',
    description: 'Premium streetwear headwear and apparel.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
