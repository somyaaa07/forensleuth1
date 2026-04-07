import './globals.css'
import { Poppins, Inter } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-poppins',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'ForensicLab - Digital Investigation & Evidence Analysis',
  description: 'Professional forensic analysis and digital investigation services for law enforcement and enterprises.',
  keywords: 'forensic analysis, digital investigation, evidence analysis, cybersecurity',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#207eff" />
      </head>
      <body className="bg-white text-gray-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}