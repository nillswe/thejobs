import { ReactNode } from 'react'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Job detail',
  description: '',
}

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return children
}
