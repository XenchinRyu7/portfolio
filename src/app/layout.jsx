import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Saeful Rohman - Portfolio',
  description: 'My professional portfolio showcasing my work and skills',
  viewport: 'width=device-width, initial-scale=1.0',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
