import { Hero, NewJobs, Trusted } from '@/app/_components'

export default async function Home() {
  return (
    <>
      <Hero />
      <Trusted />
      <NewJobs />
    </>
  )
}
