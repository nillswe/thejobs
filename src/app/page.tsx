import { Container, Hero, JobsList, Trusted } from '@/app/_components'

export default async function Home() {
  return (
    <>
      <Hero />
      <Container>
        <Trusted />
        <JobsList title='New jobs' />
      </Container>
    </>
  )
}
