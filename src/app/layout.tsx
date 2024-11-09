import type { Metadata } from 'next'

import { Roboto } from 'next/font/google'

import './globals.css'

import { Footer, Header } from '@/app/_components/shared'

import { Providers, ThemeToggle } from './_components'

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
        <Providers>
          <main className='flex min-h-screen w-full flex-col relative'>
            <button className='btn btn-circle btn-primary fixed bottom-5 right-5 shadow'>
              <ThemeToggle />
            </button>

            <div className='flex mb-10 w-full flex-col items-center'>
              <Header />
              {children}
            </div>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  )
}
