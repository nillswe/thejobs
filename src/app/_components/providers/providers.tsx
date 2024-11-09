'use client'

import { ReactNode } from 'react'

import { ThemeProvider } from 'next-themes'

type Props = {
  children: ReactNode
}

export const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider attribute='data-theme' defaultTheme={'thejobs'}>
      {children}
    </ThemeProvider>
  )
}
