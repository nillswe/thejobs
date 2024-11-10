import { Container } from '@/app/_components/shared'
import { Hero, JobsList, Trusted } from '@/app/_components'
import { getLastJobs } from '@/server/functions/jobs.function'

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
