import './globals.css';
import { Metadata } from 'next';

export const metadata = {
  title: 'Ramanavasan - Full-Stack Developer & AI Educator',
  description: 'CSE 3rd Year Student | Building full-stack apps | Teaching web development, vibe coding, and AI/ML',
  keywords: 'full-stack developer, AI educator, web development, vibe coding, CSE student, portfolio',
  authors: [{ name: 'Ramanavasan' }],
  openGraph: {
    title: 'Ramanavasan - Full-Stack Developer',
    description: 'Learn full-stack development, vibe coding, and AI/ML from a CSE student',
    type: 'website',
    locale: 'en_IN',
  },
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow',
  canonical: 'https://your-domain.com',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#08090c" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-weight='bold' fill='%23e0b64a'>R</text></svg>" />
      </head>
      <body className="antialiased bg-[#08090c] text-gray-100">
        {children}
      </body>
    </html>
  );
}
