import { Inter } from 'next/font/google';
import './global.css';
import { ModalProvider } from '@/context/ModalContext';
import Providers from './Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'GameBoost',
  description: 'Gaming Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-black`}>
        <Providers>
          <ModalProvider>
            {children}
          </ModalProvider>
        </Providers>
      </body>
    </html>
  );
}