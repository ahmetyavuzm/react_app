import { Inter } from 'next/font/google';
import './globals.css';
import LanguageProvider from "./contexts/LanguageContext";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Portfolio Website',
  description: 'My personal portfolio website.',
}

export default function RootLayout({ children }) {

  return (
    <LanguageProvider>

      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </LanguageProvider>
  )
}
