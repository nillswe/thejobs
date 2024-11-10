import { getLastJobs } from '@/server/functions/jobs.function'
import { Container, Hero, JobsList, Trusted } from '@/app/_components'

export default async function Home() {
  const lastJobs = await getLastJobs()

  return (
    <>
      <Hero />
      <Container>
        <Trusted />
        <JobsList jobs={lastJobs} title='New jobs' />
      </Container>
    </>
  )
}
