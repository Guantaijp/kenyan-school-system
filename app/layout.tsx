import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'kenyan-school-system',
  description: 'kenyan-school-system',
  generator: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
