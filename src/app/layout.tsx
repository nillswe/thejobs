import type { Metadata } from 'next'

import { Roboto } from 'next/font/google'

import './globals.css'
import { Providers } from './_components'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata: Metadata = {
  title: 'thejobs',
  description: 'Description',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`
          ${roboto.className}
          antialiased
        `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
