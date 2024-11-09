import { ReactNode } from 'react'

import { Metadata } from 'next'

import { Container } from '@/app/_components'
import { Header } from '@/app/_components/shared'
import { BannerJobs } from '@/app/jobs/_components'
export const metadata: Metadata = {
  title: 'Jobs',
  description: '',
}

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <main className='w-full flex flex-col'>
      <Header />
      <BannerJobs />
      <Container>{children}</Container>
    </main>
  )
}
